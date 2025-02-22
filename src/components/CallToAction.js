'use client'

import gymnast from '/public/images/illustrations/gymnast.svg'
import highlight from '/public/images/illustrations/underline-simple-light-purple.svg'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { track } from '@vercel/analytics'
import Image from 'next/image'
import Link from 'next/link'

export const CallToAction = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      {/* Container */}
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
        {/* Gymnast image */}
        <Image className="mx-auto w-72" src={gymnast} alt="" />
        {/* Header */}
        <h2 className="h1 mx-auto mt-6 max-w-3xl text-center text-purple-900">
          <span className="block">The sport that</span>
          {/* Underlined text */}
          <span className="relative block">
            <span className="relative">
              <Image
                className="absolute inset-0 translate-y-9 transform sm:translate-y-11 xl:translate-y-14"
                src={highlight}
                alt=""
              />
              <span className="relative">builds champions</span>
            </span>
          </span>
        </h2>
        {/* CTA button */}
        <div className="mt-12 flex justify-center xl:mt-14">
          <Link
            onClick={() => {
              track('link_click', {
                id: 'enroll-today',
                path: window.location.pathname
              })
            }}
            href="https://portal.iclasspro.com/texastwisters/dashboard"
            target="_blank"
          >
            <Button>
              Enroll today
              <Icon
                icon="arrowNarrowRight"
                className="ml-3 h-6 w-6 group-hover:animate-horizontal-bounce"
                stroke={2}
              />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
