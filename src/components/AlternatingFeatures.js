import Image from "next/image";
import clsx from "clsx";

import highlight from "/public/images/illustrations/underline-simple-light-purple.svg";
import lightYellowBlob from "/public/images/illustrations/blob-light-yellow.svg";
import lightPurpleBlob from "/public/images/illustrations/blob-light-purple.svg";
import lightRoseBlob from "/public/images/illustrations/blob-light-rose.svg";
import dotsStrip from "/public/images/illustrations/dots-large-strip.svg";
import dots from "/public/images/illustrations/dots.svg";
import blockImage1 from "/public/images/stock/about-01.jpg";
import blockImage2 from "/public/images/stock/about-02.jpg";
import blockImage3 from "/public/images/stock/about-03.jpg";

const bgBlobs = [lightYellowBlob, lightPurpleBlob, lightRoseBlob];
const blocks = [
  {
    tagline: "Smart. Kind. Global.",
    headline: "Developing young, caring and responsible individuals",
    text: "Lorem ipsum dolor, sit amet consectetur elit do eius mod tempor labore sit amet. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Half galão extraction extra luwak luwak at con cappuccino milk that cortado organic est sit.",
    image: { src: blockImage1, alt: "Child covered in paint" },
  },
  {
    tagline: "Pod environment",
    headline: "Getting the attention they deserve",
    text: "Lorem ipsum dolor, sit amet consectetur elit do eius mod tempor labore sit amet. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Half galão extraction extra luwak luwak at con cappuccino milk that cortado organic est sit.",
    image: { src: blockImage2, alt: "Child painting" },
  },
  {
    tagline: "Personalized learning.",
    headline: "Every child has their own personalized education program",
    text: "Lorem ipsum dolor, sit amet consectetur elit do eius mod tempor labore sit amet. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Half galão extraction extra luwak luwak at con cappuccino milk that cortado organic est sit.",
    image: { src: blockImage3, alt: "Child working on workbook" },
  },
];

export const AlternatingFeatures = () => {
  return (
    <section className="px-4 overflow-hidden bg-white pb-28 sm:pb-36 sm:px-6 lg:px-8">
      {/* Container */}
      <div className="max-w-screen-xl mx-auto">
        {/* Section header */}
        <div className="px-4 text-center sm:px-6 lg:px-8">
          <h3 className="text-purple-900 h2">
            <span className="block">A place for every child to</span>
            {/* Underlined text */}
            <span className="relative block">
              <span className="relative">
                <Image
                  className="absolute inset-0 transform translate-y-9 sm:translate-y-10 xl:translate-y-12"
                  src={highlight}
                  alt=""
                />
                <span className="relative">learn and grow</span>
              </span>
            </span>
          </h3>
        </div>
        {/* Block 1 */}
        {blocks.map((block, index) => (
          <div
            key={`about-features-${index}`}
            className="grid max-w-xl mx-auto mt-20 lg:max-w-none sm:mt-24 lg:mt-44 lg:grid-cols-12 gap-14 sm:gap-16 lg:gap-8"
          >
            {/* Block text content */}
            <div
              className={clsx(
                "relative z-10 flex flex-col justify-center order-2 lg:col-span-6 lg:text-left",
                index % 2 == 0 && "lg:order-1"
              )}
            >
              <div>
                <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
                  {block.tagline}
                </span>
              </div>
              <div>
                <h1 className="mt-3.5 font-bold text-purple-900 h3">
                  {block.headline}
                </h1>
                <p className="max-w-xl mt-3 text-lg text-purple-800 sm:leading-relaxed sm:text-xl">
                  {block.text}
                </p>
              </div>
            </div>
            {/* Block graphics */}
            <div
              className={clsx(
                "relative order-1 w-full max-w-xl mx-auto lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center",
                index % 2 == 0 && "lg:order-2"
              )}
            >
              {/* Blob background decoration on large screens */}
              <div className="hidden lg:block">
                <Image
                  src={bgBlobs[index % 3]}
                  className="absolute inset-0 w-full h-full transform lg:scale-135"
                  alt=""
                />
              </div>
              {/* Grid background decoration on small screens */}
              <Image
                src={dotsStrip}
                className="absolute top-0 origin-top transform -translate-x-1/2 -translate-y-8 left-1/2 lg:hidden sm:scale-100 scale-80"
                alt=""
              />
              <div
                className={clsx(
                  "relative w-full mx-auto shadow-lg rounded-3xl lg:max-w-lg",
                  index % 2 == 0 ? "lg:mr-0 lg:ml-auto" : "lg:mx-0"
                )}
              >
                <div className="relative block w-full">
                  {/* Corner dots decoration */}
                  <Image
                    className={clsx(
                      "absolute z-10 hidden w-40 transform lg:block -top-20 xl:w-48 xl:-top-20",
                      index % 2 == 0 ? "-left-20" : "-right-20"
                    )}
                    src={dots}
                    alt=""
                  />
                  {/* Block image */}
                  <figure className="relative aspect-[12/10] md:order-1">
                    <Image
                      src={block.image.src}
                      className="absolute inset-0 object-cover object-center w-full h-full shadow-xl rounded-3xl"
                      fill
                      sizes="(min-width: 1024px) 32rem, (min-width: 576px) 36rem, 100vw"
                      alt={block.image.alt}
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
