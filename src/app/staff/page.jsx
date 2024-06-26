/* eslint-disable-next-line */
import { AlternatingFeatures } from '@/components/AlternatingFeatures'
import { Staff } from '@/components/Staff'
import { StaffHero } from '@/components/StaffHero'

/* eslint-disable-next-line */
import { Stats } from '@/components/Stats'

/* eslint-disable-next-line */
import { Values } from '@/components/Values'

export const metadata = {
  title: 'Staff - Texas Twisters Gymnastics',
  description:
    'Learn about the mission behind Texas Twisters Gymnastics and meet our dedicated coaching staff. Explore our commitment to excellence, core values, and empowering athletes for a bright future.',
  alternates: {
    canonical: './'
  }
}

export default function StaffPage() {
  return (
    <>
      <StaffHero />
      {/* Gradient background transition */}
      <div className="h-32 w-full bg-gradient-to-b from-purple-25 to-white sm:h-40 lg:h-44" />

      {/*<AlternatingFeatures />*/}
      {/*<Stats />*/}
      <Staff />
      {/*<Values />*/}
    </>
  )
}
