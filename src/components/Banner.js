'use client'

import { Icon } from '@/components/Icon'
import { EVENT_NAMES } from '@/utils/tracking'
import { track } from '@vercel/analytics'
import Link from 'next/link'
import { useState } from 'react'

/**
 * @param {Object} props
 * @param {string} props.icon - Icon name from the Icon component
 * @param {string} props.content - Banner content
 * @param {string} [props.href] - Optional URL for the 'Read more' link
 * @param {string} [props.color] - Optional color for the banner (default: 'purple')
 * @param {string} [props.event] - Optional event name for tracking
 */
export const Banner = ({
  icon,
  content,
  href = null,
  color = 'purple',
  event = null
}) => {
  const [isOpen, setIsOpen] = useState(true)

  if (!isOpen) {
    return null
  }

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:px-6 sm:pb-5 lg:px-8 z-40">
        <div
          className={`bg-${color}-200 pointer-events-auto flex items-center justify-between gap-x-6 px-6 py-2.5 sm:rounded-full sm:py-3 sm:pl-4 sm:pr-3.5`}
        >
          <p className={`text-${color}-700 text-sm md:text-base`}>
            <Icon
              icon={icon}
              className={`text-${color}-700 h-6 w-6 mr-4 inline`}
            />
            {content}
            {href && (
              <Link
                onClick={() => {
                  event &&
                    track(EVENT_NAMES.LINK_CLICK, {
                      id: event,
                      path: window.location.pathname
                    })
                }}
                className="ml-2 underline"
                href={href}
                target="_blank"
              >
                Read more
              </Link>
            )}
          </p>
          <button
            type="button"
            className="-m-3 cursor-pointer flex-none p-3 focus-visible:outline-offset-[-4px]"
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">Dismiss</span>
            <Icon
              icon="close"
              className={`text-${color}-700 h-6 w-6`}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </>
  )
}
