import Image from "next/image";
import clsx from "clsx";

import { getAllItems } from "@/lib/getItems";

const eventColors = [
  "bg-yellow-200",
  "bg-purple-25",
  "bg-rose-50",
  "bg-teal-50",
];

export const Events = () => {
  const events = getAllItems("events");

  return (
    <section className="relative w-full px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
      {/* Container */}
      <div className="max-w-2xl mx-auto lg:max-w-screen-xl">
        {/* Section header title and subtext  */}
        <div>
          <h2 className="text-purple-900 h2 lg:text-center">Upcoming events</h2>
          <p className="max-w-2xl mx-auto mt-3 text-xl leading-relaxed text-purple-800 lg:mt-4 lg:text-center">
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
            sem.
          </p>
        </div>
        {/* Events */}
        <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-6 xl:gap-8 sm:mt-16">
          {events.map((event, index) => (
            <div
              key={`event-${index}`}
              className={clsx(
                "grid w-full rounded-2xl sm:grid-cols-12",
                index > 0 && "mt-8 lg:mt-0",
                eventColors[index % 4]
              )}
            >
              {/* Event image */}
              <div
                className={clsx(
                  "relative h-48 rounded-t-2xl sm:h-full sm:col-span-4",
                  index % 2 == 0
                    ? "sm:rounded-tr-none sm:rounded-l-2xl"
                    : "sm:rounded-tl-none sm:rounded-r-2xl sm:order-2"
                )}
              >
                <Image
                  src={event.data.image}
                  className={clsx(
                    "absolute inset-0 object-cover object-center w-full h-full rounded-t-2xl",
                    index % 2 == 0
                      ? "sm:rounded-tr-none sm:rounded-l-2xl"
                      : "sm:rounded-tl-none sm:rounded-r-2xl"
                  )}
                  fill
                  alt={event.data.name}
                  sizes="(min-width: 1280px) 13rem, (min-width: 1024px) 16.67rem, (min-width: 640px) 14rem, calc(100vw - 2rem)"
                />
              </div>
              {/* Event info */}
              <div
                className={clsx(
                  "flex flex-col justify-center h-full px-6 py-8 sm:col-span-8 sm:py-10 sm:px-8 lg:px-6 xl:px-8",
                  index % 2 == 1 && "order-2 sm:order-1"
                )}
              >
                <div>
                  <div className="inline-flex items-center justify-center px-3.5 py-0.5 text-sm -rotate-1 bg-purple-200 text-purple-700 font-medium leading-6 align-top rounded-xl">
                    {event.data.dates}
                  </div>
                </div>
                <h4 className="mt-4 text-2xl font-bold text-purple-900 xl:text-3xl lg:text-2xl sm:text-3xl lg:leading-tight xl:leading-tight">
                  {event.data.name}
                </h4>
                <p className="mt-1 text-purple-800 lg:mt-2">
                  {event.data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
