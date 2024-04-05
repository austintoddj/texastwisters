import checkmark from '/public/images/illustrations/checkmark.svg'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import Image from 'next/image'

const owners = {
  name: 'The Austin Family',
  image: '/images/staff/family.jpg'
}

export const StaffHiring = ({ jobs }) => {
  return (
    <section className="relative w-full px-4 py-16 sm:px-6 sm:py-24 xl:px-8">
      {/* Container */}
      <div className="mx-auto max-w-xl lg:max-w-screen-xl" id="hiring">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12 xl:grid-cols-11 xl:gap-24">
          {/* Text content */}
          <div className="flex flex-col justify-center lg:order-2 lg:col-span-1 xl:col-span-6">
            <div>
              <span className="inline-block rounded-full bg-purple-200 px-4 py-2 font-medium text-purple-700 shadow-md">
                Guess what, we're hiring!
              </span>
            </div>
            <h2 className="h2 mt-4 text-purple-900 sm:mt-5">
              Meet the owners of Texas Twisters
            </h2>
            <p className="mt-4 max-w-xl text-xl leading-relaxed text-purple-800 md:mt-5">
              After decades of involvement in the gymnastics community, our
              family is excited to share our passion for the sport with the
              community of Georgetown.
            </p>

            {/* Owners portrait section (Small screens) */}
            <div className="relative mt-16 max-w-4xl sm:mt-14 lg:hidden">
              <div className="aspect-h-4 aspect-w-3 relative rounded-3xl bg-yellow-50 sm:aspect-h-4 sm:aspect-w-3">
                <Image
                  className="absolute inset-0 h-full w-full rounded-3xl object-cover shadow-md"
                  fill
                  src={owners.image}
                  sizes="(min-width: 1280px) 15.6rem, (min-width: 1024px) 20.8vw, (min-width: 640px) 17rem, 100vw"
                  alt=""
                />
              </div>
              <div className="mt-3.5 pl-2 text-lg sm:pl-0 sm:text-center">
                <p className="font-semibold tracking-wide text-purple-800">
                  {owners.name}
                </p>
              </div>
            </div>

            {/* Current job postings box */}
            <div className="relative mt-16 max-w-4xl rounded-xl bg-yellow-100 sm:mt-14">
              <span className="absolute -top-7 left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-purple-600 shadow-md sm:left-10">
                <Icon icon="certificate" className="h-8 w-8 text-purple-50" />
              </span>
              <div className="mt-2 px-4 py-10 sm:px-10 sm:py-12">
                <p className="text-lg font-semibold text-purple-900 sm:text-xl">
                  Our team is growing! If you're looking for a new and exciting
                  opportunity, check out our current job openings:
                </p>
                {/* Job postings list */}
                <ul className="mt-5 space-y-5 text-lg text-purple-800">
                  {jobs.map((job, index) => (
                    <li key={`job-${index}`} className="flex items-center">
                      <Image
                        className="mr-3 h-7 w-7 flex-shrink-0"
                        src={checkmark}
                        alt=""
                      />
                      <span>{job.data.title}</span>
                      <a
                        href={job.data.href}
                        className="group ml-3 flex w-[126px] max-w-full cursor-pointer items-center border-b-2 border-solid border-purple-600 bg-transparent px-0 py-0.5 text-left leading-6 text-purple-600 no-underline transition duration-300 ease-in-out hover:border-purple-400 hover:text-purple-500"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={
                          'Apply now for ' +
                          job.data.title +
                          ' - opens in new tab'
                        }
                      >
                        <span className="text-left text-base font-bold">
                          Apply now
                        </span>
                        <Icon
                          icon="arrowNarrowRight"
                          className="ml-3 h-6 w-6 group-hover:animate-horizontal-bounce"
                          stroke={2}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
                {/* Link to team section */}
                <Button
                  href="/staff#team"
                  variant="accent"
                  size="sm"
                  className="mt-10"
                >
                  Meet the rest of the team
                  <Icon
                    icon="arrowNarrowRight"
                    className="ml-3 h-5 w-5 group-hover:animate-horizontal-bounce"
                    stroke={2}
                  />
                </Button>
              </div>
            </div>
          </div>
          {/* Owners portrait section (Large screens) */}
          <div className="mx-auto hidden w-full gap-10 sm:mx-0 sm:max-w-none sm:gap-8 lg:order-1 lg:col-span-1 lg:mt-20 lg:grid lg:gap-4 xl:col-span-5 xl:gap-8">
            <div>
              <div className="aspect-h-3 aspect-w-3 relative rounded-3xl bg-yellow-50 sm:aspect-h-4 sm:aspect-w-3">
                <Image
                  className="absolute inset-0 h-full w-full rounded-3xl object-cover shadow-md"
                  fill
                  src={owners.image}
                  sizes="(min-width: 1280px) 15.6rem, (min-width: 1024px) 20.8vw, (min-width: 640px) 17rem, 100vw"
                  alt=""
                />
              </div>
              <div className="mt-3.5 pl-2 text-lg sm:pl-0 sm:text-center">
                <p className="font-semibold tracking-wide text-purple-800">
                  {owners.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
