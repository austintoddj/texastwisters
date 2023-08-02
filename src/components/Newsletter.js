import Image from "next/image";

import { Icon } from "@/components/Icon";
import dotsChaos from "/public/images/illustrations/dots-chaos.svg";
import arrow from "/public/images/illustrations/arrow-down.svg";
import { getAllItems } from "@/lib/getItems";

export const Newsletter = () => {
  const newsletters = getAllItems("newsletters");

  return (
    <section className="relative py-16 bg-purple-600 sm:py-20 lg:py-24">
      {/* Background decoration */}
      <Image
        src={dotsChaos}
        className="absolute bottom-0 right-0 h-auto transform w-72"
        alt=""
      />
      {/* Content container */}
      <div className="relative grid gap-12 px-4 mx-auto lg:grid-cols-12 lg:max-w-screen-xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center max-w-xl mx-auto lg:col-span-5 lg:items-start lg:mx-0">
          <h2 className="text-center text-white h2 lg:text-left">
            Latest from the newsletter
          </h2>
          <div className="relative">
            <p className="max-w-lg mt-3 text-lg leading-relaxed text-center lg:text-xl lg:mt-4 text-purple-50 lg:text-left">
              Don't miss out on your child's education. We send information on
              important events and dates to our parents once a month. Sign up
              below!
            </p>
            {/* Arrow to newsletter */}
            <Image
              src={arrow}
              className="absolute hidden sm:block lg:hidden 2xl:block -left-14 md:-left-24 top-1/2 w-14 md:w-20"
              alt=""
            />
          </div>
          {/* Newsletter signup section */}
          <div className="flex items-center mt-8">
            <div className="relative w-full max-w-xl rounded-full h-14">
              {/* Newsletter signup form */}
              <form action="#">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  {/* Heroicon name: solid/mail */}
                  <Icon icon="mail" className="w-6 h-6 text-purple-500" />
                </div>
                <input
                  type="email"
                  className="text-purple-700 h-14 w-full pl-12 pr-24 py-3.5 border-0 bg-purple-25 border-transparent rounded-full leading-5 duration-300 placeholder-purple-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                  placeholder="Signup to our newsletter"
                  autoComplete="email"
                />
                <button
                  type="submit"
                  className="inline-flex items-center h-11 absolute right-1.5 top-1.5 outline-none bg-yellow-400 text-purple-900 hover:bg-yellow-600 py-2 px-4 md:px-6 rounded-full text-sm sm:font-medium duration-300 ease-in-out focus:outline-none"
                >
                  Subscribe
                </button>
              </form>
              <p className="pl-2 mt-2.5 text-sm text-purple-50 text-center lg:text-left">
                Your privacy is important to us. We promise not to send you
                spam!
              </p>
            </div>
          </div>
        </div>
        {/* Latest newsletters */}
        <div className="grid max-w-3xl gap-6 mx-auto mt-12 lg:mt-0 lg:mx-0 lg:pl-12 lg:col-span-7 sm:grid-cols-2 sm:gap-5 md:gap-8">
          {newsletters.slice(0, 4).map((newsletter, index) => (
            <a
              key={`newsletter-${index}`}
              href={newsletter.data.link}
              className="flex flex-col p-6 transition duration-300 ease-in-out border border-purple-500 rounded-md sm:p-7 group hover:scale-105 hover:shadow-lg hover:bg-purple-500 hover:border-transparent"
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
                <span className="mt-6 rounded-full text-sm font-medium text-purple-600 py-1.5 px-5 inline-flex justify-center items-center bg-purple-100 duration-300 ease-in-out group-hover:text-white group-hover:bg-white/30">
                  Read newsletter
                  <Icon
                    icon="chevronRight"
                    className="w-4 h-4 ml-2 group-hover:animate-horizontal-bounce"
                  />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
