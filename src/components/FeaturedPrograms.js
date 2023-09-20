import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { getAllItems } from '@/lib/getItems'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import curvedDottedLine from '/public/images/illustrations/curved-dotted-line.svg'
import loopedDottedLine from '/public/images/illustrations/looped-dotted-line.svg'

const ProgramCard = ({ program, index }) => (
  <div
    className={clsx(
      index == 1 &&
        'mt-12 w-full rounded-3xl bg-yellow-200 px-8 py-10 sm:p-12 md:mt-0 md:-translate-y-80 md:px-8 md:py-10 lg:p-12',
      index == 2 &&
        'mt-12 w-full rounded-3xl bg-blue-50 px-8 py-10 sm:p-12 md:col-start-2 md:mt-0 md:-translate-y-80 md:px-8 md:py-10 lg:p-12',
      'relative'
    )}
  >
    {index == 0 && (
      <Image
        src={curvedDottedLine}
        className="absolute left-1/2 top-0 hidden -translate-y-1/2 md:block"
        style={{ width: 'calc(50% + 4rem)' }}
        alt=""
      />
    )}
    <div
      className={clsx(
        index == 0 &&
          'relative z-10 w-full rounded-3xl bg-purple-25 px-8 py-10 sm:p-12 md:px-8 md:py-10 lg:p-12'
      )}
    >
      <div className="flex flex-col justify-between">
        <div className="flex-1">
          <h3 className="h3 text-purple-900">{program.data.name}</h3>
          <p className="mt-3 max-w-2xl text-lg leading-loose text-purple-800">
            {program.data.hero.text}
          </p>
          <div className="aspect-h-2 aspect-w-3 relative mt-8">
            <Image
              className="absolute inset-0 rounded-2xl object-cover"
              fill
              src={program.data.hero.image.src}
              alt={program.data.name}
              sizes="(min-width: 1280px) 32rem, (min-width: 768px) calc(50vw - 6.5rem), (min-width: 640px) 30rem, calc(100vw - 6rem)"
            />
          </div>
        </div>
        <div className="mt-8">
          <Button href={`/programs/${program.slug}`} variant="accent" size="sm">
            Our {program.data.name} program
            <Icon
              icon="arrowNarrowRight"
              className="ml-3 h-5 w-5 group-hover:animate-horizontal-bounce"
              stroke={2}
            />
          </Button>
        </div>
      </div>
    </div>
    {index == 0 && (
      <Image
        src={loopedDottedLine}
        className="absolute bottom-0 left-1/2 hidden translate-y-[90%] md:block"
        style={{ width: 'calc(50% + 4rem)' }}
        alt=""
      />
    )}
  </div>
)

export const FeaturedPrograms = () => {
  const featuredPrograms = getAllItems('programs')
    .filter(program => program.data.featured)
    .slice(0, 3)

  return (
    <section className="overflow-hidden px-4 pb-24 pt-16 sm:px-6 sm:pb-28 sm:pt-24 md:pb-0 lg:px-8">
      {/* Container */}
      <div className="mx-auto max-w-xl md:max-w-screen-xl">
        {/* Section header title and subtext  */}
        <div className="md:grid md:grid-cols-2 md:gap-12 lg:gap-16">
          <div>
            <h2 className="h2 max-w-4xl text-purple-900">
              Classes for any age or experience level
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl leading-relaxed text-purple-800 sm:mt-5 lg:text-left">
              Explore some of the featured classes we offer at Texas Twisters.
              Looking for something else? Check out our{' '}
              <Link href="/programs/adult" className="underline">
                Adult Gymnastics
              </Link>
              ,{' '}
              <Link href="/programs/tumbling" className="underline">
                Tumbling
              </Link>
              ,{' '}
              <Link href="/programs/open-gym" className="underline">
                Open Gym
              </Link>
              , or{' '}
              <Link href="/programs/birthday" className="underline">
                Birthday Parties
              </Link>
              !
            </p>
          </div>
        </div>
        {/* School programs */}
        <div className="mt-16 md:mt-72 md:grid md:grid-cols-2 md:gap-8 lg:gap-16">
          {featuredPrograms.map((program, index) => (
            <ProgramCard
              key={`featured-program-${program.data.name}`}
              program={program}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
