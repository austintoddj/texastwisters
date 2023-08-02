import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/Icon";
import logo from "/public/images/bright-logo.png";

export function ContactHeader({ contact }) {
  return (
    <div className="hidden px-4 lg:block sm:px-6">
      {/* Container */}
      <div className="relative max-w-screen-xl py-5 mx-auto border-b border-purple-200/30">
        <div className="flex items-center justify-between">
          {/* Site branding */}
          <div className="flex-grow-0 flex-shrink-0 w-60">
            <Link href="/">
              <Image src={logo} alt="Bright" className="h-auto" />
            </Link>
          </div>
          {/* Contact information */}
          <ul className="flex ml-8 lg:space-x-6 xl:space-x-16">
            {/* Address */}
            <li className="flex flex-shrink max-w-xs">
              <div>
                <span className="flex items-center justify-center bg-yellow-400 rounded-2xl w-11 h-11">
                  <Icon icon="mapPin" className="w-6 h-6 text-purple-700" />
                </span>
              </div>
              <div className="flex-1 mt-0 ml-3 xl:ml-4">
                <h5 className="flex items-center text-base font-semibold text-purple-900">
                  Address
                </h5>
                <p className="mt-0.5 text-sm text-purple-800 leading-relaxed text-opacity-90">
                  {contact.address}
                </p>
              </div>
            </li>

            {/* Email */}
            <li className="flex flex-shrink-0">
              <div>
                <span className="flex items-center justify-center bg-purple-200 rounded-2xl w-11 h-11">
                  <Icon icon="mail" className="w-6 h-6 text-purple-700" />
                </span>
              </div>
              <div className="flex-1 ml-3 xl:ml-4">
                <h5 className="flex items-center text-base font-semibold text-purple-900">
                  Email
                </h5>
                <p className="mt-0.5 text-sm text-purple-800 leading-relaxed text-opacity-90">
                  {contact.email}
                </p>
              </div>
            </li>

            {/* Phone number */}
            <li className="flex flex-shrink-0">
              <div>
                <span className="flex items-center justify-center rounded-2xl w-11 h-11 bg-rose-200">
                  <Icon icon="phone" className="w-6 h-6 text-purple-700" />
                </span>
              </div>
              <div className="flex-1 ml-3 xl:ml-4">
                <h5 className="flex items-center text-base font-semibold text-purple-900">
                  Phone
                </h5>
                <p className="mt-0.5 text-sm text-purple-800 leading-relaxed text-opacity-90">
                  {contact.phone}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
