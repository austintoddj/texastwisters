'use client'

import { Icon } from '@/components/Icon'
import Link from 'next/link'
import { useState } from 'react'

export const Banner = () => {
  const [isOpen, setIsOpen] = useState(true)

  if (!isOpen) {
    return null
  }

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:px-6 sm:pb-5 lg:px-8 z-40">
        <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-purple-200 px-6 py-2.5 sm:rounded-full sm:py-3 sm:pl-4 sm:pr-3.5">
          <p className="font-medium leading-6 text-purple-700">
            <Link
              href="https://app.iclasspro.com/portal/texastwisters/news/2"
              target="_blank"
            >
              <Icon
                icon="calendar"
                className="h-6 w-6 inline mr-2 text-purple-700"
              />
              <strong className="font-semibold">Just a reminder</strong>
              <svg
                viewBox="0 0 2 2"
                className="mx-2 inline h-0.5 w-0.5 fill-current"
                aria-hidden="true"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              Texas Twisters will be closed July 1st through July 6th. Read more
              &nbsp;&nbsp;
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </p>
          <button
            type="button"
            className="-m-3 flex-none p-3 focus-visible:outline-offset-[-4px]"
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">Dismiss</span>
            <Icon
              icon="close"
              className="h-6 w-6 text-purple-700"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </>
  )
}
