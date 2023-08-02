import Image from "next/image";

import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";

export const ProgramHero = ({ hero }) => {
  return (
    <section className="relative px-4 pt-16 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-25 to-purple-50">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="relative">
          <div className="flex justify-center">
            <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
              {hero.tagline}
            </span>
          </div>
          <h2 className="max-w-3xl mx-auto mt-4 text-center text-purple-900 h1">
            {hero.headline}
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-xl leading-relaxed text-center text-purple-800 sm:mt-5">
            {hero.text}
          </p>
          {/* CTA button */}
          <div className="flex justify-center mt-8">
            <Button href={hero.action.href}>
              {hero.action.label}
              {hero.action.icon && (
                <Icon
                  icon="arrowNarrowRight"
                  className="w-6 h-6 ml-3 group-hover:animate-horizontal-bounce"
                  stroke={2}
                />
              )}
            </Button>
          </div>
        </div>
        {/* Hero image */}
        <div className="relative z-10 mt-14 sm:mt-16">
          <div className="relative aspect-w-3 aspect-h-2 sm:aspect-w-16 sm:aspect-h-9">
            <Image
              className="absolute inset-0 object-cover w-full h-full shadow-xl rounded-3xl"
              src={hero.image.src}
              fill
              priority
              sizes="(min-width: 1280px) 80rem, (min-width: 1024px) calc(100vw - 4rem), (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2rem)"
              alt={hero.headline}
            />
          </div>
        </div>
      </div>
      {/* Background overlay effect */}
      <div className="absolute inset-x-0 bottom-0 top-auto z-0 hidden h-64 bg-white sm:block" />
    </section>
  );
};
