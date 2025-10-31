'use client'

import { Button } from '@/components/Button'
import { Eyebrow } from '@/components/Eyebrow'
import dotsGrid from '@/images/illustrations/dots-grid.svg'
import dotsLargeGrid from '@/images/illustrations/dots-large-grid.svg'
import dotsStrip from '@/images/illustrations/dots-strip.svg'
import { EVENT_IDS, EVENT_NAMES } from '@/utils/tracking'
import { track } from '@vercel/analytics'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

const fields = [
  {
    name: 'name',
    label: 'Name *',
    type: 'text',
    placeholder: 'John Doe',
    required: true
  },
  {
    name: 'email',
    label: 'Email *',
    type: 'email',
    placeholder: 'john@email.com',
    required: true
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'tel',
    placeholder: '(123) 456-7890',
    required: false
  },
  {
    name: 'message',
    label: 'Message *',
    type: 'textarea',
    placeholder: 'Message',
    required: true
  }
]

export const ContactHero = () => {
  const [isError, setIsError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()

    track(EVENT_NAMES.FORM_SUBMIT, {
      id: EVENT_IDS.CONTACT_US,
      path: window.location.pathname
    })

    const data = new FormData(e.target)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(data))
      })

      if (!res || !res.ok) {
        setIsError(true)
      } else {
        setIsError(false)
      }
    } catch (err) {
      setIsError(true)
    } finally {
      // Reset form after state updates
      try {
        e.target.reset()
      } catch {
        // ignore
      }
    }
  }

  return (
    <section className="px-4 pb-12 overflow-hidden bg-linear-to-b from-purple-25 to-purple-50 sm:px-6 lg:px-8 lg:pt-24">
      {/* Container */}
      <div className="mx-auto max-w-xl lg:grid lg:max-w-(--breakpoint-xl) lg:grid-cols-2 lg:gap-10 xl:gap-32 ">
        {/* Hero header */}
        <div className="py-16 lg:py-32">
          <Eyebrow text="Contact us today" />

          <h1 className="max-w-md mt-4 text-purple-900 h1">
            We&apos;d love to hear from you
          </h1>
          <p className="max-w-lg mt-3 text-xl leading-relaxed text-purple-800">
            Need to get in touch with us? Fill out the form or find more ways to
            connect with us below.
          </p>
        </div>
        {/* Contact form container */}
        <div className="relative">
          {/* Background decorations */}
          <Image
            src={dotsLargeGrid}
            className="absolute -right-16 -top-12 w-80 opacity-60 sm:-top-16 lg:-top-16 lg:left-14 lg:hidden lg:w-36"
            alt=""
            priority
          />
          <Image
            src={dotsGrid}
            className="absolute hidden w-40 opacity-75 -right-16 -top-16 lg:-top-16 lg:left-14 lg:block lg:w-36"
            alt=""
          />
          <Image
            src={dotsStrip}
            className="absolute hidden w-20 rotate-90 opacity-75 -right-16 top-1/2 lg:block"
            alt=""
          />
          {/* Contact form card */}
          <div className="relative z-10 w-full px-4 py-10 mx-auto bg-white shadow-xl rounded-3xl sm:p-16 lg:ml-auto lg:mr-0 lg:p-12 xl:p-14">
            <div>
              <h3 className="text-2xl font-bold text-purple-900">
                Send us a message
              </h3>
              <p className="mt-0.5 text-purple-800/90">
                We&apos;ll get back to you as soon as we can.
              </p>
            </div>
            {/* Contact form */}
            <form className="mt-8" onSubmit={handleSubmit}>
              {fields.map((field, index) => (
                <div
                  key={`contact-form-field-${index}}`}
                  className={clsx(index > 0 && 'mt-6')}
                >
                  <label
                    htmlFor={field.name}
                    className="ml-0.5 text-sm font-medium text-purple-900"
                  >
                    {field.label}
                  </label>
                  {field.type == 'textarea' && (
                    <textarea
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      rows={5}
                      className="mt-2 w-full rounded-2xl border-2 border-purple-50 p-4 text-[14px] text-sm font-medium text-purple-700 placeholder-purple-700/70 outline-hidden duration-300 ease-in-out focus:border-purple-200 focus:outline-hidden focus:ring-purple-200"
                      required={field.required}
                    />
                  )}

                  {['email', 'tel', 'text'].includes(field.type) && (
                    <input
                      id={field.name}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="mt-2 h-14 w-full rounded-2xl border-2 border-purple-50 p-4 text-[14px] text-sm font-medium text-purple-700 placeholder-purple-700/70 outline-hidden duration-300 ease-in-out focus:border-purple-200 focus:outline-hidden focus:ring-purple-200"
                      required={field.required}
                    />
                  )}
                </div>
              ))}

              {isError === true && (
                <p className="p-3 mt-4 text-red-700 rounded-xl bg-red-50">
                  <span className="font-bold text-red-800">Uh oh!</span>{' '}
                  Something went wrong. Please try it again.
                </p>
              )}
              {isError === false && (
                <p className="p-3 mt-4 text-green-700 rounded-xl bg-green-50">
                  <span className="font-bold text-green-800">
                    We got your message!
                  </span>{' '}
                  You should hear from us soon.
                </p>
              )}

              <div className="flex justify-start mt-6">
                <Button type="submit">Send message</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
