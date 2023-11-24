import logo from '/public/images/logo.png'
import { Icon } from '@/components/Icon'
import Image from 'next/image'
import Link from 'next/link'

export function ContactHeader({ contact }) {
  return (
    <div className="hidden px-4 sm:px-6 lg:block">
      {/* Container */}
      <div className="relative mx-auto max-w-screen-xl border-b border-purple-200/30 py-5">
        <div className="flex items-center justify-between">
          {/* Site branding */}
          <div className="w-80 flex-shrink-0 flex-grow-0">
            <Link href="/">
              <Image
                src={logo}
                alt="Texas Twisters Gymnastics"
                className="h-auto"
                priority
              />
            </Link>
          </div>
          {/* Contact information */}
          <ul className="ml-8 flex lg:space-x-6 xl:space-x-16">
            {/* Address */}
            <li className="flex max-w-xs flex-shrink">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-400">
                  <Icon icon="mapPin" className="h-6 w-6 text-purple-700" />
                </span>
              </div>
              <div className="ml-3 mt-0 flex-1 xl:ml-4">
                <h5 className="flex items-center text-base font-semibold text-purple-900">
                  Address
                </h5>
                <p className="mt-0.5 text-sm leading-relaxed text-purple-800 text-opacity-90">
                  {contact.address}
                </p>
              </div>
            </li>

            {/* Email */}
            <li className="flex flex-shrink-0">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-200">
                  <Icon icon="mail" className="h-6 w-6 text-purple-700" />
                </span>
              </div>
              <div className="ml-3 flex-1 xl:ml-4">
                <h5 className="flex items-center text-base font-semibold text-purple-900">
                  Email
                </h5>
                <p className="mt-0.5 text-sm leading-relaxed text-purple-800 text-opacity-90">
                  {contact.email}
                </p>
              </div>
            </li>

            {/* Phone number */}
            <li className="flex flex-shrink-0">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-200">
                  <Icon icon="phone" className="h-6 w-6 text-purple-700" />
                </span>
              </div>
              <div className="ml-3 flex-1 xl:ml-4">
                <h5 className="flex items-center text-base font-semibold text-purple-900">
                  Phone
                </h5>
                <p className="mt-0.5 text-sm leading-relaxed text-purple-800 text-opacity-90">
                  {contact.phone}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
