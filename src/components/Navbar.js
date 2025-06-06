'use client'

import logo from '/public/images/logo.png'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { EVENT_IDS, EVENT_NAMES } from '@/utils/tracking'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverPanel
} from '@headlessui/react'
import { track } from '@vercel/analytics'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs' },
  { label: 'Parents', href: '/parents' },
  { label: 'Policies', href: '/policies' },
  { label: 'Hiring', href: '/#hiring' },
  { label: 'Contact us', href: '/contact' }
]

export function Navbar({ programs }) {
  const pathname = usePathname()

  function Hamburger() {
    return (
      <PopoverButton
        className="relative z-50 w-6 h-5 transition duration-500 ease-in-out transform rotate-0 cursor-pointer group focus:outline-none"
        aria-label="Toggle Navigation"
      >
        <span className="absolute left-0 top-0 block h-1 w-full rotate-0 transform rounded-full bg-purple-900 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-purple-600 group-data-[open]:left-1/2 group-data-[open]:top-2 group-data-[open]:w-0 group-data-[open]:bg-purple-50 group-data-[open]:group-hover:bg-white" />
        <span className="absolute left-0 top-2 block h-1 w-full transform rounded-full bg-purple-900 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-purple-600 group-data-[open]:rotate-45 group-data-[open]:bg-purple-50 group-data-[open]:group-hover:bg-white" />
        <span className="absolute left-0 top-2 block h-1 w-full transform rounded-full bg-purple-900 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-purple-600 group-data-[open]:-rotate-45 group-data-[open]:bg-purple-50 group-data-[open]:group-hover:bg-white" />
        <span className="absolute left-0 top-4 block h-1 w-full rotate-0 transform rounded-full bg-purple-900 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-purple-600 group-data-[open]:left-1/2 group-data-[open]:top-2 group-data-[open]:w-0 group-data-[open]:bg-purple-50 group-data-[open]:group-hover:bg-white" />
      </PopoverButton>
    )
  }

  function MobileNav() {
    return (
      <div className="block lg:hidden">
        <Popover>
          <Hamburger />

          <PopoverPanel
            as="div"
            transition
            className="absolute inset-x-0 top-0 z-40 w-screen transform overflow-y-scroll bg-gradient-to-tr from-purple-600 to-purple-600 px-4 py-16 transition data-[closed]:-translate-y-full data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:px-8"
          >
            <div className="flex flex-col items-center justify-center w-full h-full">
              <div className="flex flex-col items-center w-full mx-auto space-y-6 justify-evenly">
                {navigation.map(link => (
                  <Fragment key={`mobile-link-${link.label}`}>
                    {link.label !== 'Programs' && (
                      <Link href={link.href}>
                        <div className="group relative p-0.5">
                          <span className="relative z-10 text-2xl font-medium duration-300 ease-in-out text-purple-50 group-hover:text-white">
                            {link.label}
                          </span>
                          <span className="absolute -left-1 -right-1 bottom-0 h-1.5 origin-bottom scale-x-0 transform rounded-lg bg-yellow-400 duration-300 ease-in-out group-hover:scale-x-100" />
                        </div>
                      </Link>
                    )}
                  </Fragment>
                ))}

                <Link
                  onClick={() => {
                    track(EVENT_NAMES.LINK_CLICK, {
                      id: EVENT_IDS.CUSTOMER_PORTAL,
                      path: window.location.pathname
                    })
                  }}
                  href="https://portal.iclasspro.com/texastwisters/dashboard"
                  target="_blank"
                >
                  <Button>Customer Portal</Button>
                </Link>
              </div>

              <hr className="w-full my-8 border-purple-200/30 sm:my-10" />

              <div className="w-full max-w-md mx-auto">
                <p className="text-lg font-semibold tracking-wider text-center text-purple-200 uppercase sm:text-left">
                  Programs
                </p>
                <div className="grid gap-4 mt-4 justify-items-center sm:grid-cols-2 sm:justify-items-start sm:gap-x-8">
                  {programs.map((program, index) => (
                    <Link
                      href={`/programs/${program.slug}`}
                      key={`mobile-dropdown-${program.data.name}`}
                      className={clsx(index % 2 == 1 && 'sm:justify-self-end')}
                    >
                      <div className="group relative p-0.5">
                        <span className="relative z-10 text-xl font-medium duration-300 ease-in-out text-purple-50 group-hover:text-white">
                          {program.data.name}
                        </span>
                        <span className="absolute -left-1 -right-1 bottom-0 h-1.5 origin-bottom scale-x-0 transform rounded-lg bg-yellow-400 duration-300 ease-in-out group-hover:scale-x-100" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </PopoverPanel>
        </Popover>
      </div>
    )
  }

  return (
    <div className="px-4 sm:px-6">
      <nav className="mx-auto flex max-w-(--breakpoint-xl) items-center pt-5">
        <div className="flex items-center justify-between w-full">
          {/* Main navigation menu for large screens */}
          <div className="items-center justify-between hidden md:space-x-6 lg:flex lg:space-x-10">
            {navigation.map(link => (
              <Fragment key={`desktop-link-${link.label}`}>
                {link.label == 'Programs' ? (
                  <Menu as="div" className="relative">
                    <MenuButton className="outline-none cursor-pointer group focus:outline-none">
                      <div className="group relative p-0.5">
                        <span className="relative z-10 flex items-center text-lg font-medium text-purple-700 duration-300 ease-in-out group-hover:text-purple-600 group-data-[open]:text-purple-600">
                          Programs
                          {/* Heroicon name: solid/chevron-down */}
                          {/* Toggle class 'rotate-180' on dropdown open and close */}
                          <Icon
                            icon="chevronDown"
                            className="h-4.5 ml-1.5 w-4.5 transform duration-300 ease-in-out group-data-[open]:rotate-180"
                            stroke={2}
                          />
                        </span>
                        <span className="absolute -left-1 -right-1 bottom-0 h-1.5 origin-bottom scale-x-0 transform rounded-lg bg-yellow-400 duration-300 ease-in-out group-hover:scale-x-100" />
                      </div>
                    </MenuButton>

                    <MenuItems
                      transition
                      modal={false}
                      className="absolute left-1/2 z-20 mt-3 w-screen max-w-xs -translate-x-1/2 rounded-2xl border border-gray-50 bg-white p-4 shadow-lg outline-none focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      {programs.map((program, index) => (
                        <MenuItem
                          key={`desktop-dropdown-link-${program.data.name}`}
                          as="div"
                        >
                          {({ close }) => (
                            <>
                              <Link
                                href={`/programs/${program.slug}`}
                                className={clsx(
                                  'group block w-full rounded-xl py-4 sm:p-5',
                                  pathname === `/programs/${program.slug}`
                                    ? 'bg-purple-25'
                                    : 'transition duration-200 ease-in-out hover:bg-purple-25/60'
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
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                ) : (
                  <Link href={link.href}>
                    <div className="group relative p-0.5">
                      <span
                        className={clsx(
                          'relative z-10 text-lg font-medium',
                          pathname === link.href
                            ? 'text-purple-600'
                            : 'text-purple-700 duration-300 ease-in-out group-hover:text-purple-600'
                        )}
                      >
                        {link.label}
                      </span>
                      <span
                        className={clsx(
                          'absolute -left-1 -right-1 bottom-0 h-1.5 origin-bottom scale-x-0 transform rounded-lg bg-yellow-400',
                          pathname == link.href
                            ? 'scale-x-100'
                            : 'duration-300 ease-in-out group-hover:scale-x-100'
                        )}
                      />
                    </div>
                  </Link>
                )}
              </Fragment>
            ))}
          </div>

          {/* Call-to-action button */}
          <div className="hidden lg:block">
            <Link
              onClick={() => {
                track(EVENT_NAMES.LINK_CLICK, {
                  id: EVENT_IDS.CUSTOMER_PORTAL,
                  path: window.location.pathname
                })
              }}
              href="https://portal.iclasspro.com/texastwisters/dashboard"
              target="_blank"
            >
              <Button>Customer Portal</Button>
            </Link>
          </div>

          {/* Logo on smaller screens: < lg */}
          <div className="block w-60 shrink-0 grow-0 sm:w-60 lg:hidden">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo for Texas Twisters Gymnastics"
                className="h-auto"
              />
            </Link>
          </div>

          <MobileNav />
        </div>
      </nav>
    </div>
  )
}
