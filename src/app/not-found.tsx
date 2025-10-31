import { Button } from '@/components/Button'
import { CallToAction } from '@/components/CallToAction'
import { Eyebrow } from '@/components/Eyebrow'
import { Icon } from '@/components/Icon'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <section className="px-4 pt-16 bg-linear-to-b from-purple-25 via-purple-25 to-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl lg:grid lg:max-w-(--breakpoint-xl) lg:grid-cols-2 lg:gap-10 xl:gap-32">
          {/* Hero header */}
          <div className="relative py-16 lg:py-32">
            <Eyebrow text="404 Error" />

            <h1 className="max-w-md mt-4 text-purple-900 h1">
              We didn't stick the landing.
            </h1>
            <p className="max-w-lg mt-3 text-xl leading-relaxed text-purple-800">
              The page you&apos;re looking for doesn&apos;t exist. Head back to
              the homepage to see our class schedule or contact us for help.
            </p>

            <div className="flex flex-col items-center mt-8 overflow-hidden sm:flex-row">
              <Button
                href="/"
                variant="primary"
                size="lg"
                className="px-10 py-4 text-xl"
              >
                <span className="inline-flex items-center">
                  <Icon
                    icon="arrowNarrowLeft"
                    className="w-6 h-6 mr-3 group-hover:animate-horizontal-bounce-reverse"
                    stroke={2}
                  />
                </span>
                Go back home
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="mt-6 px-10 py-4 text-xl sm:mt-0 sm:ml-6"
              >
                Contact us
              </Button>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative hidden sm:flex items-center justify-center py-8 lg:py-0">
            {/* Background decorative elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Large background blob */}
              <div className="w-72 h-72 bg-linear-to-br from-yellow-100 to-yellow-200 rounded-full opacity-30 lg:w-80 lg:h-80" />

              {/* Secondary blob */}
              <div className="absolute w-48 h-48 bg-linear-to-br from-purple-100 to-purple-200 rounded-full opacity-40 -translate-x-8 translate-y-4 lg:w-56 lg:h-56" />
            </div>

            {/* Main illustration */}
            <div className="relative z-10">
              <Image
                src="/images/illustrations/question-mark.svg"
                alt="Question mark illustration for 404 page"
                width={200}
                height={280}
                className="w-40 h-auto drop-shadow-lg lg:w-48 xl:w-56"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  )
}
