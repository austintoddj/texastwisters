import clsx from 'clsx'

import { Icon } from '@/components/Icon'

const InfoCard = ({ icon, title, gradientColors, text }) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center rounded-2xl px-4 py-6 sm:p-8 sm:py-10',
        gradientColors.bgColor
      )}
    >
      <span
        className={clsx(
          'flex h-14 w-14 items-center justify-center rounded-2xl shadow-md',
          gradientColors.iconBgColor
        )}
      >
        <Icon icon={icon} className="h-8 w-8 text-purple-700" />
      </span>
      <h4 className="mt-4 text-center text-xl font-semibold text-purple-900">
        {title}
      </h4>
      <div
        className={clsx(
          'my-2 h-1.5 w-8 rounded-2xl bg-gradient-to-r',
          gradientColors.startColor,
          gradientColors.endColor
        )}
      />
      <p className="text-center text-lg text-purple-800">{text}</p>
    </div>
  )
}

export const ProgramInformation = ({ data }) => {
  return (
    <section className="relative w-full px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      {/* Container */}
      <div className="mx-auto max-w-xl lg:max-w-screen-xl">
        {/* Section header text */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-32">
          <div className="flex items-center">
            <h2 className="h2 max-w-4xl text-purple-900">{data.headline}</h2>
          </div>
          <div className="mt-6 flex items-center lg:mt-0">
            <p className="text-xl leading-relaxed text-purple-800">
              {data.text}
            </p>
          </div>
        </div>
        {/* Class info */}
        <div className="mt-12 grid gap-8 sm:mt-14 sm:max-w-none sm:grid-cols-2 sm:gap-6 lg:mt-24 lg:grid-cols-4 xl:gap-12">
          <InfoCard
            icon="moodKid"
            title="Ages"
            gradientColors={{
              bgColor: 'bg-yellow-200',
              iconBgColor: 'bg-yellow-400',
              startColor: 'from-yellow-400',
              endColor: 'to-yellow-500'
            }}
            text={data.ages}
          />

          <InfoCard
            icon="calendar"
            title="Dates"
            gradientColors={{
              bgColor: 'bg-purple-50',
              iconBgColor: 'bg-purple-200',
              startColor: 'from-purple-200',
              endColor: 'to-purple-300'
            }}
            text={data.dates}
          />

          <InfoCard
            icon="clock"
            title="Schedule"
            gradientColors={{
              bgColor: 'bg-rose-50',
              iconBgColor: 'bg-rose-200',
              startColor: 'from-rose-100',
              endColor: 'to-rose-300'
            }}
            text={data.schedule}
          />

          <InfoCard
            icon="users"
            title="Class sizes"
            gradientColors={{
              bgColor: 'bg-blue-50',
              iconBgColor: 'bg-blue-200',
              startColor: 'from-blue-100',
              endColor: 'to-blue-300'
            }}
            text={data.classSize}
          />
        </div>
      </div>
    </section>
  )
}
