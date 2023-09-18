import Image from 'next/image'

import checkmark from '/public/images/illustrations/checkmark.svg'
import image from '/public/images/stock/values.jpg'

const values = [
  {
    value: 'Safety First',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt ut labore et'
  },
  {
    value: 'Skill Progression',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt ut labore et'
  },
  {
    value: 'Positive Coaching',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt ut labore et'
  },
  {
    value: 'Inclusivity',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt ut labore et'
  }
]

export const Values = () => {
  return (
    <section className="-mt-8 bg-white px-4 sm:mt-0 sm:px-6 sm:py-4 lg:px-8">
      {/* Container */}
      <div className="mx-auto max-w-3xl lg:max-w-screen-xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-16">
          {/* Section content */}
          <div className="flex flex-col justify-center">
            <h2 className="h2 text-purple-900 sm:text-center lg:text-left">
              Our core values and principles
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-purple-800 sm:text-center md:mt-5 lg:mx-0 lg:text-left">
              Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut
              libero malesuada feugiat. Donec rutrum congue leo eget malesuada.
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            </p>
            {/* Values */}
            <div className="mt-10 grid max-w-4xl gap-6 sm:mx-auto sm:grid-cols-2 lg:mx-0 lg:max-w-md lg:grid-cols-1">
              {values.map((item, index) => (
                <div key={`value-${index}`} className="flex">
                  <div className="w-14">
                    <Image src={checkmark} className="h-7 w-7" alt="" />
                  </div>
                  <div className="w-full">
                    <h5 className="flex items-center text-xl font-semibold text-purple-900">
                      {item.value}
                    </h5>
                    <p className="mt-1 text-base text-purple-800">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Section image */}
          <div className="mx-auto mt-16 w-full max-w-xl lg:mx-0 lg:mt-0 lg:max-w-none">
            <div className="aspect-h-4 aspect-w-3 relative">
              <Image
                className="absolute inset-0 h-full w-full rounded-3xl object-cover"
                fill
                src={image}
                sizes="(min-width: 1280px) 38rem, (min-width: 1024px) 50vw, (min-width: 576px) 36rem, 100vw"
                alt="Parent carrying child"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
