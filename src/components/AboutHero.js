import Image from "next/image";
import { Fragment } from "react";

import image1 from "/public/images/stock/school-grid-01.jpg";
import image2 from "/public/images/stock/school-grid-02.jpg";
import image3 from "/public/images/stock/school-grid-03.jpg";
import image4 from "/public/images/stock/school-grid-04.jpg";
import image5 from "/public/images/stock/school-grid-05.jpg";

const images = [
  { src: image1, alt: "Child laughing with teacher" },
  { src: image2, alt: "Teacher portrait" },
  { src: image3, alt: "Teacher reading to students" },
  { src: image4, alt: "Child writing on board with teacher" },
  { src: image5, alt: "Classroom" },
];

export function AboutHero() {
  return (
    <section className="px-4 pt-16 sm:px-6 lg:px-8 bg-purple-25">
      {/* Container */}
      <div className="max-w-screen-xl mx-auto">
        {/* Page header */}
        <div className="relative">
          <h2 className="max-w-3xl mx-auto text-center text-purple-900 h1">
            Why Bright
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-xl leading-relaxed text-center text-purple-800 sm:mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean
            et tortor at risus viverra adipiscing at in.
          </p>
        </div>
        {/* School images grid */}
        <div className="grid grid-flow-row-dense grid-cols-2 gap-2 sm:grid-cols-3 mt-14 sm:mt-16 lg:mt-24 sm:gap-3 md:gap-4 lg:gap-6">
          {images.map((image, index) => (
            <Fragment key={`gallery-image-${index}`}>
              {index % 5 == 1 && (
                <Image
                  className="object-cover object-top w-full col-span-2 rounded-2xl lg:h-80 h-30vw"
                  priority={true}
                  alt={image.alt}
                  src={image.src}
                  sizes="(min-width: 1280px) 52.875rem, (min-width: 640px) 66vw, 100vw"
                />
              )}

              {index % 5 != 1 && (
                <Image
                  className="object-cover w-full rounded-2xl lg:h-80 h-30vw"
                  alt={image.alt}
                  src={image.src}
                  sizes="(min-width: 1280px) 25.75rem, (min-width: 640px) 33vw, 50vw"
                />
              )}
            </Fragment>
          ))}
        </div>
        {/* About school */}
        <div className="mx-auto prose prose-lg mt-14 sm:mt-16 lg:mt-24 sm:prose-xl">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
            pretium fusce id velit ut. Id porta nibh venenatis cras sed felis
            eget velit. Ut morbi tincidunt augue interdum velit. Ipsum faucibus
            vitae aliquet nec ullamcorper sit amet. Viverra orci sagittis eu
            volutpat odio facilisis mauris. Diam quis enim lobortis scelerisque
            fermentum. Viverra mauris in aliquam sem fringilla.
          </p>
          <p>
            Elementum nisi quis eleifend quam adipiscing vitae proin sagittis
            nisl. Viverra vitae congue eu consequat ac felis donec et odio.
            Euismod nisi porta lorem mollis aliquam ut porttitor. Sed nisi lacus
            sed viverra tellus. Augue lacus viverra vitae congue eu consequat ac
            felis donec. Elementum pulvinar etiam non quam lacus. Ut venenatis
            tellus in metus vulputate. Ultrices dui sapien eget mi proin sed
            libero enim. Id velit ut tortor pretium viverra suspendisse.
          </p>
        </div>
      </div>
    </section>
  );
}
