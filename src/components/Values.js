import Image from "next/image";

import checkmark from "/public/images/illustrations/checkmark.svg";
import image from "/public/images/stock/values.jpg";

const values = [
  {
    value: "Excellence and Innovation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt ut labore et",
  },
  {
    value: "Creativity",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt ut labore et",
  },
  {
    value: "Trustworthiness",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt ut labore et",
  },
  {
    value: "Nurturing Individuality",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt ut labore et",
  },
];

export const Values = () => {
  return (
    <section className="px-4 -mt-8 bg-white sm:py-4 sm:mt-0 sm:px-6 lg:px-8">
      {/* Container */}
      <div className="max-w-3xl mx-auto lg:max-w-screen-xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-16">
          {/* Section content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-purple-900 sm:text-center lg:text-left h2">
              Our core values and principles
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-lg leading-relaxed text-purple-800 sm:text-center lg:text-left md:mt-5 lg:mx-0">
              Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut
              libero malesuada feugiat. Donec rutrum congue leo eget malesuada.
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            </p>
            {/* Values */}
            <div className="grid max-w-4xl gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-1 sm:mx-auto lg:mx-0 lg:max-w-md">
              {values.map((item, index) => (
                <div key={`value-${index}`} className="flex">
                  <div className="w-14">
                    <Image src={checkmark} className="w-7 h-7" alt="" />
                  </div>
                  <div className="w-full">
                    <h5 className="flex items-center text-xl font-semibold text-purple-900">
                      {item.value}
                    </h5>
                    <p className="mt-1 text-base text-purple-800">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Section image */}
          <div className="w-full max-w-xl mx-auto mt-16 lg:mt-0 lg:max-w-none lg:mx-0">
            <div className="relative aspect-w-3 aspect-h-4">
              <Image
                className="absolute inset-0 object-cover w-full h-full rounded-3xl"
                fill
                src={image}
                sizes="(min-width: 1280px) 38rem, (min-width: 1024px) 50vw, (min-width: 576px) 36rem, 100vw"
                alt="Parent carrying child"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
