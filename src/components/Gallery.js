'use client'

import clsx from 'clsx'
import LightGallery from 'lightgallery/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Icon } from '@/components/Icon'

{
  /* This component uses Lightgallery, a customizable, modular, responsive, lightbox gallery plugin.  https://github.com/sachinchoolur/lightGallery */
}

export const Gallery = ({ gallery, tags }) => {
  const [galleryPhotos, setGalleryPhotos] = useState(gallery)
  const [selectedTag, setSelectedTag] = useState('all')

  useEffect(() => {
    setGalleryPhotos(
      selectedTag === 'all'
        ? gallery
        : gallery.filter(image => image.data.tag === selectedTag)
    )
  }, [selectedTag, gallery])

  function GalleryTabs() {
    return (
      <>
        <div className="bg-purple-25 px-4 pt-20 sm:px-6 sm:pt-28 lg:px-8 lg:pt-36">
          <div className="mx-auto max-w-screen-xl">
            <h3 className="h2 mx-auto mb-10 max-w-2xl text-center text-purple-900 sm:mb-12 md:mb-20">
              See what it's like to be part of our school
            </h3>
            <ul className="-my-2 flex flex-wrap items-center justify-center space-x-2 text-sm font-medium sm:space-x-4 lg:space-x-6">
              <li className="my-2">
                <button
                  className={clsx(
                    'inline-flex items-center justify-center rounded-full px-4 py-1.5 duration-300 ease-in-out sm:text-lg',
                    selectedTag === 'all'
                      ? 'bg-purple-600 text-purple-25 hover:bg-purple-500'
                      : 'bg-white text-purple-700 shadow-sm hover:bg-purple-100'
                  )}
                  onClick={() => setSelectedTag('all')}
                >
                  All images
                </button>
              </li>
              {tags.map((tag, index) => (
                <li key={`tag-${index}`} className="my-2">
                  <button
                    className={clsx(
                      'inline-flex items-center justify-center rounded-full px-4 py-1.5 duration-300 ease-in-out sm:text-lg',
                      selectedTag === tag
                        ? 'bg-purple-600 text-purple-25 hover:bg-purple-500'
                        : 'bg-white text-purple-700 shadow-sm hover:bg-purple-100'
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
        <div className="h-56 w-full bg-purple-25" />
      </>
    )
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
            className="group relative cursor-pointer"
            data-src={image.data.src}
          >
            <div className="aspect-h-1 aspect-w-1 bg-purple-50">
              <Image
                src={image.data.src}
                fill
                className="rounded-2xl object-cover"
                alt={image.data.alt}
                sizes="(min-width: 1280px) 19.25rem, (min-width: 1024px) 25vw, (min-width: 768px) 23.25rem, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 rounded-2xl bg-gray-900 opacity-0 transition duration-300 group-hover:opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-purple-600 opacity-80">
                  <Icon
                    icon="plus"
                    className="h-12 w-12 text-white"
                    stroke={2}
                  />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <section>
      <GalleryTabs />

      {/* Gallery */}
      <div className="-mb-48 mt-12 -translate-y-56 px-4 sm:mt-16 sm:px-6 lg:mt-20 lg:px-8">
        <div className="mx-auto max-w-3xl lg:max-w-screen-xl">
          <LightGallery speed={500} selector="li">
            <GalleryPhotos />
          </LightGallery>
        </div>
      </div>
    </section>
  )
}
