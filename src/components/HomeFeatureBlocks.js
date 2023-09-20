import checkmark from '/public/images/illustrations/checkmark.svg'
import squareImage from '/public/images/stock/unsplash/gym-02.jpg'
import portraitImage from '/public/images/stock/unsplash/gym-04.jpg'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import Image from 'next/image'

const features = [
  'USAG Member Club',
  'No annual registration fee',
  'Family owned',
  'Convenient location',
  '10% Military discount',
  'Multi-class discount'
]

export const HomeFeatureBlocks = () => {
  return (
    <section className="overflow-hidden bg-yellow-100 px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
      {/* Container */}
      <div className="mx-auto max-w-screen-xl">
        {/* Centered content with feature list */}
        <div className="relative">
          {/* Block title and subtext */}
          <h2 className="h2 mx-auto max-w-4xl text-center text-purple-900">
            Building a culture of excellence in our community
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl leading-relaxed text-purple-800">
            We are passionate about helping athletes reach their full potential,
            and believe that gymnastics is a great way to develop physical
            skills and self-confidence. We are committed to helping gymnasts
            learn new skills, achieve their goals, and overcome challenges.
          </p>
          {/* Feature list */}
          <div className="mx-auto mt-12 max-w-3xl">
            <ul className="-mx-3 -my-2 flex flex-wrap items-center justify-center text-lg text-purple-800">
              {features.map((feature, index) => (
                <li
                  key={`home-feature-${index}`}
                  className="mx-3 my-2 flex items-center"
                >
                  <Image
                    className="mr-3 h-7 w-7 flex-shrink-0"
                    src={checkmark}
                    alt=""
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto my-16 max-w-xl sm:my-20 lg:my-24 lg:grid lg:max-w-none lg:grid-cols-12 lg:gap-x-14 xl:gap-x-20 2xl:gap-x-24">
          {/* Block images*/}
          <div className="relative lg:order-2 lg:col-span-6">
            <div className="relative sm:pl-36 lg:pl-20 xl:pl-32">
              <div className="aspect-h-4 aspect-w-3 relative rounded-2xl">
                <Image
                  className="absolute inset-0 rounded-2xl object-cover"
                  src={portraitImage}
                  fill
                  alt="A coach helping a girl on the balance beam"
                  sizes="(min-width: 1280px) 29.5rem, (min-width: 1024px) calc(50vw - 8.75rem), (min-width: 640px) 27rem, calc(100vw - 2rem)"
                />
              </div>
              <div className="absolute bottom-0 left-0 hidden rounded-3xl sm:block sm:h-72 sm:w-72 sm:translate-y-1/3 lg:h-64 lg:w-64 xl:h-72 xl:w-72 2xl:h-80 2xl:w-80">
                <Image
                  className="absolute inset-0 h-full w-full rounded-3xl object-cover"
                  src={squareImage}
                  fill
                  alt="A child holding their arms in the air on a balance beam"
                  sizes="(min-width: 1536px) 20rem, (min-width: 1280px) 18rem, (min-width: 1024px) 16rem, (min-width: 640px) 18rem"
                />
              </div>
            </div>
          </div>
          {/* Block text content*/}
          <div className="mt-16 flex flex-col justify-center sm:mt-44 lg:col-span-6 lg:mt-0">
            <div>
              <span className="inline-block rounded-full bg-purple-200 px-4 py-2 font-medium text-purple-700 shadow-md">
                A sense of belonging
              </span>
            </div>
            <h3 className="h3 mt-4 text-purple-900 sm:mt-5">
              A place where athletes feel connected, supported, and inspired
            </h3>
            <p className="mt-3 max-w-2xl text-lg leading-loose text-purple-800">
              We believe that teamwork and friendship are essential for success,
              and we are committed to helping children develop these skills.
            </p>
            <div className="mt-6">
              <Button href="/about" variant="accent" size="sm">
                About Us
                <Icon
                  icon="arrowNarrowRight"
                  className="ml-3 h-6 w-6 group-hover:animate-horizontal-bounce"
                  stroke={2}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
