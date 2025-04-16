import { Icon } from '@/components/Icon'
import { PricingCard } from '@/components/PricingPlan'

export const DeprecatedProgramPricing = ({ data }) => {
  return (
    <section className="relative w-full px-4 py-16 sm:px-6 sm:py-24 xl:px-8">
      {/* Container */}
      <div className="mx-auto max-w-xl lg:max-w-(--breakpoint-xl)">
        <div className="md:gap-16 lg:grid lg:grid-cols-2 lg:gap-0">
          {/* Section content */}
          <div className="flex flex-col justify-center pr-10 xl:pr-0">
            <div>
              <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md">
                {data.tagline}
              </span>
            </div>
            <h2 className="h2 mt-3.5 max-w-xl text-purple-900 sm:mt-4">
              {data.headline}
            </h2>
            <p className="max-w-lg mt-3 text-lg leading-relaxed text-purple-800">
              {data.text}
            </p>
            {/* Contact link */}
            <div className="mt-8 font-medium lg:mt-10">
              <p className="text-purple-800">
                Want to learn more about our programs?
              </p>
              <a
                href="/contact"
                className="group mt-1.5 flex w-[126px] max-w-full cursor-pointer items-center border-b-2 border-solid border-purple-600 bg-transparent px-0 py-0.5 text-left leading-6 text-purple-600 no-underline transition duration-300 ease-in-out hover:border-purple-400 hover:text-purple-500"
              >
                <span className="text-base font-bold text-left">
                  Get in touch
                </span>
                <Icon
                  icon="arrowNarrowRight"
                  className="w-6 h-6 ml-3 group-hover:animate-horizontal-bounce"
                  stroke={2}
                />
              </a>
            </div>
          </div>
          {/* Pricing cards */}
          <div className="grid gap-8 mt-14 md:grid-cols-2 lg:mt-20 lg:gap-4 xl:gap-8">
            {data.pricing.map((pricingPlan, index) => (
              <PricingCard
                key={`pricing-card-${index}`}
                pricingPlan={pricingPlan}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
