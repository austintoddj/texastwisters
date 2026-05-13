'use client'

import { Icon } from '@/components/Icon'
import { EVENT_NAMES } from '@/utils/tracking'
import { track } from '@vercel/analytics'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface BannerProps {
  icon: string
  content: string
  href?: string | null
  color?: string
  event?: string | null
  expiresAfter?: string | Date | null
  countdownTo?: string | Date | null
  ariaLabel?: string
}

const formatCountdown = (ms: number): string => {
  if (ms <= 0) return ''
  const totalSeconds = Math.floor(ms / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  if (days > 0) {
    return `${days}d ${hours}h ${minutes}m`
  }
  const parts: string[] = []
  if (hours > 0) parts.push(`${hours}h`)
  parts.push(`${minutes}m`)
  parts.push(`${seconds}s`)
  return parts.join(' ')
}

const getExpiryDate = (value: BannerProps['expiresAfter']) => {
  if (!value) {
    return null
  }
  const date = value instanceof Date ? value : new Date(value)
  return Number.isNaN(date.getTime()) ? null : date
}

const BANNER_STORAGE_KEY = 'dismissed-banners'

const getBannerKey = (event: string | null, content: string) => {
  return event || content.slice(0, 50)
}

const isDismissed = (bannerKey: string): boolean => {
  if (typeof window === 'undefined') return false
  try {
    const dismissed = sessionStorage.getItem(BANNER_STORAGE_KEY)
    if (!dismissed) return false
    const dismissedBanners = JSON.parse(dismissed)
    return dismissedBanners.includes(bannerKey)
  } catch {
    return false
  }
}

const setDismissed = (bannerKey: string) => {
  if (typeof window === 'undefined') return
  try {
    const dismissed = sessionStorage.getItem(BANNER_STORAGE_KEY)
    const dismissedBanners = dismissed ? JSON.parse(dismissed) : []
    if (!dismissedBanners.includes(bannerKey)) {
      dismissedBanners.push(bannerKey)
      sessionStorage.setItem(
        BANNER_STORAGE_KEY,
        JSON.stringify(dismissedBanners)
      )
    }
  } catch {
    // Fail silently
  }
}

/**
 * Displays a dismissible site-wide banner fixed to the bottom of the viewport.
 * Drop one of these inside `<ErrorBoundary>` in `layout.tsx` and swap props as
 * needed for each promotion.
 *
 * @example New class openings
 * <Banner
 *   icon="bellRinging"
 *   content="Brand new classes now available — no registration fee. Grab your spot today!"
 *   href="https://portal.iclasspro.com/texastwisters/classes"
 *   color="blue"
 *   event="banner-cta-new-openings"
 *   ariaLabel="New class openings promotion"
 * />
 *
 * @example No-school camp day
 * <Banner
 *   icon="backpack"
 *   content="No school next Monday? Sounds like a great day for camp! Sign up today!"
 *   href="https://portal.iclasspro.com/texastwisters/camps"
 *   color="blue"
 *   event="banner-cta-camp"
 *   ariaLabel="No-school camp day promotion"
 * />
 *
 * @example Summer camp
 * <Banner
 *   icon="sunHigh"
 *   content="Summer camp registration is now open! Come join the fun — sign up today!"
 *   href="https://portal.iclasspro.com/texastwisters/camps"
 *   color="blue"
 *   event="banner-cta-camp"
 *   ariaLabel="Summer camp promotion"
 * />
 *
 * @example Countdown timer — use `{countdown}` in content and supply `countdownTo`
 * <Banner
 *   icon="clock"
 *   content="Early-bird pricing ends in {countdown} — register now!"
 *   href="https://portal.iclasspro.com/texastwisters/classes"
 *   color="purple"
 *   countdownTo="2026-06-01T00:00:00"
 *   event="banner-cta-countdown"
 *   ariaLabel="Early-bird countdown promotion"
 * />
 */
export const Banner = ({
  icon,
  content,
  href = null,
  color = 'purple',
  event = null,
  expiresAfter = null,
  countdownTo = null,
  ariaLabel = 'Site notice'
}: BannerProps) => {
  const bannerKey = getBannerKey(event, content)
  const [state, setState] = useState<{ mounted: boolean; isOpen: boolean }>({
    mounted: false,
    isOpen: true
  })
  const [countdown, setCountdown] = useState<string>('')

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState({
      mounted: true,
      isOpen: !isDismissed(bannerKey)
    })
  }, [bannerKey])

  useEffect(() => {
    if (!countdownTo) return
    const target =
      countdownTo instanceof Date
        ? countdownTo
        : new Date(countdownTo as string)
    if (isNaN(target.getTime())) return
    const update = () => {
      const ms = target.getTime() - Date.now()
      if (ms <= 0) {
        setCountdown('')
        setState(prev => ({ ...prev, isOpen: false }))
      } else {
        setCountdown(formatCountdown(ms))
      }
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [countdownTo])

  // Check if banner has expired
  const expiryDate = getExpiryDate(expiresAfter)
  if (expiryDate) {
    const now = new Date()
    if (now > expiryDate) {
      return null
    }
  }

  // Don't render until client-side to prevent hydration mismatch
  if (!state.mounted || !state.isOpen) {
    return null
  }

  const handleDismiss = () => {
    setDismissed(bannerKey)
    setState(prev => ({ ...prev, isOpen: false }))
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:px-6 sm:pb-5 lg:px-8 z-40">
      <div
        className={`bg-${color}-200 pointer-events-auto flex items-center justify-between gap-x-6 px-6 py-2.5 sm:rounded-full sm:py-3 sm:pl-4 sm:pr-3.5`}
        role="region"
        aria-label={ariaLabel}
      >
        <p className={`text-${color}-700 text-sm md:text-base`}>
          <Icon
            icon={icon}
            className={`text-${color}-700 h-6 w-6 mr-4 inline`}
          />
          {countdownTo && content.includes('{countdown}') ? (
            <>
              {content.split('{countdown}')[0]}
              <span className="font-bold font-mono tabular-nums">
                {countdown}
              </span>
              {content.split('{countdown}')[1]}
            </>
          ) : (
            content
          )}
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
          className="-m-3 cursor-pointer flex-none p-3 focus-visible:-outline-offset-4"
          onClick={handleDismiss}
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
  )
}
