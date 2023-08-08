'use client'

import Image from 'next/image'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import dotsLargeGrid from '/public/images/illustrations/dots-large-grid.svg'
import dotsGrid from '/public/images/illustrations/dots-grid.svg'
import dotsStrip from '/public/images/illustrations/dots-strip.svg'
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
                Accept: 'application/json, text/plain, */*',
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
        <section className="px-4 pb-12 overflow-hidden lg:pt-24 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-25 to-purple-50">
            {/* Container */}
            <div className="max-w-xl mx-auto lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-32 lg:max-w-screen-xl ">
                {/* Hero header */}
                <div className="py-16 lg:py-32">
                    <div>
                        <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md">
                            Contact us today
                        </span>
                    </div>
                    <h1 className="max-w-md mt-4 text-purple-900 h1">
                        We'd love to hear from you
                    </h1>
                    <p className="max-w-lg mt-3 text-xl leading-relaxed text-purple-800">
                        Need to get in touch with us? Either fill out the form
                        or find more ways to connect with us below.
                    </p>
                </div>
                {/* Contact form container */}
                <div className="relative">
                    {/* Background decorations */}
                    <Image
                        src={dotsLargeGrid}
                        className="absolute lg:hidden -right-16 -top-12 sm:-top-16 w-80 lg:left-14 lg:-top-16 lg:w-36 opacity-60"
                        alt=""
                        priority
                    />
                    <Image
                        src={dotsGrid}
                        className="absolute hidden w-40 opacity-75 lg:block -right-16 -top-16 lg:left-14 lg:-top-16 lg:w-36"
                        alt=""
                    />
                    <Image
                        src={dotsStrip}
                        className="absolute hidden w-20 rotate-90 opacity-75 lg:block -right-16 top-1/2"
                        alt=""
                    />
                    {/* Contact form card */}
                    <div className="relative z-10 w-full px-4 py-10 mx-auto bg-white shadow-xl rounded-3xl lg:mr-0 lg:ml-auto sm:p-16 lg:p-12 xl:p-14">
                        <div>
                            <h3 className="text-2xl font-bold text-purple-900">
                                Send us a message
                            </h3>
                            <p className="text-purple-800 mt-0.5 text-opacity-90">
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
                                        className="ml-0.5 text-purple-900 font-medium text-sm"
                                    >
                                        {field.label}
                                    </label>
                                    {field.type == 'textarea' && (
                                        <textarea
                                            id={field.name}
                                            name={field.name}
                                            placeholder={field.placeholder}
                                            rows={5}
                                            className="w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
                                            required={field.required}
                                        />
                                    )}

                                    {['text', 'email'].includes(field.type) && (
                                        <input
                                            id={field.name}
                                            type={field.type}
                                            name={field.name}
                                            placeholder={field.placeholder}
                                            className="w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
                                            required={field.required}
                                        />
                                    )}
                                </div>
                            ))}

                            {isError === true && (
                                <p className="mt-4 text-red-700 bg-red-50 p-3 rounded-xl">
                                    <span className="font-bold text-red-800">
                                        Uh oh!
                                    </span>{' '}
                                    Something went wrong. Please try it again.
                                </p>
                            )}
                            {isError === false && (
                                <p className="mt-4 text-green-700 bg-green-50 p-3 rounded-xl">
                                    <span className="font-bold text-green-800">
                                        We got your message!
                                    </span>{' '}
                                    You should hear from us soon.
                                </p>
                            )}

                            <div className="flex justify-start mt-6">
                                <Button>Send message</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
