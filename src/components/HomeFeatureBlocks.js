import Image from 'next/image'

import checkmark from '/public/images/illustrations/checkmark.svg'
import squareImage from '/public/images/stock/unsplash/gym-02.jpg'
import portraitImage from '/public/images/stock/unsplash/gym-04.jpg'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'

const features = [
  'USAG Member Club',
  'No annual registration fee',
  'Military discount',
  'Multi-class discount',
  'Convenient location',
  'Family owned'
]

export const HomeFeatureBlocks = () => {
  return (
    <section className="px-4 pb-16 overflow-hidden bg-yellow-100 sm:pb-24 sm:px-6 lg:px-8">
      {/* Container */}
      <div className="max-w-screen-xl mx-auto">
        {/* Centered content with feature list */}
        <div className="relative">
          {/* Block title and subtext */}
          <h2 className="max-w-4xl mx-auto text-center text-purple-900 h2">
            {/*Building a culture of excellence in our community*/}
            {/*Building a culture and striving for excellence in our community*/}
            {/*  Developing a culture of athletic excellence in our community*/}
              Developing potential and striving to elevate our community
          </h2>
          {/* Feature list */}
          <div className="max-w-3xl mx-auto mt-12">
            <ul className="flex flex-wrap items-center justify-center -mx-3 -my-2 text-lg text-purple-800">
              {features.map((feature, index) => (
                <li
                  key={`home-feature-${index}`}
                  className="flex items-center mx-3 my-2"
                >
                  <Image
                    className="flex-shrink-0 mr-3 w-7 h-7"
                    src={checkmark}
                    alt=""
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-xl mx-auto my-16 lg:max-w-none lg:grid lg:grid-cols-12 lg:gap-x-14 xl:gap-x-20 2xl:gap-x-24 sm:my-20 lg:my-24">
          {/* Block images*/}
          <div className="relative lg:col-span-6 lg:order-2">
            <div className="relative sm:pl-36 lg:pl-20 xl:pl-32">
              <div className="relative aspect-w-3 aspect-h-4 rounded-2xl">
                <Image
                  className="absolute inset-0 object-cover rounded-2xl"
                  src={portraitImage}
                  fill
                  alt="A coach helping a girl on the balance beam"
                  sizes="(min-width: 1280px) 29.5rem, (min-width: 1024px) calc(50vw - 8.75rem), (min-width: 640px) 27rem, calc(100vw - 2rem)"
                />
              </div>
              <div className="absolute hidden sm:block sm:w-72 sm:h-72 lg:w-64 lg:h-64 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 rounded-3xl left-0 bottom-0 sm:translate-y-1/3">
                <Image
                  className="absolute inset-0 object-cover w-full h-full rounded-3xl"
                  src={squareImage}
                  fill
                  alt="A child holding their arms in the air on a balance beam"
                  sizes="(min-width: 1536px) 20rem, (min-width: 1280px) 18rem, (min-width: 1024px) 16rem, (min-width: 640px) 18rem"
                />
              </div>
            </div>
          </div>
          {/* Block text content*/}
          <div className="flex flex-col justify-center mt-16 lg:mt-0 lg:col-span-6 sm:mt-44">
            <div>
              <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md">
                A sense of belonging
              </span>
            </div>
            <h3 className="mt-4 text-purple-900 sm:mt-5 h3">
              {/*We provide a welcoming and supportive environment*/}
                A place where people feel connected, supported, and inspired
            </h3>
            <p className="max-w-2xl mt-3 text-lg leading-loose text-purple-800">
              Our team will help develop an athletes physical skills, such as
              strength, flexibility, and coordination, all while building
              confidence, overcome obstacles, and developing personal
              discipline. When children learn new skills and achieve goals, it
              can boost their self-confidence and self-esteem. This can carry
              over into other areas of their lives, such as school and social
              interactions. Gymnastics is a team sport, which can help children
              learn the importance of teamwork and friendship.
            </p>
            <div className="mt-6">
              <Button href="/about" variant="accent" size="sm">
                Learn More
                <Icon
                  icon="arrowNarrowRight"
                  className="w-6 h-6 ml-3 group-hover:animate-horizontal-bounce"
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
