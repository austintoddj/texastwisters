import { AboutHero } from '@/components/AboutHero'
import { AlternatingFeatures } from '@/components/AlternatingFeatures'
import { CallToAction } from '@/components/CallToAction'
import { Staff } from '@/components/Staff'
import { Stats } from '@/components/Stats'
import { Values } from '@/components/Values'

export const metadata = {
  title: 'About | Texas Twisters Gymnastics | Georgetown, TX',
  description:
    'Learn about the mission behind Texas Twisters Gymnastics and meet our dedicated coaching staff. Explore our commitment to excellence, core values, and empowering athletes for a bright future.',
  alternates: {
    canonical: './'
  }
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      {/* Gradient background transition */}
      <div className="w-full h-32 bg-linear-to-b from-purple-25 to-white sm:h-40 lg:h-44" />

      {/*<AlternatingFeatures />*/}
      {/* <Stats /> */}
      <Staff />
      <Values />
      <CallToAction />
    </>
  )
}
