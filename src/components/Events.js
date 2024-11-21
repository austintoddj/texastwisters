import { getAllItems } from '@/lib/getItems'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

const eventColors = [
  'bg-yellow-200',
  'bg-purple-25',
  'bg-rose-50',
  'bg-teal-50'
]

export const Events = () => {
  const events = getAllItems('events')

  return (
    <section className="relative w-full px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      {/* Container */}
      <div className="mx-auto max-w-2xl lg:max-w-screen-xl">
        {/* Section header title and subtext  */}
        <div>
          <h2 className="h2 text-purple-900 lg:text-center">Upcoming events</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl leading-relaxed text-purple-800 lg:mt-4 lg:text-center">
            Our families are an important and integral part of our community, so
            we understand the value of keeping you in the loop on what’s
            happening here.
          </p>
        </div>
        {/* Events */}
        <div className="mt-12 sm:mt-16 lg:grid lg:grid-cols-2 lg:gap-6 xl:gap-8">
          {events.map((event, index) => (
            <div
              key={`event-${index}`}
              className={clsx(
                'grid w-full rounded-2xl sm:grid-cols-12',
                index > 0 && 'mt-8 lg:mt-0',
                eventColors[index % 4]
              )}
            >
              {/* Event image */}
              <div
                className={clsx(
                  'relative h-48 rounded-t-2xl sm:col-span-4 sm:h-full',
                  index % 2 == 0
                    ? 'sm:rounded-l-2xl sm:rounded-tr-none'
                    : 'sm:order-2 sm:rounded-r-2xl sm:rounded-tl-none'
                )}
              >
                <Image
                  src={event.data.image}
                  className={clsx(
                    'absolute inset-0 h-full w-full rounded-t-2xl object-cover object-center',
                    index % 2 == 0
                      ? 'sm:rounded-l-2xl sm:rounded-tr-none'
                      : 'sm:rounded-r-2xl sm:rounded-tl-none'
                  )}
                  fill
                  alt={event.data.name}
                  sizes="(min-width: 1280px) 13rem, (min-width: 1024px) 16.67rem, (min-width: 640px) 14rem, calc(100vw - 2rem)"
                />
              </div>
              {/* Event info */}
              <div
                className={clsx(
                  'flex h-full flex-col justify-center px-6 py-8 sm:col-span-8 sm:px-8 sm:py-10 lg:px-6 xl:px-8',
                  index % 2 == 1 && 'order-2 sm:order-1'
                )}
              >
                <div>
                  <div className="inline-flex items-center justify-center rounded-xl bg-purple-200 px-3.5 py-0.5 align-top text-sm font-medium leading-6 text-purple-700">
                    {event.data.dates}
                  </div>
                </div>
                <h4 className="mt-4 text-2xl font-bold text-purple-900 sm:text-3xl lg:text-2xl lg:leading-tight xl:text-3xl xl:leading-tight">
                  {event.data.name}
                </h4>
                <p className="mt-1 text-purple-800 lg:mt-2">
                  {event.data.description}
                  {event.data.href && (
                    <Link
                      className="ml-2 underline"
                      href={event.data.href}
                      target="_blank"
                    >
                      See details
                    </Link>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
