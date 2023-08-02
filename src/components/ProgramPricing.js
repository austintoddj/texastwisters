import clsx from "clsx";

import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";

export const ProgramPricing = ({ data }) => {
  return (
    <section className="relative w-full px-4 py-16 sm:py-24 sm:px-6 xl:px-8">
      {/* Container */}
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="lg:grid lg:grid-cols-2 md:gap-16 lg:gap-0">
          {/* Section content */}
          <div className="flex flex-col justify-center pr-10 xl:pr-0">
            <div>
              <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
                {data.tagline}
              </span>
            </div>
            <h2 className="mt-3.5 sm:mt-4 h2 max-w-xl text-purple-900">
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
                href="contact.html"
                className="mt-1.5 flex items-center py-0.5 px-0 w-[126px] max-w-full leading-6 text-left text-purple-600 no-underline bg-transparent border-b-2 border-purple-600 border-solid cursor-pointer hover:text-purple-500 transition duration-300 ease-in-out hover:border-purple-400 group"
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
          <div className="grid gap-8 mt-14 lg:mt-20 md:grid-cols-2 lg:gap-4 xl:gap-8">
            {[...Array(2)].map((e, i) => (
              <div
                key={`pricing-card-${i}`}
                className={clsx(
                  i == 0 ? "bg-purple-25" : "bg-yellow-200 lg:-translate-y-20",
                  "w-full px-6 py-10 rounded-xl lg:px-5 xl:px-10"
                )}
              >
                <div className="relative">
                  <div className="relative inline-block w-full text-left">
                    <h3 className="relative text-xl font-bold tracking-normal text-purple-900">
                      {data[`pricing${i + 1}`].name}
                    </h3>
                    <div className="mt-2">
                      <h2 className="text-purple-900 h1">
                        {data[`pricing${i + 1}`].price}
                      </h2>
                      <div className="mt-3">
                        <div className="inline-block h-6 px-3 text-sm font-medium leading-6 text-purple-700 align-top bg-purple-200 -rotate-1 rounded-xl">
                          {data[`pricing${i + 1}`].interval}
                        </div>
                      </div>
                      <p className="block w-full mt-6 font-medium text-purple-900">
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
                            className="w-5 h-5 text-purple-600"
                            stroke={2}
                          />

                          <span className="ml-2 text-purple-800">
                            {item.feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {/* CTA button */}
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
                          className="w-5 h-5 ml-3 group-hover:animate-horizontal-bounce"
                          stroke={2}
                        />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
