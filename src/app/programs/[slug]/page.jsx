import {ProgramHero} from '@/components/ProgramHero'
import {ProgramInformation} from '@/components/ProgramInformation'
import {ProgramDescription} from '@/components/ProgramDescription'
import {ProgramPricing} from '@/components/ProgramPricing'

import {getAllItems, getItemData} from '@/lib/getItems'

export async function generateMetadata({params: {slug}}) {
    const program = getItemData(slug, 'programs')

    return {
        title: `${program.name} - Bright School`,
        description: program.hero.description
    }
}

export default function ProgramPage({params: {slug}}) {
    const program = getItemData(slug, 'programs')

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
