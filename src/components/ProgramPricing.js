import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { getItemData } from '@/lib/getItems'

export const ProgramPricing = ({ data }) => {
  const enrollment = getItemData('enrollment', 'global')

  return (
    <section className="relative w-full px-4 py-16 sm:px-6 sm:py-24 xl:px-8">
      {/* Container */}
      <div className="mx-auto max-w-xl lg:max-w-screen-xl">
        <div className="md:gap-16 lg:grid lg:grid-cols-2 lg:gap-0">
          {/* Section content */}
          <div className="flex flex-col justify-center pr-10 xl:pr-0">
            <div>
              <span className="inline-block rounded-full bg-purple-200 px-4 py-2 font-medium text-purple-700 shadow-md">
                {data.tagline}
              </span>
            </div>
            <h2 className="h2 mt-3.5 max-w-xl text-purple-900 sm:mt-4">
              {data.headline}
            </h2>
            <p className="mt-3 max-w-lg text-lg leading-relaxed text-purple-800">
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
                <span className="text-left text-base font-bold">
                  Get in touch
                </span>
                <Icon
                  icon="arrowNarrowRight"
                  className="ml-3 h-6 w-6 group-hover:animate-horizontal-bounce"
                  stroke={2}
                />
              </a>
            </div>
          </div>
          {/* Pricing cards */}
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:mt-20 lg:gap-4 xl:gap-8">
            {[...Array(2)].map((e, i) => (
              <div
                key={`pricing-card-${i}`}
                className={clsx(
                  i == 0 ? 'bg-purple-25' : 'bg-yellow-200 lg:-translate-y-20',
                  'w-full rounded-xl px-6 py-10 lg:px-5 xl:px-10'
                )}
              >
                <div className="relative">
                  <div className="relative inline-block w-full text-left">
                    <h3 className="relative text-xl font-bold tracking-normal text-purple-900">
                      {data[`pricing${i + 1}`].name}
                    </h3>
                    <div className="mt-2">
                      <h2 className="h1 text-purple-900">
                        {data[`pricing${i + 1}`].price}
                      </h2>
                      <div className="mt-3">
                        <div className="inline-block h-6 rounded-xl bg-purple-200 px-3 align-top text-sm font-medium leading-6 text-purple-700">
                          {data[`pricing${i + 1}`].interval}
                        </div>
                      </div>
                      <p className="mt-6 block w-full font-medium text-purple-900">
                        {data[`pricing${i + 1}`].shortDescription}
                      </p>
                    </div>
                    {/* Features */}
                    <ul className="mt-4 space-y-2 text-base">
                      {data[`pricing${i + 1}`].features.map((item, index) => (
                        <li
                          key={`pricing-1-feature-${index}`}
                          className="flex items-center"
                        >
                          <Icon
                            icon="check"
                            className="h-5 w-5 text-purple-600"
                            stroke={2}
                          />

                          <span className="ml-2 text-purple-800">
                            {item.feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {/* CTA button */}
                    {enrollment.active && (
                      <Button
                        href={data[`pricing${i + 1}`].action.href}
                        className="mt-6"
                        variant="accent"
                        size="sm"
                      >
                        {data[`pricing${i + 1}`].action.label}
                        {data[`pricing${i + 1}`].action.icon && (
                          <Icon
                            icon="arrowNarrowRight"
                            className="ml-3 h-5 w-5 group-hover:animate-horizontal-bounce"
                            stroke={2}
                          />
                        )}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
