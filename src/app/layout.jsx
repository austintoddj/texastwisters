import { Banner } from '@/components/Banner'
import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { getAllItems } from '@/lib/getItems'
import '@/styles/tailwind.css'
import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import clsx from 'clsx'
import { Roboto_Flex } from 'next/font/google'

const roboto = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto'
})

/* Default metadata when not defined elsewhere */
export const metadata = {
  metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_DOMAIN_URL}`),
  title: 'Texas Twisters Gymnastics',
  openGraph: {
    siteName: 'Texas Twisters Gymnastics',
    url: new URL(`https://${process.env.NEXT_PUBLIC_DOMAIN_URL}`),
    locale: 'en_US',
    type: 'website'
  },
  description:
    'Georgetown TX :: Recreational Gymnastics, Competitive Team, Adult Gymnastics, Preschool, Tumbling, Open Gyms, Birthday Parties, Camps.',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      url: '/images/favicon/icon-light.png',
      media: '(prefers-color-scheme: light)'
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/images/favicon/icon-dark.png',
      media: '(prefers-color-scheme: dark)'
    }
  ]
}

export default function RootLayout({ children }) {
  const programs = getAllItems('programs')

  return (
    <html lang="en">
      <body className={clsx('font-sans', roboto.variable)}>
        <Header programs={programs} />
        {children}
        <CallToAction />
        <Footer programs={programs} />
        <Analytics />
        <SpeedInsights />
        <GoogleTagManager gtmId={process.env.GTM_ID} />
        <Banner
          icon="run"
          content="Discover our brand new Day Camps during school breaks! 9am-2pm, featuring games, crafts, and more. Ages 4+."
          href="https://portal.iclasspro.com/texastwisters/camps/5"
          color="blue"
        />
      </body>
    </html>
  )
}
