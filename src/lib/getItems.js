/**
 * Utility functions for loading and parsing Markdown data files from src/data.
 *
 * getItemData(slug, type): Loads frontmatter metadata for a single item.
 * getAllItems(dir, shuffle): Loads all items in a directory, optionally shuffling or sorting by 'order'.
 *
 * Usage: Used throughout the site to fetch structured content for events, faqs, programs, etc.
 */
import * as Sentry from '@sentry/nextjs'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export function getItemData(slug, type) {
  try {
    const markdownWithMeta = fs.readFileSync(
      path.join('src/data', type, slug + '.md'),
      'utf-8'
    )

    const { data } = matter(markdownWithMeta)

    return data
  } catch (error) {
    // Capture parse/IO errors for diagnostics without leaking file contents or PII
    try {
      Sentry.captureException(error, {
        level: 'error',
        tags: { module: 'getItems', method: 'getItemData', type },
        extra: {
          slug,
          exists: fs.existsSync(path.join('src/data', type, slug + '.md'))
        }
      })
    } catch {
      // best-effort
    }
    throw error
  }
}

export function getAllItems(dir, shuffle = false) {
  try {
    const files = fs.readdirSync(path.join(`src/data/${dir}`))

    const items = files.map(filename => {
      const fileContents = fs.readFileSync(
        path.join(`src/data/${dir}`, filename),
        'utf8'
      )

      const { data: frontmatter } = matter(fileContents)
      return { slug: filename.replace('.md', ''), data: frontmatter }
    })

    // Sort by order if all items have an order property
    if (items.length > 0 && items.every(item => 'order' in item.data)) {
      items.sort((a, b) => {
        const orderA = Number(a.data.order) // Ensure numeric comparison
        const orderB = Number(b.data.order)
        return orderA - orderB // Ascending order
      })
    } else if (shuffle) {
      // Shuffle only if order-based sorting doesn't apply
      items.sort(() => Math.random() - 0.5)
    }

    return items
  } catch (error) {
    try {
      Sentry.captureException(error, {
        level: 'error',
        tags: { module: 'getItems', method: 'getAllItems', dir },
        extra: {
          dir,
          fileCount: (() => {
            try {
              return fs.readdirSync(path.join(`src/data/${dir}`)).length
            } catch {
              return undefined
            }
          })()
        }
      })
    } catch {
      // best-effort
    }
    throw error
  }
}
