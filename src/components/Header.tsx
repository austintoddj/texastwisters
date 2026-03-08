'use client'

import { ContactHeader } from '@/components/ContactHeader'
import { Navbar } from '@/components/Navbar'
import { DataItem } from '@/lib/getItems'
import { ProgramData } from '@/types'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

interface HeaderProps {
  programs: DataItem<ProgramData>[]
}

export function Header({ programs }: HeaderProps) {
  const pathname = usePathname()

  return (
    <header
      className={clsx(pathname === '/parents' ? 'bg-white' : 'bg-purple-25')}
    >
      <ContactHeader />
      <Navbar programs={programs} />
    </header>
  )
}
