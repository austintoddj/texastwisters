import clsx from "clsx";
import { Icon } from "@/components/Icon";

const InfoCard = ({ icon, title, gradientColors, text }) => {
  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center px-4 py-6 sm:p-8 sm:py-10 rounded-2xl",
        gradientColors.bgColor
      )}
    >
      <span
        className={clsx(
          "flex items-center justify-center shadow-md rounded-2xl w-14 h-14",
          gradientColors.iconBgColor
        )}
      >
        <Icon icon={icon} className="w-8 h-8 text-purple-700" />
      </span>
      <h4 className="mt-4 text-xl font-semibold text-center text-purple-900">
        {title}
      </h4>
      <div
        className={clsx(
          "w-8 h-1.5 my-2 rounded-2xl bg-gradient-to-r",
          gradientColors.startColor,
          gradientColors.endColor
        )}
      />
      <p className="text-lg text-center text-purple-800">{text}</p>
    </div>
  );
};

export const ProgramInformation = ({ data }) => {
  return (
    <section className="relative w-full px-4 py-16 sm:py-24 lg:py-32 sm:px-6 lg:px-8">
      {/* Container */}
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        {/* Section header text */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-32">
          <div className="flex items-center">
            <h2 className="max-w-4xl text-purple-900 h2">{data.headline}</h2>
          </div>
          <div className="flex items-center mt-6 lg:mt-0">
            <p className="text-xl leading-relaxed text-purple-800">
              {data.text}
            </p>
          </div>
        </div>
        {/* Class info */}
        <div className="grid gap-8 mt-12 sm:max-w-none sm:grid-cols-2 sm:mt-14 lg:mt-24 lg:grid-cols-4 sm:gap-6 xl:gap-12">
          <InfoCard
            icon="moodKid"
            title="Ages"
            gradientColors={{
              bgColor: "bg-yellow-200",
              iconBgColor: "bg-yellow-400",
              startColor: "from-yellow-400",
              endColor: "to-yellow-500",
            }}
            text={data.ages}
          />

          <InfoCard
            icon="calendar"
            title="Dates"
            gradientColors={{
              bgColor: "bg-purple-50",
              iconBgColor: "bg-purple-200",
              startColor: "from-purple-200",
              endColor: "to-purple-300",
            }}
            text={data.dates}
          />

          <InfoCard
            icon="clock"
            title="Schedule"
            gradientColors={{
              bgColor: "bg-rose-50",
              iconBgColor: "bg-rose-200",
              startColor: "from-rose-100",
              endColor: "to-rose-300",
            }}
            text={data.schedule}
          />

          <InfoCard
            icon="users"
            title="Class sizes"
            gradientColors={{
              bgColor: "bg-blue-50",
              iconBgColor: "bg-blue-200",
              startColor: "from-blue-100",
              endColor: "to-blue-300",
            }}
            text={data.classSize}
          />
        </div>
      </div>
    </section>
  );
};
