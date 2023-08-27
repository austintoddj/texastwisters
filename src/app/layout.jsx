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

/* Default metadata when not defined elsewhere */
export const metadata = {
  'title': 'Texas Twisters Gymnastics',
  'description':
    'Providing a safe, fun, and challenging environment where athletes of any age can grow and thrive in the world of gymnastics.',
  'og:image': '../public/images/opengraph-image.png'
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
