/* eslint-disable-next-line */
import { ProgramDescription } from '@/components/ProgramDescription'
import { ProgramHero } from '@/components/ProgramHero'

/* eslint-disable-next-line */
import { ProgramInformation } from '@/components/ProgramInformation'
import { ProgramPricing } from '@/components/ProgramPricing'
import { getAllItems, getItemData } from '@/lib/getItems'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const program = getItemData(slug, 'programs')

  return {
    title: `${program.name} - Texas Twisters Gymnastics`,
    description: program.hero.description,
    alternates: {
      canonical: './'
    },
    openGraph: {
      images: program.hero.image.src
    }
  }
}

export default async function ProgramPage({ params }) {
  const { slug } = await params
  const program = getItemData(slug, 'programs')

  return (
    <>
      {program?.hero && <ProgramHero hero={program.hero} />}
      {/*{program?.infoSection && (*/}
      {/*  <ProgramInformation data={program.infoSection} />*/}
      {/*)}*/}
      {/*{program?.descriptionSection && (*/}
      {/*  <ProgramDescription data={program.descriptionSection} />*/}
      {/*)}*/}
      {program?.pricingSection && (
        <ProgramPricing data={program.pricingSection} />
      )}
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
