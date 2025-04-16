import { Eyebrow } from '@/components/Eyebrow'
import { PricingPlans } from '@/components/PricingPlans'

export const ProgramPricing = ({ data }) => {
  return (
    <section className="relative w-full px-4 py-16 sm:px-6 sm:py-24 xl:px-8">
      {/* Container */}
      <div className="mx-auto max-w-xl lg:max-w-(--breakpoint-xl)">
        {/* Section content */}
        <div className="flex flex-col items-center justify-center">
          <Eyebrow text={data.tagline} />
          <h2 className="h2 mt-3.5 max-w-2xl text-purple-900 sm:mt-4 text-center">
            {data.headline}
          </h2>
          <p className="max-w-xl mt-6 text-lg leading-relaxed text-center lg:text-xl text-purple-800/90">
            {data.text}
          </p>
        </div>
      </div>
      <div className="mx-auto lg:max-w-(--breakpoint-xl)">
        <PricingPlans pricingPlans={data.pricing} />
      </div>
    </section>
  )
}
