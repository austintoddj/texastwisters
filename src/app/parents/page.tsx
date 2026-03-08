import { CallToAction } from '@/components/CallToAction'
import { Events } from '@/components/Events'
import { ParentsHero } from '@/components/ParentsHero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Parent information | Texas Twisters Gymnastics | Georgetown, TX',
  description:
    'Stay connected with Texas Twisters Gymnastics through our Parents Portal - your go-to source for gym news, events, and updates.',
  alternates: {
    canonical: './'
  }
}

export default function ParentsPage() {
  return (
    <>
      <ParentsHero />
      <Events />
      {/*<Newsletter />*/}
      <CallToAction />
    </>
  )
}
