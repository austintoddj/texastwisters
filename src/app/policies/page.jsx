import { CallToAction } from '@/components/CallToAction'
import { PolicyInformation } from '@/components/PolicyInformation'

export const metadata = {
  title: 'Rules & Policies - Texas Twisters Gymnastics',
  description:
    'We want to ensure that the gym has a positive and healthy culture, and this policy is designed with that in mind.',
  alternates: {
    canonical: './'
  }
}

export default function PoliciesPage() {
  return (
    <>
      <PolicyInformation />
      <CallToAction />
    </>
  )
}
