'use client'

import heroImage from '/public/images/home/hero.png'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { EVENT_IDS, EVENT_NAMES } from '@/utils/tracking'
/* eslint-disable-next-line */
import { Dialog, Transition } from '@headlessui/react'
import { track } from '@vercel/analytics'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
/* eslint-disable-next-line */
import { Fragment, useState } from 'react'

/* eslint-disable-next-line */
const ratings = [
  {
    label: 'Google',
    stars: 5,
    href: 'https://maps.app.goo.gl/LQZ6ZdNHYrAze4kX6'
  },
  {
    label: 'Facebook',
    stars: 5,
    href: 'https://www.facebook.com/texastwistersgymnastics/reviews'
  },
  {
    label: 'Yelp',
    stars: 5,
    href: 'https://www.yelp.com/biz/texas-twisters-gymnastics-georgetown'
  }
]

export const HomeHero = () => {
  /* eslint-disable-next-line */
  let [isOpen, setIsOpen] = useState(false)

  /* eslint-disable-next-line */
  function closeModal() {
    setIsOpen(false)
  }

  /* eslint-disable-next-line */
  function openModal() {
    setIsOpen(true)
  }

  return (
    <section className="px-4 pt-16 bg-linear-to-b from-purple-25 to-purple-50 sm:px-6 lg:px-8">
      {/* Hero container */}
      <div
        className="mx-auto max-w-(--breakpoint-xl) lg:grid lg:grid-cols-12 lg:gap-8"
        x-data="{ modalOpen: false }"
      >
        {/* Hero text content */}
        <div className="flex flex-col items-center justify-center lg:col-span-6 lg:items-start">
          <div className="block">
            <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md">
              Registration fees waived through 2025!
            </span>
          </div>
          <h1 className="max-w-xl mt-4 text-center text-purple-900 h1 sm:mt-5 lg:max-w-none lg:text-left">
            Welcome to Texas Twisters Gymnastics!
          </h1>
          <p className="max-w-2xl mt-3 text-xl leading-loose text-center text-purple-800 lg:text-left">
            Located in the heart of Georgetown, TX, our programs are designed to
            challenge and inspire athletes of all ages. From beginner to
            advanced, we're excited to provide you a safe, fun, and supportive
            environment throughout your gymnastics journey.
          </p>
          {/* Hero buttons */}
          <div className="flex flex-col items-center mt-8 overflow-hidden sm:flex-row">
            <Button
              onClick={() => {
                track(EVENT_NAMES.BUTTON_CLICK, {
                  id: EVENT_IDS.HEADER_CTA,
                  path: window.location.pathname
                })
              }}
              href="https://portal.iclasspro.com/texastwisters/dashboard"
            >
              Enroll today
              <Icon
                icon="arrowNarrowRight"
                className="w-6 h-6 ml-3 group-hover:animate-horizontal-bounce"
                stroke={2}
              />
            </Button>
            {/*<Button*/}
            {/*    variant="secondary"*/}
            {/*    className="mt-6 sm:mt-0 sm:ml-6"*/}
            {/*    onClick={() => openModal()}*/}
            {/*>*/}
            {/*    <Icon*/}
            {/*        icon="playFilled"*/}
            {/*        className="mr-3 text-purple-600 duration-300 ease-in-out w-7 h-7 group-hover:text-purple-50"*/}
            {/*    />*/}
            {/*    Watch video*/}
            {/*</Button>*/}
          </div>
          {/* Social proof */}
          <p className="hidden text-sm font-medium tracking-wider text-purple-900 uppercase sm:block lg:hidden xl:block mt-14">
            Highly rated by{' '}
            <span className="font-semibold text-purple-600">
              parents like you
            </span>
          </p>
          <div className="flex-col hidden mt-8 overflow-hidden divide-y sm:flex sm:mt-5 sm:flex-row sm:divide-x sm:divide-y-0 lg:hidden xl:flex divide-purple-400/20">
            {ratings.map((rating, index) => (
              <Link
                key={index}
                href={rating.href}
                aria-label={rating.label + ' icon - opens in new tab'}
                target="_blank"
              >
                <div
                  key={`primary-${rating.label}`}
                  className={clsx(
                    index == 0 && 'pb-5 sm:pb-0 sm:pr-10',
                    index == 1 && 'py-5 sm:py-0 sm:px-10',
                    index == 2 && 'pt-5 sm:pt-0 sm:pl-10',
                    'flex flex-col items-center'
                  )}
                >
                  {/*TODO: Dynamically fill the stars below with star-half-filled icon */}

                  <div className="flex justify-center w-full space-x-1">
                    {[...Array(rating.stars)].map((e, i) => (
                      <Icon
                        icon="starFilled"
                        className="w-4 h-4 text-yellow-500"
                        key={`primary-${rating.label}-star-${i}`}
                      />
                    ))}
                  </div>
                  <p className="mt-2.5 text-xs font-bold text-purple-700 uppercase tracking-wide">
                    {rating.label}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Hero image & video */}
        <div className="flex flex-col justify-center max-w-3xl mx-auto mt-16 lg:col-span-6 lg:mt-0 lg:max-w-none">
          <div className="relative">
            <Image
              src={heroImage}
              priority
              className="w-full h-auto"
              alt="A picture collage of children doing gymnastics at Texas Twisters Gymnastics"
              sizes="(min-width: 1280px) 39rem, (min-width: 1024px) 50vw, (min-width: 768px) 48rem, 100vw"
            />
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <span className="absolute inline-flex w-20 h-20 bg-purple-400 rounded-full animate-ping opacity-60" />
              {/* Video modal button */}
            {/* <button
                className="relative z-10 flex items-center justify-center w-20 h-20 duration-300 ease-in-out rounded-full outline-none group bg-purple-600/90 hover:bg-purple-600/95"
                onClick={() => openModal()}
              >
                <Icon
                  icon="playFilled"
                  className="w-12 h-12 duration-300 ease-in-out text-white/90 group-hover:text-white/95"
                />
              </button>
            </div> */}
          </div>
        </div>
        {/* Video modal*/}
        {/* <Dialog
          as="div"
          className="fixed inset-0 z-10 w-full h-full px-4 overflow-hidden transition duration-150 ease-linear"
          aria-modal="true"
          open={isOpen}
          onClose={closeModal}
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 h-screen w-screen bg-black opacity-50 transition-opacity data-[closed]:opacity-0 data-[open]:opacity-50 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
          />
          <div className="flex items-center justify-center w-auto min-h-screen mx-auto">
            <DialogPanel
              transition
              className="max-h-full w-full max-w-6xl transform overflow-auto rounded-2xl bg-white transition data-[closed]:translate-y-24 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="relative aspect-h-9 aspect-w-16">
                <iframe
                  className="absolute w-full h-full"
                  allow="autoplay"
                  src="https://www.youtube.com/embed/oRcNS5CCbnc?autoplay=1"
                  title="Video"
                  webkitallowfullscreen
                  mozallowfullscreen
                  allowFullScreen
                />
              </div>
            </DialogPanel>
          </div>
        </Dialog> */}
      </div>
      {/*Visible only on sm screens ( <= 640px ) and lg screens ( >= 1024px	< 1280px ) */}
      <div className="flex flex-col items-center mt-20 lg:mt-24 sm:hidden lg:flex xl:hidden">
        {/* Social proof */}
        <p className="text-sm font-semibold tracking-wider text-purple-900 uppercase">
          Highly rated by{' '}
          <span className="font-semibold text-purple-600">
            parents like you
          </span>
        </p>
        <div className="flex flex-col mt-8 overflow-hidden divide-y sm:divide-y-0 sm:divide-x sm:flex-row divide-purple-400/20">
          {ratings.map((rating, index) => (
            <Link
              key={index}
              href={rating.href}
              aria-label={rating.label + ' icon - opens in new tab'}
              target="_blank"
            >
              <div
                key={`secondary-${rating.label}`}
                className={clsx(
                  index == 0 && 'pb-5 sm:pb-0 sm:pr-10',
                  index == 1 && 'py-5 sm:py-0 sm:px-10',
                  index == 2 && 'pt-5 sm:pt-0 sm:pl-10',
                  'flex flex-col items-center'
                )}
              >
                <div className="flex justify-center w-full space-x-1">
                  {[...Array(rating.stars)].map((e, i) => (
                    <Icon
                      icon="starFilled"
                      className="w-4.5 h-4.5 lg:w-5 lg:h-5 text-yellow-500"
                      key={`secondary-${rating.label}-star-${i}`}
                    />
                  ))}
                </div>

                <p className="mt-2.5 text-xs font-bold text-purple-700 uppercase tracking-wide">
                  {rating.label}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
