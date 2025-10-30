'use client'

import { Button } from '@/components/Button'
import { Eyebrow } from '@/components/Eyebrow'
import { Icon } from '@/components/Icon'
import arrow from '@/images/illustrations/arrow-right-over.svg'
import dotsGrid from '@/images/illustrations/dots-large-grid.svg'
import { EVENT_IDS, EVENT_NAMES } from '@/utils/tracking'
import { track } from '@vercel/analytics'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

const linkColors = [
  'bg-purple-50',
  'bg-yellow-200',
  'bg-rose-50',
  'bg-teal-50',
  'bg-blue-50'
]

const links = [
  {
    label: 'Parent Portal',
    href: 'https://portal.iclasspro.com/texastwisters/account',
    description: 'Make changes to your membership or account',
    icon: 'user',
    event: EVENT_IDS.CUSTOMER_PORTAL
  },
  {
    label: 'Rules & Policies',
    href: '/policies',
    description: 'Check out our rules and policies for the gym',
    icon: 'certificate',
    event: EVENT_IDS.RULES_POLICIES
  },
  {
    label: 'FAQs',
    href: '/#faq',
    description: 'See our most frequently asked questions',
    icon: 'help',
    event: EVENT_IDS.FAQ
  },
  {
    label: 'Latest News',
    href: 'https://portal.iclasspro.com/texastwisters/news',
    description: 'Stay informed with the latest events and activities',
    icon: 'article',
    event: EVENT_IDS.NEWS
  },
  {
    label: 'Safety & Response',
    href: 'https://usagym.org/safety',
    description: 'Report a concern with USAG or SafeSport',
    icon: 'lifeBuoy',
    event: EVENT_IDS.SAFETY_RESPONSE
  }
]

export const ParentsHero = () => {
  return (
    <section className="relative px-4 py-16 overflow-hidden bg-linear-to-b from-white via-purple-25 to-white sm:px-6 lg:px-8 lg:py-20">
      {/* Background decorations */}
      <Image
        src={dotsGrid}
        alt=""
        className="absolute right-0 h-auto transform opacity-25 top-12 w-72 lg:opacity-40"
        priority
      />
      <Image
        src={dotsGrid}
        alt=""
        className="absolute h-auto transform -left-36 bottom-36 w-72 opacity-40"
        priority
      />
      {/* Container */}
      <div className="mx-auto max-w-xl lg:grid lg:max-w-(--breakpoint-xl) lg:grid-cols-12 lg:gap-8">
        {/* Section header text */}
        <div className="flex flex-col justify-center lg:col-span-5">
          <Eyebrow text="Now enrolling for classes" />
          <div className="relative">
            <h1 className="max-w-xl mt-4 text-purple-900 h1 sm:mt-5 lg:max-w-none">
              Stay in the loop
            </h1>
            {/* Arrow to links */}
            <Image
              src={arrow}
              className="absolute hidden transform -top-3 w-14 rotate-12 md:-right-8 md:w-32 xl:block"
              alt=""
            />
          </div>
          <p className="max-w-2xl mt-3 text-xl leading-loose text-purple-800 sm:mt-4">
            Check out different resources to keep you up-to-date with everything
            going on at Texas Twisters. We know you&apos;re busy, we&apos;ll
            help you keep it simple!
          </p>
          {/* Enroll CTA*/}
          <div className="mt-10 font-semibold lg:mt-12">
            <p className="text-purple-800">Not enrolled in our gym?</p>
            <Button
              onClick={() => {
                track(EVENT_NAMES.BUTTON_CLICK, {
                  id: EVENT_IDS.HEADER_CTA,
                  path: window.location.pathname
                })
              }}
              href="https://portal.iclasspro.com/texastwisters/dashboard"
              size="sm"
              className="mt-2 sm:mt-3"
            >
              Enroll today
              <Icon
                icon="arrowNarrowRight"
                className="w-6 h-6 ml-3 group-hover:animate-horizontal-bounce"
              />
            </Button>
          </div>
        </div>
        {/* Important parent links container */}
        <div className="relative mt-12 sm:mt-16 lg:col-span-7 lg:mt-0 xl:pl-12">
          {/* Important links */}
          <div className="relative w-full mx-auto auto-rows-fr sm:grid sm:grid-cols-4 sm:gap-6 md:max-w-3xl lg:max-w-lg lg:grid-cols-2 lg:gap-5">
            {links.slice(0, 5).map((link, index) => (
              <Link
                onClick={() => {
                  track(EVENT_NAMES.LINK_CLICK, {
                    id: link.event,
                    path: window.location.pathname
                  })
                }}
                href={link.href}
                key={`parent-link-${index}`}
                className={clsx(
                  'group flex w-full transform flex-col justify-center rounded-2xl p-8 shadow-lg duration-300 ease-in-out hover:scale-105 sm:col-span-2 lg:col-span-1',
                  index > 0 && 'mt-6 sm:mt-0',
                  index % 2 == 1 && 'lg:translate-y-28',
                  index == 4 && 'sm:col-start-2',
                  linkColors[index % 5]
                )}
              >
                {/* Link description */}
                <div className="flex-1">
                  <Icon
                    icon={link.icon}
                    className="w-10 h-10 text-purple-700"
                  />

                  <p className="mt-4 text-xl font-semibold text-purple-900">
                    {link.label}
                  </p>
                  <p className="mt-2 text-sm text-purple-800">
                    {link.description}
                  </p>
                </div>
                <div className="flex justify-end w-full mt-6">
                  <Icon
                    icon="chevronsRight"
                    className="w-6 h-6 text-purple-500 duration-300 ease-in-out hover:text-purple-600 group-hover:animate-horizontal-bounce"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
