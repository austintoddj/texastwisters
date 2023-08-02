"use client";

{
  /* This component uses Lightgallery, a customizable, modular, responsive, lightbox gallery plugin.  https://github.com/sachinchoolur/lightGallery */
}

import Image from "next/image";
import { useState, useEffect } from "react";
import clsx from "clsx";
import LightGallery from "lightgallery/react";
import { Icon } from "@/components/Icon";

export const Gallery = ({ gallery, tags }) => {
  const [galleryPhotos, setGalleryPhotos] = useState(gallery);
  const [selectedTag, setSelectedTag] = useState("all");

  useEffect(() => {
    setGalleryPhotos(
      selectedTag === "all"
        ? gallery
        : gallery.filter((image) => image.data.tag === selectedTag)
    );
  }, [selectedTag, gallery]);

  function GalleryTabs() {
    return (
      <>
        <div className="px-4 pt-20 bg-purple-25 sm:pt-28 lg:pt-36 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto">
            <h3 className="max-w-2xl mx-auto mb-10 text-center text-purple-900 sm:mb-12 md:mb-20 h2">
              See what it's like to be part of our school
            </h3>
            <ul className="flex flex-wrap items-center justify-center -my-2 space-x-2 text-sm font-medium sm:space-x-4 lg:space-x-6">
              <li className="my-2">
                <button
                  className={clsx(
                    "inline-flex items-center justify-center px-4 py-1.5 sm:text-lg duration-300 ease-in-out rounded-full",
                    selectedTag === "all"
                      ? "bg-purple-600 text-purple-25 hover:bg-purple-500"
                      : "text-purple-700 bg-white shadow-sm hover:bg-purple-100"
                  )}
                  onClick={() => setSelectedTag("all")}
                >
                  All images
                </button>
              </li>
              {tags.map((tag, index) => (
                <li key={`tag-${index}`} className="my-2">
                  <button
                    className={clsx(
                      "inline-flex items-center justify-center px-4 py-1.5 sm:text-lg duration-300 ease-in-out rounded-full",
                      selectedTag === tag
                        ? "bg-purple-600 text-purple-25 hover:bg-purple-500"
                        : "text-purple-700 bg-white shadow-sm hover:bg-purple-100"
                    )}
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Background for overlay effect */}
        <div className="w-full h-56 bg-purple-25" />
      </>
    );
  }

  function GalleryPhotos() {
    return (
      <ul
        id="gallery-grid"
        className="grid gap-y-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-4 2xl:gap-5"
      >
        {galleryPhotos.map((image, index) => (
          <li
            key={`gallery-image-${index}`}
            className="relative cursor-pointer group"
            data-src={image.data.src}
          >
            <div className="aspect-w-1 aspect-h-1 bg-purple-50">
              <Image
                src={image.data.src}
                fill
                className="object-cover rounded-2xl"
                alt={image.data.alt}
                sizes="(min-width: 1280px) 19.25rem, (min-width: 1024px) 25vw, (min-width: 768px) 23.25rem, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 transition duration-300 bg-gray-900 opacity-0 rounded-2xl group-hover:opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center transition duration-300 opacity-0 group-hover:opacity-100">
                <div className="flex items-center justify-center w-24 h-24 bg-purple-600 rounded-full opacity-80">
                  <Icon
                    icon="plus"
                    className="w-12 h-12 text-white"
                    stroke={2}
                  />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section>
      <GalleryTabs />

      {/* Gallery */}
      <div className="px-4 mt-12 -mb-48 -translate-y-56 lg:mt-20 sm:mt-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto lg:max-w-screen-xl">
          <LightGallery speed={500} selector="li">
            <GalleryPhotos />
          </LightGallery>
        </div>
      </div>
    </section>
  );
};
