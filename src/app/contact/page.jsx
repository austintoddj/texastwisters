import { CallToAction } from '@/components/CallToAction'
import { ContactHero } from '@/components/ContactHero'
import { ContactInformation } from '@/components/ContactInformation'

export const metadata = {
  title: 'Contact us - Texas Twisters Gymnastics',
  description:
    "Get in touch with Texas Twisters Gymnastics - we're here to help! Find our contact information, location, or submit an inquiry.",
  alternates: {
    canonical: './'
  }
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInformation />
      <CallToAction />
    </>
  )
}
