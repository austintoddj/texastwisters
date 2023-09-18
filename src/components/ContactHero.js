'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

import dotsGrid from '/public/images/illustrations/dots-grid.svg'
import dotsLargeGrid from '/public/images/illustrations/dots-large-grid.svg'
import dotsStrip from '/public/images/illustrations/dots-strip.svg'
import { Button } from '@/components/Button'

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
    type: 'text',
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

    const data = new FormData(e.target)

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Object.fromEntries(data))
    }).then(res => {
      switch (res.status) {
        case 200:
          setIsError(false)
          break
        case 500:
          setIsError(true)
          break
        default:
          break
      }

      e.target.reset()
    })
  }

  return (
    <section className="overflow-hidden bg-gradient-to-b from-purple-25 to-purple-50 px-4 pb-12 sm:px-6 lg:px-8 lg:pt-24">
      {/* Container */}
      <div className="mx-auto max-w-xl lg:grid lg:max-w-screen-xl lg:grid-cols-2 lg:gap-10 xl:gap-32 ">
        {/* Hero header */}
        <div className="py-16 lg:py-32">
          <div>
            <span className="inline-block rounded-full bg-purple-200 px-4 py-2 font-medium text-purple-700 shadow-md">
              Contact us today
            </span>
          </div>
          <h1 className="h1 mt-4 max-w-md text-purple-900">
            We'd love to hear from you
          </h1>
          <p className="mt-3 max-w-lg text-xl leading-relaxed text-purple-800">
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
            className="absolute -right-16 -top-16 hidden w-40 opacity-75 lg:-top-16 lg:left-14 lg:block lg:w-36"
            alt=""
          />
          <Image
            src={dotsStrip}
            className="absolute -right-16 top-1/2 hidden w-20 rotate-90 opacity-75 lg:block"
            alt=""
          />
          {/* Contact form card */}
          <div className="relative z-10 mx-auto w-full rounded-3xl bg-white px-4 py-10 shadow-xl sm:p-16 lg:ml-auto lg:mr-0 lg:p-12 xl:p-14">
            <div>
              <h3 className="text-2xl font-bold text-purple-900">
                Send us a message
              </h3>
              <p className="mt-0.5 text-purple-800 text-opacity-90">
                We'll get back to you as soon as we can.
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
                      className="mt-2 w-full rounded-2xl border-2 border-purple-50 p-4 text-[16px] text-sm font-medium text-purple-700 placeholder-purple-700 placeholder-opacity-70 outline-none duration-300 ease-in-out focus:border-purple-200 focus:outline-none focus:ring-purple-200"
                      required={field.required}
                    />
                  )}

                  {['text', 'email'].includes(field.type) && (
                    <input
                      id={field.name}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="mt-2 h-14 w-full rounded-2xl border-2 border-purple-50 p-4 text-[16px] text-sm font-medium text-purple-700 placeholder-purple-700 placeholder-opacity-70 outline-none duration-300 ease-in-out focus:border-purple-200 focus:outline-none focus:ring-purple-200"
                      required={field.required}
                    />
                  )}
                </div>
              ))}

              {isError === true && (
                <p className="mt-4 rounded-xl bg-red-50 p-3 text-red-700">
                  <span className="font-bold text-red-800">Uh oh!</span>{' '}
                  Something went wrong. Please try it again.
                </p>
              )}
              {isError === false && (
                <p className="mt-4 rounded-xl bg-green-50 p-3 text-green-700">
                  <span className="font-bold text-green-800">
                    We got your message!
                  </span>{' '}
                  You should hear from us soon.
                </p>
              )}

              <div className="mt-6 flex justify-start">
                <Button>Send message</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
