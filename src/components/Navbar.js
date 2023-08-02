"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { Menu, Transition, Popover } from "@headlessui/react";
import clsx from "clsx";

import logo from "/public/images/bright-logo.png";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs" },
  { label: "Gallery", href: "/gallery" },
  { label: "Parents", href: "/parents" },
  { label: "Contact", href: "/contact" },
];

export function Navbar({ programs }) {
  const pathname = usePathname();

  function MenuIcon({ open }) {
    return (
      <>
        <span
          className={clsx(
            "absolute block h-1 transition-all duration-300 ease-in-out transform rotate-0 rounded-full opacity-100",
            open
              ? "top-2 left-1/2 w-0 bg-purple-50 group-hover:bg-white"
              : "top-0 left-0 w-full bg-purple-900 group-hover:bg-purple-600"
          )}
        />
        <span
          className={clsx(
            "absolute left-0 block w-full h-1 transition-all duration-300 ease-in-out transform rounded-full opacity-100 top-2 group-hover:bg-purple-600",
            open
              ? "rotate-45 bg-purple-50 group-hover:bg-white"
              : "rotate-0 bg-purple-900 group-hover:bg-purple-600"
          )}
        />
        <span
          className={clsx(
            "absolute left-0 block w-full h-1 transition-all duration-300 ease-in-out transform rounded-full opacity-100 top-2 group-hover:bg-purple-600",
            open
              ? "-rotate-45 bg-purple-50 group-hover:bg-white"
              : "rotate-0 bg-purple-900 group-hover:bg-purple-600"
          )}
        />
        <span
          className={clsx(
            "absolute block h-1 transition-all duration-300 ease-in-out transform rotate-0 rounded-full opacity-100 group-hover:bg-purple-600",
            open
              ? "top-2 left-1/2 w-0 bg-purple-50 group-hover:bg-white"
              : "top-4 left-0 w-full bg-purple-900 group-hover:bg-purple-600"
          )}
        />
      </>
    );
  }

  function MobileNav() {
    return (
      <div className="block lg:hidden">
        <Popover>
          <Popover.Button
            className="relative z-50 w-6 h-5 transition duration-500 ease-in-out transform rotate-0 cursor-pointer group focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {({ open }) => <MenuIcon open={open} />}
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="duration-300 ease-out"
            enterFrom="opacity-0 -translate-y-full"
            enterTo="opacity-100 translate-y-0"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-full"
          >
            <Popover.Panel
              as="div"
              className="absolute inset-x-0 top-0 z-40 w-screen px-4 py-16 overflow-y-scroll bg-gradient-to-tr from-purple-600 to-purple-600 sm:px-8"
            >
              <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="flex flex-col items-center w-full mx-auto space-y-6 justify-evenly">
                  {navigation.map((link) => (
                    <Fragment key={`mobile-link-${link.label}`}>
                      {link.label !== "Programs" && (
                        <Link href={link.href}>
                          <div className="relative p-0.5 group">
                            <span className="relative z-10 text-2xl font-medium duration-300 ease-in-out text-purple-50 group-hover:text-white">
                              {link.label}
                            </span>
                            <span className="absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100" />
                          </div>
                        </Link>
                      )}
                    </Fragment>
                  ))}

                  <Button href="#">Enroll today</Button>
                </div>

                <hr className="w-full my-8 border-purple-200 sm:my-10 border-opacity-30" />

                <div className="w-full max-w-md mx-auto">
                  <p className="text-lg font-semibold tracking-wider text-center text-purple-200 uppercase sm:text-left">
                    Programs
                  </p>
                  <div className="grid gap-4 mt-4 justify-items-center sm:justify-items-start sm:grid-cols-2 sm:gap-x-8">
                    {programs.map((program, index) => (
                      <Link
                        href={`/programs/${program.slug}`}
                        key={`mobile-dropdown-${program.data.name}`}
                        className={clsx(
                          index % 2 == 1 && "sm:justify-self-end"
                        )}
                      >
                        <div className="relative p-0.5 group">
                          <span className="relative z-10 text-xl font-medium duration-300 ease-in-out text-purple-50 group-hover:text-white">
                            {program.data.name}
                          </span>
                          <span className="absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6">
      <nav className="flex items-center max-w-screen-xl pt-5 mx-auto">
        <div className="flex items-center justify-between w-full">
          {/* Main navigation menu for large screens */}
          <div className="items-center justify-between hidden lg:flex md:space-x-6 lg:space-x-10">
            {navigation.map((link) => (
              <Fragment key={`desktop-link-${link.label}`}>
                {link.label == "Programs" ? (
                  <Menu as="div" className="relative">
                    {({ open }) => (
                      <>
                        <Menu.Button>
                          <div className="relative p-0.5 group">
                            <span
                              className={clsx(
                                "relative z-10 flex items-center text-lg font-medium duration-300 ease-in-out group-hover:text-purple-600",
                                open ? "text-purple-600" : "text-purple-700"
                              )}
                            >
                              Programs
                              {/* Heroicon name: solid/chevron-down */}
                              {/* Toggle class 'rotate-180' on dropdown open and close */}
                              <Icon
                                icon="chevronDown"
                                className={clsx(
                                  "ml-1.5 w-4.5 h-4.5 transform duration-300 ease-in-out",
                                  open && "rotate-180"
                                )}
                                stroke={2}
                              />
                            </span>
                            <span className="absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100" />
                          </div>
                        </Menu.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-300"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-200"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute z-20 w-screen max-w-xs p-4 mt-3 -translate-x-1/2 bg-white border shadow-lg left-1/2 border-gray-50 rounded-2xl">
                            {programs.map((program, index) => (
                              <Menu.Item
                                key={`desktop-dropdown-link-${program.data.name}`}
                                as="div"
                              >
                                {({ close }) => (
                                  <>
                                    <Link
                                      href={`/programs/${program.slug}`}
                                      className={clsx(
                                        "block w-full py-4 rounded-xl sm:p-5 group",
                                        pathname === `/programs/${program.slug}`
                                          ? "bg-purple-25"
                                          : "transition duration-200 ease-in-out hover:bg-purple-25/60"
                                      )}
                                      onClick={close}
                                    >
                                      <h5 className="text-lg font-semibold text-purple-600">
                                        {program.data.name}
                                      </h5>
                                      <p className="mt-1 text-sm text-purple-800 opacity-90">
                                        {program.data.dropdownDescription}
                                      </p>
                                    </Link>
                                    {index != programs.length - 1 && (
                                      <>
                                        <hr className="my-1 border-purple-200/30 sm:my-2" />
                                      </>
                                    )}
                                  </>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                ) : (
                  <Link href={link.href}>
                    <div className="relative p-0.5 group">
                      <span
                        className={clsx(
                          "relative z-10 text-lg font-medium",
                          pathname === link.href
                            ? "text-purple-600"
                            : "duration-300 ease-in-out group-hover:text-purple-600 text-purple-700"
                        )}
                      >
                        {link.label}
                      </span>
                      <span
                        className={clsx(
                          "absolute bottom-0 h-1.5 origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1",
                          pathname == link.href
                            ? "scale-x-100"
                            : "duration-300 ease-in-out group-hover:scale-x-100"
                        )}
                      />
                    </div>
                  </Link>
                )}
              </Fragment>
            ))}
          </div>

          {/* Call to action button */}
          <div className="hidden lg:block">
            <Button href="#">Enroll today</Button>
          </div>
          {/* Logo on smaller screens: < lg */}
          <div className="flex-grow-0 flex-shrink-0 block w-48 lg:hidden sm:w-52">
            <Link href="/">
              <Image src={logo} alt="Bright" className="h-auto" />
            </Link>
          </div>

          <MobileNav />
        </div>
      </nav>
    </div>
  );
}
