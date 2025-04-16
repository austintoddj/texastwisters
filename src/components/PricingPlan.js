import checkmark from '/public/images/illustrations/checkmark.svg'
import { Button } from '@/components/Button'
import clsx from 'clsx'
import Image from 'next/image'

const gradients = [
  'from-purple-25 to-purple-10/70',
  'from-yellow-200 to-yellow-50',
  'from-blue-100/75 to-blue-50/50',
  'from-rose-100/90 to-rose-50/50',
  'from-teal-100/50 to-teal-50/40',
  'from-pink-100/70 to-pink-50/40',
  'from-slate-100 to-slate-50/75',
  'from-indigo-100/50 to-indigo-50/40'
]

function PopularBadge({ badgeText }) {
  return (
    <div>
      <span className="absolute z-10 right-8 top-0 -translate-y-1/2 inline-block px-2.5 py-1 text-[13px]/[16px] font-medium text-purple-700 bg-linear-to-b from-purple-200 to-purple-50 rounded-full -rotate-1 before:absolute before:inset-0 before:rounded-full before:border before:border-purple-900/10 shadow-[0_1px_theme(colors.white/0.25)_inset,0_1px_2px_theme(colors.purple.900/0.25)] text-shadow-2xs">
        {badgeText}
      </span>
    </div>
  )
}

export const PricingPlan = ({ pricingPlan, index, className }) => {
  return (
    <div
      key={`pricing-card-${index}`}
      className={clsx(
        gradients[index % gradients.length],
        'relative rounded-xl max-w-sm lg:max-w-md p-7 sm:p-8 xl:p-10 shadow-[0_8px_16px_-4px_theme(colors.zinc.950/0.08),0_4px_6px_-2px_theme(colors.zinc.950/0.03),0_2px_2px_-1px_theme(colors.zinc.950/0.04)] after:absolute after:inset-0 after:rounded-xl after:border after:border-zinc-950/0.08 bg-linear-to-b',
        className
      )}
    >
      {pricingPlan.badge && <PopularBadge badgeText={pricingPlan.badge} />}
      <div className="relative z-10">
        <div className="inline-block w-full text-left ">
          <div className="border-b pb-7 border-purple-900/5">
            <h3 className="relative text-lg font-semibold tracking-normal text-purple-900">
              {pricingPlan.name}
            </h3>
            <div className="flex items-end mt-4 gap-x-1.75">
              <h3 className="text-purple-900 text-[48px]/[60px] md:text-6xl/[64px] lg:text-7xl/[72px] font-semibold">
                {pricingPlan.price}
              </h3>
              <div className="pb-2.5">
                <span className="text-base font-medium text-purple-700">
                  {pricingPlan.interval}
                </span>
              </div>
            </div>
            <p className="block w-full mt-4 text-base text-purple-800/85">
              {pricingPlan.shortDescription}
            </p>
            {/* CTA button */}
            <Button
              href={pricingPlan.action.href}
              className="w-full mt-8"
              variant="accent"
              size="sm"
            >
              {pricingPlan.action.label}
            </Button>
          </div>

          {/* Features */}
          <ul className="mt-7 space-y-3.5 text-base">
            {pricingPlan.features.map((item, i) => (
              <li
                key={`pricing-plan-${index}-feature-${i}`}
                className="flex items-center"
              >
                <Image className="w-5 h-5 shrink-0" src={checkmark} alt="" />
                <span className="ml-3 text-base text-purple-800/85">
                  {item.feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
