import { AboutHero } from '@/components/AboutHero'
/* eslint-disable-next-line */
import { AlternatingFeatures } from '@/components/AlternatingFeatures'
import { Staff } from '@/components/Staff'
/* eslint-disable-next-line */
import { Stats } from '@/components/Stats'
/* eslint-disable-next-line */
import { Values } from '@/components/Values'

export const metadata = {
  title: 'About us - Texas Twisters Gymnastics',
  description:
    'Learn about the mission behind Texas Twisters Gymnastics and meet our dedicated coaching staff. Explore our commitment to excellence, core values, and empowering athletes for a bright future.'
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      {/* Gradient background transition */}
      <div className="w-full h-32 sm:h-40 lg:h-44 bg-gradient-to-b from-purple-25 to-white" />

      {/*<AlternatingFeatures />*/}
      {/*<Stats />*/}
      <Staff />
      {/*<Values />*/}
    </>
  )
}
