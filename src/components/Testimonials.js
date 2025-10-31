import { Icon } from '@/components/Icon'
import { getAllItems } from '@/lib/getItems'
import clsx from 'clsx'
import Image from 'next/image'

const bgColorsClassName = [
  'bg-yellow-200',
  'bg-purple-25',
  'bg-rose-50',
  'bg-blue-50'
]

export const Testimonials = () => {
  const testimonials = getAllItems('testimonials', true)

  return (
    <section className="bg-purple-600 py-20 sm:py-28 md:-mt-48 lg:py-32">
      {/* Container */}
      <div className="">
        {/* Section header title and subheader */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="h2 max-w-2xl text-center text-white">
            See what parents are saying about us
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl leading-relaxed text-purple-50">
            We care about your experience at Texas Twisters. Whether you&apos;re
            a gymnast or a parent of one, you deserve the best we can offer.
          </p>
        </div>
        <div className="w-full inline-flex flex-nowrap overflow-hidden mt-12 md:mt-14 lg:mt-16 xl:mt-20 2xl:mt-24">
          <ul className="flex [&_li]:mx-8 [&_li]:flex animate-infinite-scroll">
            {testimonials.map((item, index) => (
              <li key={index}>
                <blockquote
                  key={`testimonial-${index}`}
                  className={clsx(
                    bgColorsClassName[index % 4],
                    'w-96 grow rounded-3xl px-8 py-8 transition duration-300 ease-in-out sm:px-6 md:px-8 lg:px-5 2xl:px-8'
                  )}
                >
                  <Image
                    src={item.data.image}
                    width={80}
                    height={80}
                    className="h-14 w-14 object-fit"
                    alt={item.data.name}
                    priority
                  />
                  <p className="mt-3 text-lg font-bold text-purple-900">
                    {item.data.name}
                  </p>
                  {/* Rating */}
                  <div className="mt-1 flex w-full justify-start space-x-1">
                    {[...Array(item.data.stars)].map((e, i) => (
                      <Icon
                        key={`${item.data.name}-star-${i}`}
                        icon="starFilled"
                        className="h-5 w-5 text-yellow-500"
                      />
                    ))}
                  </div>
                  <p className="mt-5 text-lg text-purple-800">
                    &ldquo;{item.data.testimonial}&rdquo;
                  </p>
                </blockquote>
              </li>
            ))}
          </ul>
          <ul
            className="flex [&_li]:mx-8 [&_li]:flex animate-infinite-scroll"
            aria-hidden="true"
          >
            {testimonials.map((item, index) => (
              <li key={index}>
                <blockquote
                  key={`testimonial-${index}`}
                  className={clsx(
                    bgColorsClassName[index % 4],
                    'w-96 grow rounded-3xl px-8 py-8 transition duration-300 ease-in-out sm:px-6 md:px-8 lg:px-5 2xl:px-8'
                  )}
                >
                  <Image
                    src={item.data.image}
                    width={80}
                    height={80}
                    className="h-14 w-14 object-fit"
                    alt={item.data.name}
                    priority
                  />
                  <p className="mt-3 text-lg font-bold text-purple-900">
                    {item.data.name}
                  </p>
                  {/* Rating */}
                  <div className="mt-1 flex w-full justify-start space-x-1">
                    {[...Array(item.data.stars)].map((e, i) => (
                      <Icon
                        key={`${item.data.name}-star-${i}`}
                        icon="starFilled"
                        className="h-5 w-5 text-yellow-500"
                      />
                    ))}
                  </div>
                  <p className="mt-5 text-lg text-purple-800">
                    &ldquo;{item.data.testimonial}&rdquo;
                  </p>
                </blockquote>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
