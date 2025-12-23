import { ErrorBoundary } from '@/components/ErrorBoundary'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { getAllItems } from '@/lib/getItems'
import '@/styles/tailwind.css'
import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import clsx from 'clsx'
import { Roboto_Flex } from 'next/font/google'
import { Banner } from '@/components/Banner'
import { EVENT_IDS } from '@/utils/tracking'

const roboto = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto'
})

/* Default metadata when not defined elsewhere */
export const metadata = {
  metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_DOMAIN_URL}`),
  title: 'Texas Twisters Gymnastics | Georgetown, TX',
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

export default async function RootLayout({ children }) {
  const programs = await getAllItems('programs')

  return (
    <html lang="en">
      <body className={clsx('font-sans', roboto.variable)}>
        <ErrorBoundary>
          <Header programs={programs} />
          {children}
          <Footer programs={programs} />
        </ErrorBoundary>
        <Analytics />
        <SpeedInsights />
        <GoogleTagManager gtmId={process.env.GTM_ID} />
        <Banner
          event={EVENT_IDS.BANNER_CTA_GYM_CLOSURE}
          icon="calendar"
          content="Happy Holidays! We will be closed From December 24 - January 1, classes will resume the following day."
          href="https://portal.iclasspro.com/texastwisters/news/2"
          color="purple"
        />
      </body>
    </html>
  )
}
