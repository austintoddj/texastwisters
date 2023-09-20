import image3 from '/public/images/stock/unsplash/gym-05.jpg'
import image2 from '/public/images/stock/unsplash/gym-06.jpg'
import image4 from '/public/images/stock/unsplash/gym-08.jpg'
import image1 from '/public/images/stock/unsplash/gym-10.jpg'
import image5 from '/public/images/stock/unsplash/gym-12.jpg'
import Image from 'next/image'
import { Fragment } from 'react'

const images = [
  { src: image1, alt: 'A group of people sitting on mats' },
  { src: image2, alt: 'A group of girls sitting on a mat' },
  { src: image3, alt: 'A person smiling for the camera' },
  { src: image4, alt: 'A group of girls in a gym' },
  { src: image5, alt: 'A person and a child playing with toys on a blue mat' }
]

export function AboutHero() {
  return (
    <section className="bg-purple-25 px-4 pt-16 sm:px-6 lg:px-8">
      {/* Container */}
      <div className="mx-auto max-w-screen-xl">
        {/* Page header */}
        <div className="relative">
          <h2 className="h1 mx-auto max-w-3xl text-center text-purple-900">
            About Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-xl leading-relaxed text-purple-800 sm:mt-5">
            We're dedicated to provide a safe, fun, and challenging environment
            where athletes of any age can grow and develop in the world of
            gymnastics.
          </p>
        </div>
        {/* School images grid */}
        <div className="mt-14 grid grid-flow-row-dense grid-cols-2 gap-2 sm:mt-16 sm:grid-cols-3 sm:gap-3 md:gap-4 lg:mt-24 lg:gap-6">
          {images.map((image, index) => (
            <Fragment key={`gallery-image-${index}`}>
              {index % 5 == 1 && (
                <Image
                  className="col-span-2 h-30vw w-full rounded-2xl object-cover object-top lg:h-80"
                  priority={true}
                  alt={image.alt}
                  src={image.src}
                  sizes="(min-width: 1280px) 52.875rem, (min-width: 640px) 66vw, 100vw"
                />
              )}

              {index % 5 != 1 && (
                <Image
                  className="h-30vw w-full rounded-2xl object-cover lg:h-80"
                  alt={image.alt}
                  src={image.src}
                  sizes="(min-width: 1280px) 25.75rem, (min-width: 640px) 33vw, 50vw"
                />
              )}
            </Fragment>
          ))}
        </div>
        {/* About school */}
        <div className="prose prose-lg mx-auto mt-14 sm:prose-xl sm:mt-16 lg:mt-24">
          <p className="text-2xl">From the owner:</p>
          <p>
            I was introduced to gymnastics at four years old, and it has led to
            a lifelong passion. What started in preschool, grew to recreational
            classes, transitioned to competitive team, and finally settled into
            adult gymnastics. I have coached at six different gyms across the
            country, and have been influenced by many incredible coaches and
            athletes along the way.
          </p>
          <p>
            While coaching at a gym that offered adult gymnastics, my husband
            Todd was introduced to the sport for the first time. Watching his
            talent and excitement grow inspired my passion to involve more
            adults in gymnastics.
          </p>
          <p>
            Our daughter is now a competitive gymnast, and currently holds state
            titles on bars and vault. Our son loves baseball and is currently
            playing his fifth season with GYBA.
          </p>
          <p>
            We moved from Minneapolis to Georgetown in 2018, and are proud to
            call it our home. We love Georgetown and can't wait to bring this
            business to you!
          </p>
          <p className="italic">Becky</p>
        </div>
      </div>
    </section>
  )
}
