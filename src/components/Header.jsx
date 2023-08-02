"use client";

import { ContactHeader } from "@/components/ContactHeader";
import { Navbar } from "@/components/Navbar";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function Header({ programs, contact }) {
  const pathname = usePathname();

  return (
    <header
      className={clsx(pathname === "/parents" ? "bg-white" : "bg-purple-25")}
    >
      <ContactHeader contact={contact} />
      <Navbar programs={programs} />
    </header>
  );
}
