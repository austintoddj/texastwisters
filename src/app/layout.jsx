import { Banner } from '@/components/Banner'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { getAllItems } from '@/lib/getItems'
import '@/styles/tailwind.css'
import { EVENT_IDS } from '@/utils/tracking'
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
        <Footer programs={programs} />
        <Analytics />
        <SpeedInsights />
        <GoogleTagManager gtmId={process.env.GTM_ID} />
        <Banner
          icon="sunHigh"
          content="Flip into Summer Fun! Join our Day Camps for gymnastics, games, crafts, and more! Spots are filling fast—grab yours today!"
          href="https://portal.iclasspro.com/texastwisters/camps/5?sortBy=name"
          color="blue"
          event={EVENT_IDS.BANNER_CTA_CAMP}
        />
      </body>
    </html>
  )
}
