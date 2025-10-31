import image from '@/images/about/values.jpg'
import checkmark from '@/images/illustrations/checkmark.svg'
import Image from 'next/image'

const values = [
  {
    value: 'Safety',
    description:
      'We hold the physical, psychological, and emotional safety of our students as the highest priority.'
  },
  {
    value: 'Excellence',
    description:
      'We set high standards for ourselves and work hard to be our best in everything we do.'
  },
  {
    value: 'Respect',
    description:
      'We believe in treating everyone with kindness and making sure people feel valued and welcomed.'
  },
  {
    value: 'Fun',
    description:
      'Gymnastics should be fun! We strive to create a positive and enjoyable experience for everyone.'
  }
]

export const Values = () => {
  return (
    <section className="-mt-8 bg-white px-4 sm:mt-0 sm:px-6 sm:py-4 lg:px-8">
      {/* Container */}
      <div className="mx-auto max-w-3xl lg:max-w-(--breakpoint-xl)">
        <div className="lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-16">
          {/* Section content */}
          <div className="flex flex-col justify-center">
            <h2 className="h2 text-purple-900 sm:text-center lg:text-left">
              Our core mission and values
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-purple-800 sm:text-center md:mt-5 lg:mx-0 lg:text-left">
              At Texas Twisters, we believe in serving our community with
              integrity. Our core values are more than just aspirations, they
              shape and define who we are and how we operate.
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
                alt="Five girls smiling together in a gymnastics class"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
