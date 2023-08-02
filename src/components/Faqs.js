"use client";

import Image from "next/image";
import { Disclosure, Transition } from "@headlessui/react";
import clsx from "clsx";

import { Icon } from "@/components/Icon";
import questionMark from "/public/images/illustrations/question-mark.svg";
import bulb from "/public/images/illustrations/bulb.svg";

export const Faqs = ({ faqs }) => {
  return (
    <section className="py-20 bg-yellow-100 sm:py-28">
      {/* Container */}
      <div className="px-4 mx-auto lg:max-w-screen-lg sm:px-6 lg:px-8">
        {/* Section header title and subtext  */}
        <div className="max-w-2xl">
          <h2 className="text-purple-900 h2">Frequently asked questions</h2>
          <p className="max-w-2xl mt-4 text-xl leading-relaxed text-purple-800 lg:text-left">
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
            sem.
          </p>
        </div>
        {/* FAQ */}
        <ul className="relative mt-12 space-y-6">
          {/* Decorator images*/}
          <div>
            <Image
              className="absolute hidden h-auto w-28 -left-60 top-10 2xl:block"
              src={questionMark}
              alt=""
            />
            <Image
              className="absolute hidden h-auto w-28 -right-60 bottom-10 2xl:block"
              src={bulb}
              alt=""
            />
          </div>
          {faqs.map((faq, index) => (
            <Disclosure
              key={index}
              as="li"
              className="w-full px-5 py-6 bg-white sm:px-12 sm:py-8 rounded-3xl"
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full text-lg sm:text-xl group">
                    <span className="font-medium text-left text-purple-900 duration-300 ease-in-out group-hover:text-purple-600">
                      {faq.data.question}
                    </span>
                    <Icon
                      icon="chevronDown"
                      className={clsx(
                        open && "rotate-180",
                        "flex-shrink-0 w-6 h-6 ml-3 text-purple-700 duration-300 ease-in-out sm:ml-6 group-hover:text-purple-600"
                      )}
                      stroke={2}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="mt-3 text-base leading-relaxed text-purple-800 sm:text-lg">
                      {faq.data.answer}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </ul>
      </div>
    </section>
  );
};
