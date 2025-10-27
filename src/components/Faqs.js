'use client'

import { Icon } from '@/components/Icon'
import bulb from '@/images/illustrations/bulb.svg'
import questionMark from '@/images/illustrations/question-mark.svg'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'

export const Faqs = ({ faqs }) => {
  return (
    <section className="py-20 bg-yellow-100 sm:py-28" id="faq">
      {/* Container */}
      <div className="mx-auto px-4 sm:px-6 lg:max-w-(--breakpoint-lg) lg:px-8">
        {/* Section header title and subtext  */}
        <div className="max-w-2xl">
          <h2 className="text-purple-900 h2">Frequently asked questions</h2>
          <p className="max-w-2xl mt-4 text-xl leading-relaxed text-purple-800 lg:text-left">
            If you have additional questions please{' '}
            <Link href="/contact" className="underline">
              contact us
            </Link>{' '}
            and we'll get back to you as soon as we can.
          </p>
        </div>
        {/* FAQ */}
        <ul className="relative mt-12 space-y-6">
          {/* Decorator images*/}
          <div>
            <Image
              className="absolute hidden h-auto -left-60 top-10 w-28 2xl:block"
              src={questionMark}
              alt=""
            />
            <Image
              className="absolute hidden h-auto -right-60 bottom-10 w-28 2xl:block"
              src={bulb}
              alt=""
            />
          </div>
          {faqs.map((faq, index) => (
            <Disclosure
              key={index}
              as="li"
              className="w-full px-5 py-6 bg-white rounded-3xl sm:px-12 sm:py-8"
            >
              <DisclosureButton className="flex items-center justify-between w-full text-lg cursor-pointer group sm:text-xl">
                <span className="font-medium text-left text-purple-900 duration-300 ease-in-out group-hover:text-purple-600">
                  {faq.data.question}
                </span>
                <Icon
                  icon="chevronDown"
                  className="ml-3 h-6 w-6 flex-shrink-0 text-purple-700 duration-300 ease-in-out group-hover:text-purple-600 group-data-[open]:rotate-180 sm:ml-6"
                  stroke={2}
                />
              </DisclosureButton>

              <DisclosurePanel
                transition
                className="mt-3 text-base leading-relaxed text-purple-800 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in sm:text-lg"
              >
                {faq.data.answer}
              </DisclosurePanel>
            </Disclosure>
          ))}
        </ul>
      </div>
    </section>
  )
}
