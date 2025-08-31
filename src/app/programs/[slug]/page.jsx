import { CallToAction } from '@/components/CallToAction'
import { ComingSoonHero } from '@/components/ComingSoonHero'
import { ProgramDescription } from '@/components/ProgramDescription'
import { ProgramHero } from '@/components/ProgramHero'
import { ProgramInformation } from '@/components/ProgramInformation'
import { ProgramPricing } from '@/components/ProgramPricing'
import { getAllItems, getItemData } from '@/lib/getItems'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const program = getItemData(slug, 'programs')
  const description = program.hero?.description ?? program.comingSoonHero?.text
  const ogImage = program.hero ? program.hero.image?.src : undefined

  const metadata = {
    title: `${program.name} | Texas Twisters Gymnastics | Georgetown, TX`,
    description: description,
    alternates: {
      canonical: './'
    }
  }

  if (ogImage) {
    metadata.openGraph = { images: ogImage }
  }

  return metadata
}

export default async function ProgramPage({ params }) {
  const { slug } = await params
  const program = getItemData(slug, 'programs')
  const isComingSoon = Boolean(program?.comingSoonHero)

  return (
    <>
      {isComingSoon ? (
        <ComingSoonHero data={program.comingSoonHero} />
      ) : (
        program?.hero && <ProgramHero hero={program.hero} />
      )}
      {program?.infoSection && (
        <ProgramInformation data={program.infoSection} />
      )}
      {program?.descriptionSection && (
        <ProgramDescription data={program.descriptionSection} />
      )}
      {program?.pricingSection && (
        <ProgramPricing data={program.pricingSection} />
      )}
      {!isComingSoon && <CallToAction />}
    </>
  )
}

export async function generateStaticParams() {
  const programs = getAllItems('programs')

  return programs.map(program => ({
    slug: program.slug
  }))
}

export const dynamicParams = false
