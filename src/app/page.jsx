import { Faqs } from '@/components/Faqs'
import { FeaturedPrograms } from '@/components/FeaturedPrograms'
import { HomeFeatureBlocks } from '@/components/HomeFeatureBlocks'
import { HomeHero } from '@/components/HomeHero'
import { StaffHiring } from '@/components/StaffHiring'
/* eslint-disable-next-line */
import { Testimonials } from '@/components/Testimonials'
import { getAllItems, getItemData } from '@/lib/getItems'

export const metadata = {
  title: 'Texas Twisters Gymnastics',
  description:
    'Texas Twisters is dedicated to provide a safe, fun, and challenging environment where athletes of any age can grow and develop in the world of gymnastics.'
}

export default function HomePage() {
  const faqs = getAllItems('faqs')
  const jobs = getAllItems('jobs')
  const enrollment = getItemData('enrollment', 'global')

  return (
    <>
      <HomeHero enrollment={enrollment} />
      {/* Gradient background transition */}
      <div className="w-full h-40 sm:h-48 xl:h-52 bg-gradient-to-b from-purple-50 to-yellow-100" />

      <HomeFeatureBlocks />
      <StaffHiring jobs={jobs} />
      <FeaturedPrograms />
      {/*<Testimonials />*/}
      <Faqs faqs={faqs} />
    </>
  )
}
