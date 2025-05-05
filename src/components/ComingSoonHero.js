import { Button } from '@/components/Button'
import { Eyebrow } from '@/components/Eyebrow'
import { Icon } from '@/components/Icon'
import Link from 'next/link'

export const ComingSoonHero = ({ data }) => {
  const hasSecondary = !!data.secondaryCta.href && !!data.secondaryCta.label
  const hasPreText = hasSecondary && !!data.secondaryCta.preText

  return (
    <section className="relative] px-4 py-16 bg-linear-to-b from-purple-25 via-yellow-200 to-white sm:px-6 lg:px-8 sm:py-24 lg:pt-32">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        {/* Header */}
        <div className="relative flex flex-col items-center">
          <Eyebrow text={data.eyebrow} />
          <h2 className="max-w-4xl mx-auto mt-4 text-center text-purple-900 h1">
            {data.headline}
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-xl leading-relaxed text-center text-purple-800 sm:mt-5">
            {data.text}
          </p>

          {/* CTA block */}
          <div className="flex flex-col items-center gap-4 mt-8 sm:flex-row">
            {/* Primary button */}
            <Button variant="accent" href={data.primaryCta.href}>
              {data.primaryCta.label}
            </Button>

            {/* Inline secondary button (only if no pre‑text) */}
            {hasSecondary && !hasPreText && (
              <Button variant="secondary" href={data.secondaryCta.href}>
                {data.secondaryCta.label}
              </Button>
            )}
          </div>

          {/* Pre‑text + linked label variant */}
          {hasSecondary && hasPreText && (
            <div className="flex items-center mt-6 space-x-4">
              <p className="text-base text-purple-800/90">
                {data.secondaryCta.preText}
              </p>
              <Link
                href={data.secondaryCta.href}
                className="flex items-center font-semibold text-purple-600 transition group hover:text-purple-500"
              >
                {data.secondaryCta.label}
                <Icon
                  icon="arrowNarrowRight"
                  stroke={2}
                  className="w-5 h-5 ml-2 group-hover:animate-horizontal-bounce"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
