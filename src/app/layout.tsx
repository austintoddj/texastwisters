import { Banner } from '@/components/Banner'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { getAllItems } from '@/lib/getItems'
import '@/styles/tailwind.css'
import { ProgramData } from '@/types'
import { EVENT_IDS } from '@/utils/tracking'
import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Roboto_Flex } from 'next/font/google'

const roboto = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto'
})

export const metadata: Metadata = {
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

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const programs = await getAllItems<ProgramData>('programs')

  return (
    <html lang="en">
      <body className={clsx('font-sans', roboto.variable)}>
        <ErrorBoundary>
          {/*<Banner*/}
          {/*  icon="sunHigh"*/}
          {/*  content="Don’t miss out! Summer Day Camps are in full swing and filling fast. They'll enjoy games, crafts, open gym and more!"*/}
          {/*  href="https://portal.iclasspro.com/texastwisters/camps/5?sortBy=name"*/}
          {/*  color="blue"*/}
          {/*  event={EVENT_IDS.BANNER_CTA_CAMP}*/}
          {/*  ariaLabel="Summer day camp promotion"*/}
          {/*/>*/}
          <Banner
            icon="ticket"
            content="Join us this Saturday for our Pull-Up and Pullover clinic! This clinic will focus on building the strength and technique for your child to master their pull over."
            href="https://portal.iclasspro.com/texastwisters/camp-details/2331"
            color="purple"
            event={EVENT_IDS.BANNER_CTA_CLINIC}
            ariaLabel="Pull up and pull over clinic promotion"
          />
          <Header programs={programs} />
          {children}
          <Footer programs={programs} />
        </ErrorBoundary>
        <Analytics />
        <SpeedInsights />
        <GoogleTagManager gtmId={process.env.GTM_ID as string} />
      </body>
    </html>
  )
}
