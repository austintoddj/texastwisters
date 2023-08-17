'use client'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'

import { ContactHeader } from '@/components/ContactHeader'
import { Navbar } from '@/components/Navbar'

export function Header({ programs, contact, enrollment }) {
  const pathname = usePathname()

  return (
    <header
      className={clsx(pathname === '/parents' ? 'bg-white' : 'bg-purple-25')}
    >
      <ContactHeader contact={contact} />
      <Navbar programs={programs} enrollment={enrollment} />
    </header>
  )
}
