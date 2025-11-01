import * as fs from 'fs'
import * as path from 'path'

const programsDir = path.resolve(__dirname, '../../src/data/programs')

export function getProgramSlugs(): string[] {
  try {
    const entries = fs.readdirSync(programsDir, { withFileTypes: true })
    return entries
      .filter(e => e.isFile())
      .map(e => e.name)
      .filter(name => name.endsWith('.md'))
      .map(name => name.replace(/\.[^/.]+$/, ''))
      .sort()
  } catch (err) {
    // Directory missing or unreadable — return empty list to avoid crashing tests
    return []
  }
}
