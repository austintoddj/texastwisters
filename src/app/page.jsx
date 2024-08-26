import { Faqs } from '@/components/Faqs'
import { FeaturedPrograms } from '@/components/FeaturedPrograms'
import { HomeFeatureBlocks } from '@/components/HomeFeatureBlocks'
import { HomeHero } from '@/components/HomeHero'
import { StaffHiring } from '@/components/StaffHiring'
import { Testimonials } from '@/components/Testimonials'
import { getAllItems, getItemData } from '@/lib/getItems'

export const metadata = {
  title: 'Texas Twisters Gymnastics',
  description:
    'Georgetown TX :: Recreational Gymnastics, Competitive Team, Adult Gymnastics, Preschool, Tumbling, Open Gyms, Birthday Parties, Camps.',
  alternates: {
    canonical: './'
  }
}

export default function HomePage() {
  const faqs = getAllItems('faqs')
  const enrollment = getItemData('enrollment', 'global')

  return (
    <>
      <HomeHero enrollment={enrollment} />
      {/* Gradient background transition */}
      <div className="h-40 w-full bg-gradient-to-b from-purple-50 to-yellow-100 sm:h-48 xl:h-52" />

      <HomeFeatureBlocks />
      <StaffHiring />
      <FeaturedPrograms />
      <Testimonials />
      <Faqs faqs={faqs} />
    </>
  )
}
