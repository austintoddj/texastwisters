import dotsChaos from '@/images/illustrations/dots-chaos.svg'
import dotsPurpleMess from '@/images/illustrations/dots-purple-mess.svg'
import dotsStrip from '@/images/illustrations/dots-strip.svg'
import { marked } from 'marked'
import Image from 'next/image'

export const ProgramDescription = ({ data }) => {
  return (
    <section className="relative overflow-hidden">
      {/* Purple background to fill in right gap */}
      <div className="absolute inset-y-0 right-0 ml-auto w-full max-w-(--breakpoint-xl) rounded-l-5xl bg-purple-600" />
      {/* Background dots decorations */}
      <Image
        src={dotsChaos}
        className="absolute bottom-0 right-0 z-10 hidden h-auto w-80 transform 2xl:block"
        alt=""
      />
      <Image
        src={dotsStrip}
        className="absolute right-20 top-1 z-10 hidden h-auto w-36 transform 2xl:block"
        alt=""
      />
      {/* Main Section */}
      <div className="relative w-full bg-purple-600 px-4 py-16 sm:px-6 sm:py-24 lg:py-0 lg:pr-0 2xl:mx-auto 2xl:max-w-(--breakpoint-xl) 2xl:rounded-l-5xl">
        <div className="relative grid gap-12 lg:grid-cols-2 lg:pr-10 2xl:gap-4 2xl:pr-0">
          <div className="relative order-2 mx-auto grid w-full max-w-2xl grid-cols-2 gap-3 sm:gap-6 lg:order-1 lg:max-w-none lg:py-32">
            <Image
              src={dotsPurpleMess}
              className="absolute -right-16 top-12 hidden transform lg:block 2xl:right-0 "
              alt=""
            />
            <div className="aspect-h-4 aspect-w-3 relative col-span-2 transform 2xl:-translate-x-16">
              <Image
                src={data.portraitImage}
                fill
                className="absolute inset-0 h-full w-full rounded-3xl object-cover 2xl:rounded-4xl"
                alt="Program description 01"
                sizes="(min-width: 1536px) 38.75rem, (min-width: 1024px) calc(50vw - 3rem), (min-width: 640px) 42rem, calc(100vw - 2rem)"
              />
            </div>
            <div className="transform 2xl:-translate-x-16">
              <div className="aspect-h-1 aspect-w-1 relative">
                <Image
                  src={data.squareImage1}
                  fill
                  className="absolute inset-0 h-full w-full rounded-3xl object-cover 2xl:rounded-4xl"
                  alt="Program description 02"
                  sizes="(min-width: 1536px) 18.625rem, (min-width: 1024px) 25vw, (min-width: 640px) 20.25rem, calc(100vw - 2rem)"
                />
              </div>
            </div>
            <div className="transform 2xl:-translate-x-16">
              <div className="aspect-h-1 aspect-w-1 relative">
                <Image
                  src={data.squareImage2}
                  fill
                  className="absolute inset-0 h-full w-full rounded-3xl object-cover 2xl:rounded-4xl"
                  alt="Program description 03"
                  sizes="(min-width: 1536px) 18.625rem, (min-width: 1024px) 25vw, (min-width: 640px) 20.25rem, calc(50vw - 1.75rem)"
                />
              </div>
            </div>
          </div>
          <div className="order-1 flex flex-col justify-center lg:order-2 lg:py-36">
            <div
              className="prose prose-lg prose-invert relative z-20 mx-auto sm:prose-xl"
              dangerouslySetInnerHTML={{
                __html: marked.parse(data.text)
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
