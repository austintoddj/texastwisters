import '@/styles/tailwind.css'

import { Analytics } from '@vercel/analytics/react'
import clsx from 'clsx'
import { Roboto_Flex } from 'next/font/google'

import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { getAllItems, getItemData } from '@/lib/getItems'

const roboto = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto'
})

export const metadata = {
  title: 'Texas Twisters Gymnastics',
  description:
    'Texas Twisters is dedicated to provide a safe, fun, and challenging environment where athletes of any age can grow and develop in the world of gymnastics.'
}

export default function RootLayout({ children }) {
  const programs = getAllItems('programs')
  const contact = getItemData('contact', 'global')
  const enrollment = getItemData('enrollment', 'global')

  return (
    <html lang="en">
      <body className={clsx('font-sans', roboto.variable)}>
        <Header programs={programs} contact={contact} enrollment={enrollment} />
        {children}
        <CallToAction />
        <Footer programs={programs} contact={contact} />
        <Analytics />
      </body>
    </html>
  )
}
