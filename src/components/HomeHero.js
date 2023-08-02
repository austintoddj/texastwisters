"use client";

import Image from "next/image";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";

import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import heroImage from "/public/images/stock/hero-home.png";

const ratings = [
  { label: "Great Schools", stars: 5 },
  { label: "Private School Review", stars: 5 },
  { label: "Google Reviews", stars: 5 },
];

export const HomeHero = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <section className="px-4 pt-16 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-25 to-purple-50">
      {/* Hero container */}
      <div
        className="max-w-screen-xl mx-auto lg:grid lg:grid-cols-12 lg:gap-8"
        x-data="{ modalOpen: false }"
      >
        {/* Hero text content */}
        <div className="flex flex-col items-center justify-center lg:items-start lg:col-span-6">
          <div>
            <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
              Welcome to Bright School
            </span>
          </div>
          <h1 className="max-w-xl mt-4 text-center text-purple-900 sm:mt-5 lg:text-left h1 lg:max-w-none">
            Creating a brighter future for your child
          </h1>
          <p className="max-w-2xl mt-3 text-xl leading-loose text-center text-purple-800 lg:text-left">
            At Bright School, we believe every child deserves a brighter future.
            and strive to give every student a personalized education that will
            promote their individual strengths and creativity.
          </p>
          {/* Hero buttons */}
          <div className="flex flex-col items-center mt-8 overflow-hidden sm:flex-row">
            <Button href="#0">
              Enroll today
              <Icon
                icon="arrowNarrowRight"
                className="w-6 h-6 ml-3 group-hover:animate-horizontal-bounce"
                stroke={2}
              />
            </Button>
            <Button
              variant="secondary"
              className="mt-6 sm:mt-0 sm:ml-6"
              onClick={() => openModal()}
            >
              <Icon
                icon="playFilled"
                className="mr-3 text-purple-600 duration-300 ease-in-out w-7 h-7 group-hover:text-purple-50"
              />
              Watch video
            </Button>
          </div>
          {/* Social proof */}
          <p className="hidden text-sm font-medium tracking-wider text-purple-900 uppercase sm:block lg:hidden xl:block mt-14">
            Rated 5 stars by over{" "}
            <span className="font-semibold text-purple-600">100 parents</span>
          </p>
          <div className="flex-col hidden mt-8 overflow-hidden divide-y sm:flex sm:mt-5 sm:flex-row sm:divide-x sm:divide-y-0 lg:hidden xl:flex divide-purple-400/20">
            {ratings.map((rating, index) => (
              <div
                key={`primary-${rating.label}`}
                className={clsx(
                  index == 0 && "pb-5 sm:pb-0 sm:pr-10",
                  index == 1 && "py-5 sm:py-0 sm:px-10",
                  index == 2 && "pt-5 sm:pt-0 sm:pl-10",
                  "flex flex-col items-center"
                )}
              >
                <div className="flex justify-center w-full space-x-1">
                  {[...Array(rating.stars)].map((e, i) => (
                    <Icon
                      icon="starFilled"
                      className="w-4 h-4 text-yellow-500"
                      key={`primary-${rating.label}-star-${i}`}
                    />
                  ))}
                </div>
                <p className="mt-2.5 text-xs font-bold text-purple-700 uppercase tracking-wide">
                  {rating.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Hero image & video */}
        <div className="flex flex-col justify-center max-w-3xl mx-auto mt-16 lg:mt-0 lg:max-w-none lg:col-span-6">
          <div className="relative">
            <Image
              src={heroImage}
              priority
              className="w-full h-auto"
              alt="Bright Photo Collage"
              sizes="(min-width: 1280px) 39rem, (min-width: 1024px) 50vw, (min-width: 768px) 48rem, 100vw"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="absolute inline-flex w-20 h-20 bg-purple-400 rounded-full opacity-60 animate-ping" />
              {/* Video modal button */}
              <button
                className="relative z-10 flex items-center justify-center w-20 h-20 duration-300 ease-in-out rounded-full outline-none bg-purple-600/90 group hover:bg-purple-600/95"
                onClick={() => openModal()}
              >
                <Icon
                  icon="playFilled"
                  className="w-12 h-12 duration-300 ease-in-out text-white/90 group-hover:text-white/95"
                />
              </button>
            </div>
          </div>
        </div>
        {/* Video modal*/}
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 w-full h-full px-4 overflow-hidden transition duration-150 ease-linear"
            aria-modal="true"
            onClose={closeModal}
          >
            {/* Modal overlay */}
            <Transition.Child
              as={Fragment}
              enter="transition ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-50"
              leave="transition ease-in duration-200"
              leaveFrom="opacity-50"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 w-screen h-screen transition-opacity duration-300 ease-linear bg-black opacity-50" />
            </Transition.Child>
            <div className="flex items-center justify-center w-auto min-h-screen mx-auto">
              {/* Modal Content */}
              <Transition.Child
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 scale-95 translate-y-24"
                enterTo="opacity-100 scale-100 translate-y-0"
                leave="transition ease-out duration-200"
                leaveFrom="opacity-100 scale-100 translate-y-0"
                leaveTo="opacity-0 scale-95 translate-y-24"
              >
                <Dialog.Panel className="w-full max-w-6xl max-h-full overflow-auto bg-white rounded-2xl">
                  <div className="relative aspect-w-16 aspect-h-9">
                    <iframe
                      className="absolute w-full h-full"
                      src="https://www.youtube.com/embed/2ly2il11JaU"
                      title="Video"
                      webkitallowfullscreen
                      mozallowfullscreen
                      allowFullScreen
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
      {/* Visible only on sm screens ( <= 640px ) and lg screens ( >= 1024px	< 1280px ) */}
      <div className="flex flex-col items-center mt-20 lg:mt-24 sm:hidden lg:flex xl:hidden">
        {/* Social proof */}
        <p className="text-sm font-semibold tracking-wider text-purple-900 uppercase">
          Rated 5 stars by over{" "}
          <span className="font-semibold text-purple-600">100 parents</span>
        </p>
        <div className="flex flex-col mt-8 overflow-hidden divide-y sm:divide-y-0 sm:divide-x sm:flex-row divide-purple-400/20">
          {ratings.map((rating, index) => (
            <div
              key={`secondary-${rating.label}`}
              className={clsx(
                index == 0 && "pb-5 sm:pb-0 sm:pr-10",
                index == 1 && "py-5 sm:py-0 sm:px-10",
                index == 2 && "pt-5 sm:pt-0 sm:pl-10",
                "flex flex-col items-center"
              )}
            >
              <div className="flex justify-center w-full space-x-1">
                {[...Array(rating.stars)].map((e, i) => (
                  <Icon
                    icon="starFilled"
                    className="w-4.5 h-4.5 lg:w-5 lg:h-5 text-yellow-500"
                    key={`secondary-${rating.label}-star-${i}`}
                  />
                ))}
              </div>

              <p className="mt-2.5 text-xs font-bold text-purple-700 uppercase tracking-wide">
                {rating.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
