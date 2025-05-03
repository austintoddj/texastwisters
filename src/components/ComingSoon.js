import { Button } from '@/components/Button'
import { Eyebrow } from '@/components/Eyebrow'

export const ComingSoon = ({ data }) => {
  return (
    <section className="relative] px-4 py-16 bg-linear-to-b from-purple-25 via-yellow-200 to-white sm:px-6 lg:px-8 sm:py-24 lg:py-32">
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
          {/* Email form */}
          <form
            className="flex w-full max-w-lg mx-auto mt-10 gap-x-3"
            action={data.formUrl}
          >
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder={data.formInputPlaceholder}
              autoComplete="email"
              className="min-w-0 flex-auto relative z-10 h-13 rounded-full border border-purple-900/10 py-4 px-5 text-[14px] text-sm font-medium text-purple-700 placeholder-purple-700/70 outline-hidden duration-300 ease-in-out focus:border-purple-600/20 focus:outline-hidden focus:ring-purple-600/20 bg-white/60 backdrop-blur-sm hover:bg-white/90 focus:bg-white/90"
            />

            <Button
              type="submit"
              variant="accent"
              size="sm"
              className="flex-none"
            >
              {data.buttonLabel}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
