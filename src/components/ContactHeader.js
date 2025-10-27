import { Icon } from '@/components/Icon'
import logo from '@/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'

export function ContactHeader() {
  return (
    <div className="hidden px-4 sm:px-6 lg:block">
      {/* Container */}
      <div className="relative mx-auto max-w-(--breakpoint-xl) border-b border-purple-200/30 py-5">
        <div className="flex items-center justify-between">
          {/* Site branding */}
          <div className="w-80 shrink-0 grow-0">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo for Texas Twisters Gymnastics"
                className="h-auto"
                priority
              />
            </Link>
          </div>
          {/* Contact information */}
          <ul className="ml-8 flex lg:space-x-6 xl:space-x-16">
            {/* Address */}
            <li className="flex max-w-xs shrink">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-400">
                  <Icon icon="mapPin" className="h-6 w-6 text-purple-700" />
                </span>
              </div>
              <div className="ml-3 mt-0 flex-1 xl:ml-4">
                <h5 className="flex items-center text-base font-semibold text-purple-900">
                  Address
                </h5>
                <p className="mt-0.5 text-sm leading-relaxed text-purple-800/90">
                  901 S I-35 Frontage Rd Suite 103 Georgetown, TX 78626
                </p>
              </div>
            </li>

            {/* Email */}
            <li className="flex shrink-0">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-200">
                  <Icon icon="mail" className="h-6 w-6 text-purple-700" />
                </span>
              </div>
              <div className="ml-3 flex-1 xl:ml-4">
                <h5 className="flex items-center text-base font-semibold text-purple-900">
                  Email
                </h5>
                <p className="mt-0.5 text-sm leading-relaxed text-purple-800/90">
                  info@texastwistersgym.com
                </p>
              </div>
            </li>

            {/* Phone number */}
            <li className="flex shrink-0">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-200">
                  <Icon icon="phone" className="h-6 w-6 text-purple-700" />
                </span>
              </div>
              <div className="ml-3 flex-1 xl:ml-4">
                <h5 className="flex items-center text-base font-semibold text-purple-900">
                  Phone
                </h5>
                <p className="mt-0.5 text-sm leading-relaxed text-purple-800/90">
                  (512) 884-2702
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
