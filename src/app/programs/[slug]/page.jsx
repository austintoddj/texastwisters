import { ComingSoon } from '@/components/ComingSoon'
import { ProgramDescription } from '@/components/ProgramDescription'
import { ProgramHero } from '@/components/ProgramHero'
import { ProgramInformation } from '@/components/ProgramInformation'
import { ProgramPricing } from '@/components/ProgramPricing'
import { getAllItems, getItemData } from '@/lib/getItems'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const program = getItemData(slug, 'programs')
  const description = program.hero?.description ?? program.comingSoon?.text
  const ogImage = program.hero?.image?.src ?? program.comingSoon?.image?.src

  return {
    title: `${program.name} - Texas Twisters Gymnastics`,
    description: description,
    alternates: {
      canonical: './'
    },
    openGraph: { images: ogImage }
  }
}

export default async function ProgramPage({ params }) {
  const { slug } = await params
  const program = getItemData(slug, 'programs')
  const isComingSoon = Boolean(program?.comingSoon)

  if (isComingSoon) {
    return <ComingSoon data={program.comingSoon} />
  }

  return (
    <>
      {program?.hero && <ProgramHero hero={program.hero} />}
      {program?.infoSection && (
        <ProgramInformation data={program.infoSection} />
      )}
      {program?.descriptionSection && (
        <ProgramDescription data={program.descriptionSection} />
      )}
      {program?.pricingSection && (
        <ProgramPricing data={program.pricingSection} />
      )}
      {program?.comingSoon && <ComingSoon data={program.comingSoon} />}
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
