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

// const contact = {
//     address: `${process.env.NEXT_PUBLIC_GYM_ADDRESS} ${process.env.NEXT_PUBLIC_GYM_CITY}, ${process.env.NEXT_PUBLIC_GYM_STATE} ${process.env.NEXT_PUBLIC_GYM_ZIP}`,
//     email: process.env.NEXT_PUBLIC_GYM_EMAIL,
//     name: process.env.NEXT_PUBLIC_GYM_NAME,
//     phone: process.env.NEXT_PUBLIC_GYM_PHONE
// }
//
// const portal = {
//     dashboard: process.env.NEXT_PUBLIC_ICLASSPRO_PORTAL
// }

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
      </body>
    </html>
  )
}
