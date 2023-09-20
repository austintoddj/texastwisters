import { Icon } from '@/components/Icon'
import { getAllItems } from '@/lib/getItems'
import Image from 'next/image'
import arrow from '/public/images/illustrations/arrow-down.svg'
import dotsChaos from '/public/images/illustrations/dots-chaos.svg'

export const Newsletter = () => {
  const newsletters = getAllItems('newsletters')

  return (
    <section className="relative bg-purple-600 py-16 sm:py-20 lg:py-24">
      {/* Background decoration */}
      <Image
        src={dotsChaos}
        className="absolute bottom-0 right-0 h-auto w-72 transform"
        alt=""
      />
      {/* Content container */}
      <div className="relative mx-auto grid gap-12 px-4 sm:px-6 lg:max-w-screen-xl lg:grid-cols-12 lg:px-8">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center lg:col-span-5 lg:mx-0 lg:items-start">
          <h2 className="h2 text-center text-white lg:text-left">
            Latest from the newsletter
          </h2>
          <div className="relative">
            <p className="mt-3 max-w-lg text-center text-lg leading-relaxed text-purple-50 lg:mt-4 lg:text-left lg:text-xl">
              Don't miss out on your child's education. We send information on
              important events and dates to our parents once a month. Sign up
              below!
            </p>
            {/* Arrow to newsletter */}
            <Image
              src={arrow}
              className="absolute -left-14 top-1/2 hidden w-14 sm:block md:-left-24 md:w-20 lg:hidden 2xl:block"
              alt=""
            />
          </div>
          {/* Newsletter signup section */}
          <div className="mt-8 flex items-center">
            <div className="relative h-14 w-full max-w-xl rounded-full">
              {/* Newsletter signup form */}
              <form action="#">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  {/* Heroicon name: solid/mail */}
                  <Icon icon="mail" className="h-6 w-6 text-purple-500" />
                </div>
                <input
                  type="email"
                  className="h-14 w-full rounded-full border-0 border-transparent bg-purple-25 py-3.5 pl-12 pr-24 leading-5 text-purple-700 placeholder-purple-700 duration-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                  placeholder="Signup to our newsletter"
                  autoComplete="email"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 inline-flex h-11 items-center rounded-full bg-yellow-400 px-4 py-2 text-sm text-purple-900 outline-none duration-300 ease-in-out hover:bg-yellow-600 focus:outline-none sm:font-medium md:px-6"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-2.5 pl-2 text-center text-sm text-purple-50 lg:text-left">
                Your privacy is important to us. We promise not to send you
                spam!
              </p>
            </div>
          </div>
        </div>
        {/* Latest newsletters */}
        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2 sm:gap-5 md:gap-8 lg:col-span-7 lg:mx-0 lg:mt-0 lg:pl-12">
          {newsletters.slice(0, 4).map((newsletter, index) => (
            <a
              key={`newsletter-${index}`}
              href={newsletter.data.link}
              className="group flex flex-col rounded-md border border-purple-500 p-6 transition duration-300 ease-in-out hover:scale-105 hover:border-transparent hover:bg-purple-500 hover:shadow-lg sm:p-7"
            >
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white">
                  {newsletter.data.name}
                </h3>
                <p className="mt-3 text-purple-50">
                  {newsletter.data.description}
                </p>
              </div>
              <div>
                <span className="mt-6 inline-flex items-center justify-center rounded-full bg-purple-100 px-5 py-1.5 text-sm font-medium text-purple-600 duration-300 ease-in-out group-hover:bg-white/30 group-hover:text-white">
                  Read newsletter
                  <Icon
                    icon="chevronRight"
                    className="ml-2 h-4 w-4 group-hover:animate-horizontal-bounce"
                  />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
