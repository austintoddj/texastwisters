/**
 * Utility functions for loading and parsing Markdown data files from src/data.
 *
 * getItemData(slug, type): Loads frontmatter metadata for a single item.
 * getAllItems(dir, shuffle): Loads all items in a directory, optionally shuffling or sorting by 'order'.
 *
 * Usage: Used throughout the site to fetch structured content for events, faqs, programs, etc.
 */
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

// Generic type for frontmatter data
export type FrontmatterData = Record<string, any>

// Type for items returned by getAllItems
export interface DataItem {
  slug: string
  data: FrontmatterData
}

// Cache for production builds to avoid repeated file reads
const cache = new Map<string, any>()

export async function getItemData(
  slug: string,
  type: string
): Promise<FrontmatterData> {
  try {
    const cacheKey = `item-${type}-${slug}`
    if (cache.has(cacheKey) && process.env.NODE_ENV === 'production') {
      return cache.get(cacheKey)
    }

    const filePath = path.join('src/data', type, slug + '.md')
    const markdownWithMeta = await fs.promises.readFile(filePath, 'utf-8')

    const { data } = matter(markdownWithMeta)

    if (process.env.NODE_ENV === 'production') {
      cache.set(cacheKey, data)
    }

    return data
  } catch (error) {
    console.error(`Error reading item data for ${type}/${slug}:`, error)
    throw new Error(`Failed to load ${type} data for ${slug}`)
  }
}

export async function getAllItems(
  dir: string,
  shuffle = false
): Promise<DataItem[]> {
  try {
    const cacheKey = `all-${dir}-${shuffle}`
    if (cache.has(cacheKey) && process.env.NODE_ENV === 'production') {
      return cache.get(cacheKey)
    }

    const dirPath = path.join('src/data', dir)
    const files = await fs.promises.readdir(dirPath)

    const items = await Promise.all(
      files
        .filter(filename => filename.endsWith('.md'))
        .map(async filename => {
          const filePath = path.join(dirPath, filename)
          const fileContents = await fs.promises.readFile(filePath, 'utf8')

          const { data: frontmatter } = matter(fileContents)
          return {
            slug: filename.replace('.md', ''),
            data: frontmatter
          }
        })
    )

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

    if (process.env.NODE_ENV === 'production') {
      cache.set(cacheKey, items)
    }

    return items
  } catch (error) {
    console.error(`Error reading items from ${dir}:`, error)
    throw new Error(`Failed to load ${dir} data`)
  }
}
