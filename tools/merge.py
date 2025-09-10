import csv
import os
import sys
from collections import defaultdict
from datetime import datetime

"""
Merges two CSV files from the CLA-18 iClassPro report, combining student enrollment data by student name across months.

This script takes two CSV files as command-line arguments, each with a 'Student' column and month columns (e.g., 'Jun/24') indicating enrollment ('Y' or 'N'). It standardizes student names, merges enrollment data using an OR operation (if either file marks a student as enrolled for a month, they are marked as enrolled), and outputs a new CSV with unique students, their enrollment patterns, and total months enrolled. It also calculates and prints the average retention across all students and logs any duplicate student records.

Usage:
    python merge.py first.csv second.csv

Input Requirements:
    - Two CSV files, each with a 'Student' column and month columns in 'MMM/YY' format (e.g., 'Jun/24').
    - Month columns should contain 'Y' for enrolled or 'N' for not enrolled.
    - Files must exist, be readable, and non-empty.

Output:
    - A new CSV file (e.g., 'merged_output.csv') with columns: 'Student', month columns, and 'Total Months'.
    - Console output with the output file path, total unique students and average retention.
    - Logs duplicate student records (students appearing in both CSVs or multiple times in one CSV).

Error Handling:
    - Exits with an error message if input files are missing, unreadable, empty, or lack a 'Student' column.
    - Ensures the output directory is writable and generates a unique output filename if 'merged_output.csv' already exists.
"""

def standardize_name(name):
    name = name.strip()
    parts = [part.strip().capitalize() for part in name.split(',')]
    return ', '.join(parts)

def parse_month(month_str):
    # Parse "Jul/24" to (2024, 7)
    try:
        month, year = month_str.split('/')
        month_num = datetime.strptime(month, '%b').month
        year_num = 2000 + int(year)  # Assume 20xx
        return year_num, month_num
    except ValueError:
        raise ValueError(f"Invalid month format: {month_str}")

def get_output_filename():
    # Generate output filename with increment if needed
    base_dir = os.path.dirname(os.path.abspath(__file__))
    base_name = "merged_output.csv"
    output_csv = os.path.join(base_dir, base_name)
    counter = 1
    while os.path.exists(output_csv):
        output_csv = os.path.join(base_dir, f"merged_output_{counter}.csv")
        counter += 1
    return output_csv

def main():
    if len(sys.argv) != 3:
        print("Usage: python merge.py first.csv second.csv")
        sys.exit(1)

    first_csv, second_csv = sys.argv[1:3]
    output_csv = get_output_filename()

    # Check files
    for file in [first_csv, second_csv]:
        if not os.path.isfile(file):
            print(f"Error: {file} does not exist.")
            sys.exit(1)
        if not os.access(file, os.R_OK):
            print(f"Error: {file} is not readable.")
            sys.exit(1)
        if os.stat(file).st_size == 0:
            print(f"Error: {file} is empty.")
            sys.exit(1)

    # Check output dir writable
    output_dir = os.path.dirname(output_csv) or '.'
    if not os.access(output_dir, os.W_OK):
        print(f"Error: Directory for {output_csv} is not writable.")
        sys.exit(1)

    # Get months from headers
    def get_months(file):
        with open(file, 'r', newline='') as f:
            reader = csv.reader(f)
            header = next(reader)
        months = [h for h in header if '/' in h and len(h) == 6]  # e.g., "Jun/24"
        return sorted(months, key=parse_month)

    months1 = get_months(first_csv)
    months2 = get_months(second_csv)
    all_months = sorted(set(months1 + months2), key=parse_month)

    # Check for "Student" column
    for file in [first_csv, second_csv]:
        with open(file, 'r', newline='') as f:
            reader = csv.reader(f)
            header = next(reader)
        if 'Student' not in header:
            print(f"Error: File '{file}' does not contain 'Student' column in header.")
            sys.exit(1)

    # Process CSVs to collect enrollment per name, merging by OR 'Y'
    enrollment = defaultdict(lambda: ['N'] * len(all_months))
    duplicate_log = defaultdict(list)  # Track duplicates for logging

    def process_csv(file, local_months):
        with open(file, 'r', newline='') as f:
            reader = csv.DictReader(f)
            for row in reader:
                if not row['Student'] or 'Total' in row['Student']:
                    continue
                name = standardize_name(row['Student'])
                duplicate_log[name].append(os.path.basename(file))
                for i, m in enumerate(all_months):
                    if m in local_months and row[m] == 'Y':
                        enrollment[name][i] = 'Y'

    process_csv(first_csv, months1)
    process_csv(second_csv, months2)

    # Log duplicates (students appearing in both CSVs or multiple times)
    duplicates = {name: files for name, files in duplicate_log.items() if len(files) > 1 or files.count(files[0]) > 1}
    if duplicates:
        print("Merged duplicate student records:")
        for name, files in duplicates.items():
            print(f"  {name}: Found in {', '.join(set(files))} ({len(files)} entries)")

    # Write output
    with open(output_csv, 'w', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(['Student'] + all_months + ['Total Months'])
        for name in sorted(enrollment):
            pattern = enrollment[name]
            total = sum(1 for p in pattern if p == 'Y')
            writer.writerow([name] + pattern + [total])

    if os.stat(output_csv).st_size == 0:
        print(f"Error: Failed to create output CSV '{output_csv}'.")
        sys.exit(1)

    # Calculate average retention
    total_students = len(enrollment)
    total_months_sum = 0
    with open(output_csv, 'r', newline='') as f:
        reader = csv.DictReader(f)
        for row in reader:
            total_months_sum += int(row['Total Months'])

    avg_retention = total_months_sum / total_students if total_students > 0 else 0

    print(f"Merged CSV saved to {output_csv}")
    print(f"Total unique students: {total_students}")
    print(f"Average retention: {avg_retention:.2f} months")

if __name__ == "__main__":
    main()
