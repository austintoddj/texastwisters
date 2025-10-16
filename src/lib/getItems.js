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

export function getItemData(slug, type) {
  const markdownWithMeta = fs.readFileSync(
    path.join('src/data', type, slug + '.md'),
    'utf-8'
  )

  const { data } = matter(markdownWithMeta)

  return data
}

export function getAllItems(dir, shuffle = false) {
  const files = fs.readdirSync(path.join(`src/data/${dir}`))

  const items = files.map(filename => {
    const fileContents = fs.readFileSync(
      path.join(`src/data/${dir}`, filename),
      'utf8'
    )

    const { data: frontmatter } = matter(fileContents)
    return { slug: filename.replace('.md', ''), data: frontmatter }
  })

  // // Check if the items have an 'order' property and sort them accordingly
  // if (items.order && items.every(item => 'order' in item.data)) {
  //   items.sort((a, b) => {
  //     const orderA = a.data.order
  //     const orderB = b.data.order
  //     return orderA - orderB // Ascending order based on the order property
  //   })
  // }

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
}
