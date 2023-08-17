import { Events } from '@/components/Events'
/* eslint-disable-next-line */
import { Newsletter } from '@/components/Newsletter'
import { ParentsHero } from '@/components/ParentsHero'

export const metadata = {
  title: 'Parent information - Texas Twisters Gymnastics',
  description:
    'Stay connected with Bright Preschool & Elementary through our Parents Portal - your go-to source for school news, events, and updates.'
}

export default function ParentsPage() {
  return (
    <>
      <ParentsHero />
      <Events />
      {/*<Newsletter />*/}
    </>
  )
}
