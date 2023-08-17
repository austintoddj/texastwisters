import { AboutHero } from '@/components/AboutHero'
import { AlternatingFeatures } from '@/components/AlternatingFeatures'
import { Staff } from '@/components/Staff'
/* eslint-disable-next-line */
import { Stats } from '@/components/Stats'
import { Values } from '@/components/Values'

export const metadata = {
  title: 'About us - Texas Twisters Gymnastics',
  description:
    "Learn about Texas Twister's mission, philosophy, and dedicated team. Explore our commitment to nurturing young minds, fostering creativity, and empowering children for a bright future."
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      {/* Gradient background transition */}
      <div className="w-full h-32 sm:h-40 lg:h-44 bg-gradient-to-b from-purple-25 to-white" />

      <AlternatingFeatures />
      {/*<Stats />*/}
      <Staff />
      <Values />
    </>
  )
}
