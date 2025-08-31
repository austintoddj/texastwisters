import { CallToAction } from '@/components/CallToAction'
import { PolicyInformation } from '@/components/PolicyInformation'

export const metadata = {
  title: 'Rules & Policies | Texas Twisters Gymnastics | Georgetown, TX',
  description:
    'We strive to ensure that our gym maintains an equitable, positive, and healthy culture. These policies are designed with that in mind.',
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
