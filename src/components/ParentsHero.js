import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import dotsGrid from "/public/images/illustrations/dots-large-grid.svg";
import arrow from "/public/images/illustrations/arrow-right-over.svg";

const linkColors = [
  "bg-purple-50",
  "bg-yellow-200",
  "bg-rose-50",
  "bg-teal-50",
  "bg-blue-50",
];

const links = [
  {
    label: "Community",
    href: "#0",
    description: "Join the parent-teacher group chat",
    icon: "messages",
  },
  {
    label: "Child Care Checklist",
    href: "#0",
    description: "Confidently choose the best program for your child",
    icon: "listCheck",
  },
  {
    label: "Meal Program",
    href: "#0",
    description: "Learn about our healthy food program",
    icon: "meat",
  },
  {
    label: "Covid Response",
    href: "#0",
    description: "Learn what we're doing to keep your child safe",
    icon: "virus",
  },
  {
    label: "School Gallery",
    href: "/gallery",
    description: "View our school gallery",
    icon: "photo",
  },
];

export const ParentsHero = () => {
  return (
    <section className="relative px-4 py-16 overflow-hidden lg:py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-purple-25 to-white">
      {/* Background decorations */}
      <Image
        src={dotsGrid}
        alt=""
        className="absolute right-0 h-auto transform opacity-25 w-72 lg:opacity-40 top-12"
        priority
      />
      <Image
        src={dotsGrid}
        alt=""
        className="absolute h-auto transform opacity-40 -left-36 bottom-36 w-72"
        priority
      />
      {/* Container */}
      <div className="max-w-xl mx-auto lg:max-w-screen-xl lg:grid lg:grid-cols-12 lg:gap-8">
        {/* Section header text */}
        <div className="flex flex-col justify-center lg:col-span-5">
          <div>
            <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
              Now enrolling for preschool
            </span>
          </div>
          <div className="relative">
            <h1 className="max-w-xl mt-4 text-purple-900 sm:mt-5 h1 lg:max-w-none">
              Stay in the loop
            </h1>
            {/* Arrow to links */}
            <Image
              src={arrow}
              className="absolute hidden transform -top-3 xl:block md:-right-8 w-14 md:w-32 rotate-12"
              alt=""
            />
          </div>
          <p className="max-w-2xl mt-3 text-xl leading-loose text-purple-800 sm:mt-4">
            Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum
            porta. Praesent sapien massa, convallis a pellentesque nec, egestas
            non nisi.
          </p>
          {/* Enroll CTA*/}
          <div className="mt-10 font-semibold lg:mt-12">
            <p className="text-purple-800">Not enrolled in our school?</p>
            <Button href="#0" size="sm" className="mt-2 sm:mt-3">
              Enroll today
              <Icon
                icon="arrowNarrowRight"
                className="w-6 h-6 ml-3 group-hover:animate-horizontal-bounce"
              />
            </Button>
          </div>
        </div>
        {/* Important parent links container */}
        <div className="relative mt-12 sm:mt-16 lg:mt-0 xl:pl-12 lg:col-span-7">
          {/* Important links */}
          <div className="relative w-full mx-auto sm:grid sm:gap-6 md:max-w-3xl lg:gap-5 lg:max-w-lg sm:grid-cols-4 lg:grid-cols-2 auto-rows-fr">
            {links.slice(0, 5).map((link, index) => (
              <Link
                href={link.href}
                key={`parent-link-${index}`}
                className={clsx(
                  "flex flex-col justify-center w-full p-8 duration-300 ease-in-out transform shadow-lg sm:col-span-2 lg:col-span-1 rounded-2xl hover:scale-105 group",
                  index > 0 && "mt-6 sm:mt-0",
                  index % 2 == 1 && "lg:translate-y-28",
                  index == 4 && "sm:col-start-2",
                  linkColors[index % 5]
                )}
              >
                {/* Link description */}
                <div className="flex-1">
                  <Icon
                    icon={link.icon}
                    className="w-10 h-10 text-purple-700"
                  />

                  <p className="mt-4 text-xl font-semibold text-purple-900">
                    {link.label}
                  </p>
                  <p className="mt-2 text-sm text-purple-800">
                    {link.description}
                  </p>
                </div>
                <div className="flex justify-end w-full mt-6">
                  <Icon
                    icon="chevronsRight"
                    className="w-6 h-6 text-purple-500 duration-300 ease-in-out group-hover:animate-horizontal-bounce hover:text-purple-600"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
