import { PricingPlan } from '@/components/PricingPlan'
import clsx from 'clsx'

export const PricingPlans = ({ pricingPlans }) => {
  const plansCount = pricingPlans.length
  let cardClass = ''

  if (plansCount === 1) {
    cardClass = 'w-full'
  } else if (plansCount === 2) {
    cardClass = 'w-full sm:w-[calc((100%-48px)/2)] lg:w-[calc((100%-64px)/2)]'
  } else if ([3, 5, 6].includes(plansCount)) {
    cardClass = 'w-full sm:w-[calc((100%-48px)/2)] lg:w-[calc((100%-64px)/3)]'
  } else if ([4, 7, 8].includes(plansCount)) {
    cardClass =
      'w-full sm:w-[calc((100%-48px)/2)] lg:w-[calc((100%-64px)/2)] xl:w-[calc((100%-72px)/4)]'
  }

  const containerGapClass = [4, 7, 8].includes(plansCount)
    ? 'lg:gap-8 xl:gap-6'
    : 'lg:gap-8'

  return (
    <div
      className={clsx(
        'flex flex-wrap justify-center w-full mt-14 lg:mt-20 gap-8 sm:gap-6',
        containerGapClass
      )}
    >
      {pricingPlans.map((plan, index) => (
        <PricingPlan
          key={`pricing-card-${index}`}
          pricingPlan={plan}
          index={index}
          className={cardClass}
        />
      ))}
    </div>
  )
}
