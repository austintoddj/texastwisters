import '@/styles/tailwind.css'
import clsx from 'clsx'
import { Roboto_Flex } from 'next/font/google'

import { Header } from '@/components/Header'
import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'

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

    return (
        <html lang="en">
            <body className={clsx('font-sans', roboto.variable)}>
                <Header programs={programs} contact={contact} />
                {children}
                <CallToAction />
                <Footer programs={programs} contact={contact} />
                <Analytics />
            </body>
        </html>
    )
}
