import Image from "next/image";

import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import sunrise from "/public/images/illustrations/sunrise.svg";
import highlight from "/public/images/illustrations/underline-simple-light-purple.svg";

export const CallToAction = () => {
  return (
    <section className="py-24 bg-white sm:py-32">
      {/* Container */}
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Sunrise image */}
        <Image className="mx-auto w-72" src={sunrise} alt="" />
        {/* Header */}
        <h2 className="max-w-3xl mx-auto mt-6 text-center text-purple-900 h1">
          <span className="block">Give your kid a</span>
          {/* Underlined text */}
          <span className="relative block">
            <span className="relative">
              <Image
                className="absolute inset-0 transform translate-y-9 sm:translate-y-11 xl:translate-y-14"
                src={highlight}
                alt=""
              />
              <span className="relative">brighter future</span>
            </span>
          </span>
        </h2>
        {/* CTA button */}
        <div className="flex justify-center mt-12 xl:mt-14">
          <Button href="#0">
            Enroll today
            <Icon
              icon="arrowNarrowRight"
              className="w-6 h-6 ml-3 group-hover:animate-horizontal-bounce"
              stroke={2}
            />
          </Button>
        </div>
      </div>
    </section>
  );
};
