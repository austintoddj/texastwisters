import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { FeaturedPrograms } from '@/components/FeaturedPrograms'
import { HomeFeatureBlocks } from '@/components/HomeFeatureBlocks'
import { HomeHero } from '@/components/HomeHero'
import { StaffHiring } from '@/components/StaffHiring'
import { Testimonials } from '@/components/Testimonials'
import { getAllItems } from '@/lib/getItems'

export const metadata = {
  title: 'Texas Twisters Gymnastics | Georgetown, TX',
  description:
    'Georgetown TX :: Recreational Gymnastics, Competitive Team, Adult Gymnastics, Preschool, Tumbling, Open Gyms, Birthday Parties, Camps.',
  alternates: {
    canonical: './'
  }
}

export default async function HomePage() {
  const faqs = await getAllItems('faqs')

  return (
    <>
      <HomeHero />
      {/* Gradient background transition */}
      <div className="w-full h-40 bg-linear-to-b from-purple-50 to-yellow-100 sm:h-48 xl:h-52" />

      <HomeFeatureBlocks />
      <StaffHiring />
      <FeaturedPrograms />
      <Testimonials />
      <Faqs faqs={faqs} />
      <CallToAction />
    </>
  )
}
