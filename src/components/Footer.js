import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import logo from "/public/images/bright-logo.png";
import { Icon } from "@/components/Icon";

const siteLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Parents", href: "/gallery" },
  { label: "Contact us", href: "/contact" },
];

function SocialLink({ className, href, icon }) {
  return (
    <Link
      className={clsx(
        "flex items-center justify-center w-10 h-10 duration-300 ease-in-out bg-purple-500 rounded-full hover:bg-purple-600",
        className
      )}
      href={href}
    >
      <Icon icon={icon} className="w-5 h-5 text-white" />
    </Link>
  );
}

export const Footer = ({ programs, contact }) => {
  return (
    <footer className="px-4 pt-16 space-y-8 bg-yellow-100 divide-y sm:pt-20 sm:px-6 lg:px-8 divide-purple-400/20">
      {/* Top section: blocks */}
      <div className="grid max-w-md mx-auto gap-y-8 sm:gap-y-12 sm:gap-x-8 md:gap-x-12 sm:max-w-none lg:max-w-screen-2xl sm:grid-cols-2 lg:grid-cols-11 lg:gap-8 xl:gap-12">
        {/* Block 1 */}
        <div className="flex flex-col lg:mx-auto lg:col-span-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-grow-0 flex-shrink-0 w-60">
              <Link href="/">
                <Image src={logo} alt="Bright" className="h-auto" />
              </Link>
            </div>
          </div>
          {/* Mission statement */}
          <div className="mt-6 text-lg text-purple-800">
            Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Diam sit amet quam vehicula elementum sed sit.
          </div>
          {/* Social links */}
          <div className="w-full mt-5 lg:mt-6">
            <div className="flex justify-start space-x-4">
              <SocialLink href="#0" icon="instagram" />
              <SocialLink href="#0" icon="facebook" />
              <SocialLink href="#0" icon="twitter" />
            </div>
          </div>
        </div>
        {/* Block 2 */}
        <div className="flex-shrink sm:order-3 lg:order-none lg:col-span-2">
          <h6 className="relative text-xl font-bold tracking-wide text-purple-900">
            <span className="relative z-20">Programs</span>
            <span className="absolute left-0 z-10 w-12 h-1 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 -bottom-1" />
          </h6>
          {/* Program links */}
          <ul className="mt-6 text-lg divide-y divide-purple-400/20">
            {programs.map((program, index) => (
              <li
                key={`footer-program-link-${program.data.name}`}
                className={clsx(
                  "font-medium text-purple-700 duration-300 ease-in-out hover:text-purple-600",
                  index == 0 && "pb-2",
                  index == programs.length && "pt-2",
                  index > 0 && index < programs.length && "py-2"
                )}
              >
                <Link href={program.slug}>{program.data.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Block 3 */}
        <div className="flex-shrink sm:order-4 lg:order-none lg:col-span-2">
          <h6 className="relative text-xl font-bold tracking-wide text-purple-900">
            <span className="relative z-20">Site Links</span>
            <span className="absolute left-0 z-10 w-12 h-1 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 -bottom-1" />
          </h6>
          {/* Site links */}
          <ul className="mt-6 text-lg divide-y divide-purple-400/20">
            {siteLinks.map((link, index) => (
              <li
                key={`footer-site-link-${link.label}`}
                className={clsx(
                  "font-medium text-purple-700 duration-300 ease-in-out hover:text-purple-600",
                  index == 0 && "pb-2",
                  index == siteLinks.length && "pt-2",
                  index > 0 && index < siteLinks.length && "py-2"
                )}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Block 4 */}
        <div className="sm:order-2 lg:order-none lg:col-span-3 lg:mx-auto ">
          <h6 className="relative text-xl font-bold tracking-wide text-purple-900">
            <span className="relative z-20">Contact us</span>
            <span className="absolute left-0 z-10 w-12 h-1 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 -bottom-1" />
          </h6>
          {/* Contact information */}
          <ul className="flex flex-col mt-6 space-y-5">
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
      {/* Bottom section */}
      <div className="flex flex-col justify-between max-w-md py-8 mx-auto sm:flex-row sm:max-w-none lg:max-w-screen-2xl">
        {/* Copyright note */}
        <span className="text-base text-purple-800/90">
          © {new Date().getFullYear()} Bright School. All rights reserved.
        </span>
        <p className="mt-0.5 flex items-center text-purple-800/90">
          Made with
          <Icon icon="coffee" className="w-5 h-5 mx-1" />
          <span>
            by{" "}
            <Link
              className="text-purple-700 hover:text-purple-900 hover:underline"
              href="https://www.tailwindawesome.com/"
              target="_blank"
            >
              Tailwind Awesome
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};
