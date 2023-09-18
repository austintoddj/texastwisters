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
    'Providing quality gymnastics training in a safe and fun environment where athletes of all ages can thrive.'
}

export default function HomePage() {
  const faqs = getAllItems('faqs')
  const jobs = getAllItems('jobs')
  const enrollment = getItemData('enrollment', 'global')

  return (
    <>
      <HomeHero enrollment={enrollment} />
      {/* Gradient background transition */}
      <div className="h-40 w-full bg-gradient-to-b from-purple-50 to-yellow-100 sm:h-48 xl:h-52" />

      <HomeFeatureBlocks />
      <StaffHiring jobs={jobs} />
      <FeaturedPrograms />
      {/*<Testimonials />*/}
      <Faqs faqs={faqs} />
    </>
  )
}
