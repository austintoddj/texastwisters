import Image from "next/image";
import clsx from "clsx";

import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import checkmark from "/public/images/illustrations/checkmark.svg";
import portraitImage1 from "/public/images/stock/home-blocks-01.jpg";
import squareImage1 from "/public/images/stock/home-blocks-02.jpg";
import portraitImage2 from "/public/images/stock/home-blocks-03.jpg";
import squareImage2 from "/public/images/stock/home-blocks-04.jpg";

const features = [
  "Personalized",
  "Small classes",
  "Montessori",
  "STEM focused",
  "Hands-on approach",
  "Diverse teachers & students",
  "Experienced staff",
];

const blocks = [
  {
    tagline: "An eclectic approach to education",
    headline: "Our goal is to ensure your little one's success in life",
    text: "Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
    action: { label: "Learn more", href: "/about", icon: true },
    portraitImage: { src: portraitImage1, alt: "Kid stacking blocks" },
    squareImage: { src: squareImage1, alt: "Children writing on workbook" },
  },
  {
    tagline: "A second home for your child",
    headline: "We provide an environment that enables students to thrive",
    text: "Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
    action: { label: "Learn more", href: "/about", icon: true },
    portraitImage: { src: portraitImage2, alt: "Child covered in paint" },
    squareImage: { src: squareImage2, alt: "Children eating" },
  },
];

export const HomeFeatureBlocks = () => {
  return (
    <section className="px-4 pb-16 overflow-hidden bg-yellow-100 sm:pb-24 sm:px-6 lg:px-8">
      {/* Container */}
      <div className="max-w-screen-xl mx-auto">
        {/* Centered content with feature list */}
        <div className="relative">
          {/* Block title and subtext */}
          <h2 className="max-w-4xl mx-auto text-center text-purple-900 h2">
            Providing the best possible start to your children's education
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl leading-relaxed text-center text-purple-800">
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
            sem. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
          </p>
          {/* Feature list */}
          <div className="max-w-3xl mx-auto mt-12">
            <ul className="flex flex-wrap items-center justify-center -mx-3 -my-2 text-lg text-purple-800">
              {features.map((feature, index) => (
                <li
                  key={`home-feature-${index}`}
                  className="flex items-center mx-3 my-2"
                >
                  <Image
                    className="flex-shrink-0 mr-3 w-7 h-7"
                    src={checkmark}
                    alt=""
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {blocks.map((block, index) => (
          <div
            key={`home-block-${index}`}
            className={clsx(
              "max-w-xl mx-auto mt-16 lg:max-w-none lg:grid lg:grid-cols-12 lg:gap-x-14 xl:gap-x-20 2xl:gap-x-24",
              index % 2 == 0
                ? "sm:mt-20 lg:mt-24"
                : "sm:mt-44 lg:mt-56 xl:mt-60 2xl:mt-64"
            )}
          >
            {/* Block images*/}
            <div
              className={clsx(
                "relative lg:col-span-6",
                index % 2 == 1 && "lg:order-2"
              )}
            >
              <div
                className={clsx(
                  "relative",
                  index % 2 == 0
                    ? "sm:pl-36 lg:pl-20 xl:pl-32"
                    : "sm:pr-36 lg:pr-20 xl:pr-32"
                )}
              >
                <div className="relative aspect-w-3 aspect-h-4 rounded-2xl">
                  <Image
                    className="absolute inset-0 object-cover rounded-2xl"
                    src={block.portraitImage.src}
                    fill
                    alt={block.portraitImage.alt}
                    sizes="(min-width: 1280px) 29.5rem, (min-width: 1024px) calc(50vw - 8.75rem), (min-width: 640px) 27rem, calc(100vw - 2rem)"
                  />
                </div>
                <div
                  className={clsx(
                    "absolute hidden sm:block sm:w-72 sm:h-72 lg:w-64 lg:h-64 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 rounded-3xl",
                    index % 2 == 0
                      ? "left-0 bottom-0 sm:translate-y-1/3"
                      : "right-0 top-0 sm:-translate-y-1/3"
                  )}
                >
                  <Image
                    className="absolute inset-0 object-cover w-full h-full rounded-3xl"
                    src={block.squareImage.src}
                    fill
                    alt={block.squareImage.alt}
                    sizes="(min-width: 1536px) 20rem, (min-width: 1280px) 18rem, (min-width: 1024px) 16rem, (min-width: 640px) 18rem"
                  />
                </div>
              </div>
            </div>
            {/* Block text content*/}
            <div
              className={clsx(
                "flex flex-col justify-center mt-16 lg:mt-0 lg:col-span-6",
                index % 2 == 0 ? "sm:mt-44" : "sm:mt-20 lg:order-1"
              )}
            >
              <div>
                <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
                  {block.tagline}
                </span>
              </div>
              <h3 className="mt-4 text-purple-900 sm:mt-5 h3">
                {block.headline}
              </h3>
              <p className="max-w-2xl mt-3 text-lg leading-loose text-purple-800">
                {block.text}
              </p>
              <div className="mt-6">
                <Button href={block.action.href} variant="accent" size="sm">
                  {block.action.label}
                  {block.action.icon && (
                    <Icon
                      icon="arrowNarrowRight"
                      className="w-6 h-6 ml-3 group-hover:animate-horizontal-bounce"
                      stroke={2}
                    />
                  )}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
