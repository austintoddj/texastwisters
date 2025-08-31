import { CallToAction } from '@/components/CallToAction'
import { Events } from '@/components/Events'
/* eslint-disable-next-line */
import { Newsletter } from '@/components/Newsletter'
import { ParentsHero } from '@/components/ParentsHero'

export const metadata = {
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
