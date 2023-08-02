import Image from "next/image";
import { marked } from "marked";

import dotsChaos from "/public/images/illustrations/dots-chaos.svg";
import dotsStrip from "/public/images/illustrations/dots-strip.svg";
import dotsPurpleMess from "/public/images/illustrations/dots-purple-mess.svg";

export const ProgramDescription = ({ data }) => {
  return (
    <section className="relative overflow-hidden">
      {/* Purple background to fill in right gap */}
      <div className="absolute inset-y-0 right-0 w-full max-w-screen-xl ml-auto bg-purple-600 rounded-l-5xl" />
      {/* Background dots decorations */}
      <Image
        src={dotsChaos}
        className="absolute bottom-0 right-0 z-10 hidden h-auto transform 2xl:block w-80"
        alt=""
      />
      <Image
        src={dotsStrip}
        className="absolute z-10 hidden h-auto transform 2xl:block top-1 right-20 w-36"
        alt=""
      />
      {/* Main Section */}
      <div className="relative w-full px-4 py-16 bg-purple-600 2xl:max-w-screen-xl 2xl:mx-auto 2xl:rounded-l-5xl sm:px-6 lg:pr-0 sm:py-24 lg:py-0">
        <div className="relative grid gap-12 lg:grid-cols-2 2xl:gap-4 lg:pr-10 2xl:pr-0">
          <div className="relative grid order-2 w-full max-w-2xl grid-cols-2 gap-3 mx-auto lg:order-1 sm:gap-6 lg:py-32 lg:max-w-none">
            <Image
              src={dotsPurpleMess}
              className="absolute hidden transform lg:block top-12 -right-16 2xl:right-0 "
              alt=""
            />
            <div className="relative col-span-2 transform aspect-w-3 aspect-h-4 2xl:-translate-x-16">
              <Image
                src={data.portraitImage}
                fill
                className="absolute inset-0 object-cover w-full h-full rounded-3xl 2xl:rounded-4xl"
                alt="Program description 01"
                sizes="(min-width: 1536px) 38.75rem, (min-width: 1024px) calc(50vw - 3rem), (min-width: 640px) 42rem, calc(100vw - 2rem)"
              />
            </div>
            <div className="transform 2xl:-translate-x-16">
              <div className="relative aspect-w-1 aspect-h-1">
                <Image
                  src={data.squareImage1}
                  fill
                  className="absolute inset-0 object-cover w-full h-full rounded-3xl 2xl:rounded-4xl"
                  alt="Program description 02"
                  sizes="(min-width: 1536px) 18.625rem, (min-width: 1024px) 25vw, (min-width: 640px) 20.25rem, calc(100vw - 2rem)"
                />
              </div>
            </div>
            <div className="transform 2xl:-translate-x-16">
              <div className="relative aspect-w-1 aspect-h-1">
                <Image
                  src={data.squareImage2}
                  fill
                  className="absolute inset-0 object-cover w-full h-full rounded-3xl 2xl:rounded-4xl"
                  alt="Program description 03"
                  sizes="(min-width: 1536px) 18.625rem, (min-width: 1024px) 25vw, (min-width: 640px) 20.25rem, calc(50vw - 1.75rem)"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center order-1 lg:order-2 lg:py-36">
            <div
              className="relative z-20 mx-auto prose prose-lg prose-invert sm:prose-xl"
              dangerouslySetInnerHTML={{ __html: marked.parse(data.text) }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
