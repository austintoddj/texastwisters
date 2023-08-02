import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getItemData(slug, type) {
  const markdownWithMeta = fs.readFileSync(
    path.join("src/data", type, slug + ".md"),
    "utf-8"
  );

  const { data } = matter(markdownWithMeta);

  return data;
}

export function getAllItems(dir) {
  const files = fs.readdirSync(path.join(`src/data/${dir}`));

  const itemsData = files.map((filename) => {
    const fileContents = fs.readFileSync(
      path.join(`src/data/${dir}`, filename),
      "utf8"
    );

    const { data: frontmatter } = matter(fileContents);
    return { slug: filename.replace(".md", ""), data: frontmatter };
  });

  return itemsData;
}

export function getGalleryTags() {
  const galleryImages = getAllItems("gallery");
  const uniqueTags = [...new Set(galleryImages.map((image) => image.data.tag))];
  return uniqueTags;
}
