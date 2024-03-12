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

export function getAllItems(dir) {
  const files = fs.readdirSync(path.join(`src/data/${dir}`))

  return files.map(filename => {
    const fileContents = fs.readFileSync(
      path.join(`src/data/${dir}`, filename),
      'utf8'
    )

    const { data: frontmatter } = matter(fileContents)
    return { slug: filename.replace('.md', ''), data: frontmatter }
  })
}

export function getRandomItems(dir, num) {
  const files = fs.readdirSync(path.join(`src/data/${dir}`))

  return files
    .sort(() => Math.random() - 0.5)
    .slice(0, num)
    .map(filename => {
      const fileContents = fs.readFileSync(
        path.join(`src/data/${dir}`, filename),
        'utf8'
      )

      const { data: frontmatter } = matter(fileContents)
      return { slug: filename.replace('.md', ''), data: frontmatter }
    })
}

export function getGalleryTags() {
  const galleryImages = getAllItems('gallery')
  return [...new Set(galleryImages.map(image => image.data.tag))]
}
