/* eslint-disable-next-line */
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { Icon } from '@/components/Icon'
/* eslint-disable-next-line */
import { Button } from '@/components/Button'
import checkmark from '/public/images/illustrations/checkmark.svg'
import { getAllItems } from '@/lib/getItems'

export const StaffHiring = ({ jobs }) => {
  const featuredStaff = getAllItems('staff').filter(
    member => member.data.featured
  )

  return (
    <section className="relative w-full px-4 py-16 sm:py-24 sm:px-6 xl:px-8">
      {/* Container */}
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="grid gap-16 lg:grid-cols-2 xl:grid-cols-11 lg:gap-12 xl:gap-24">
          {/* Text content */}
          <div className="flex flex-col justify-center lg:col-span-1 xl:col-span-6 lg:order-2">
            <div>
              <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md">
                Guess what, we're hiring!
              </span>
            </div>
            <h2 className="mt-4 text-purple-900 sm:mt-5 h2">
              Meet the staff behind Texas Twisters
            </h2>
            <p className="max-w-xl mt-4 text-xl leading-relaxed text-purple-800 md:mt-5">
              We believe that growth and development are essential for both our
              athletes and our coaches. We are committed to providing the
              resources and support you need to succeed.
            </p>
            {/* Current job postings box */}
            <div className="relative max-w-4xl mt-16 bg-yellow-100 rounded-xl sm:mt-14">
              <span className="absolute flex items-center justify-center shadow-md left-6 sm:left-10 -top-7 rounded-2xl w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-600">
                <Icon icon="certificate" className="w-8 h-8 text-purple-50" />
              </span>
              <div className="px-4 py-10 mt-2 sm:px-10 sm:py-12">
                <p className="text-lg font-semibold text-purple-900 sm:text-xl">
                  Looking for a new and exciting opportunity? Check out some of
                  our current job openings:
                </p>
                {/* Job postings list */}
                <ul className="mt-5 space-y-5 text-lg text-purple-800">
                  {jobs.map((job, index) => (
                    <li key={`job-${index}`} className="flex items-center">
                      <Image
                        className="flex-shrink-0 mr-3 w-7 h-7"
                        src={checkmark}
                        alt=""
                      />
                      <span>{job.data.title}</span>
                      <a
                        href={job.data.href}
                        className="ml-3 flex items-center py-0.5 px-0 w-[126px] max-w-full leading-6 text-left text-purple-600 no-underline bg-transparent border-b-2 border-purple-600 border-solid cursor-pointer hover:text-purple-500 transition duration-300 ease-in-out hover:border-purple-400 group"
                        target="_blank"
                      >
                        <span className="text-base font-bold text-left">
                          Apply today
                        </span>
                        <Icon
                          icon="arrowNarrowRight"
                          className="w-6 h-6 ml-3 group-hover:animate-horizontal-bounce"
                          stroke={2}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
                {/* Link to team section */}
                {/*<Button*/}
                {/*    href="/about#team"*/}
                {/*    variant="accent"*/}
                {/*    size="sm"*/}
                {/*    className="mt-10"*/}
                {/*>*/}
                {/*    Meet the rest of the team*/}
                {/*    <Icon*/}
                {/*        icon="arrowNarrowRight"*/}
                {/*        className="w-5 h-5 ml-3 group-hover:animate-horizontal-bounce"*/}
                {/*        stroke={2}*/}
                {/*    />*/}
                {/*</Button>*/}
              </div>
            </div>
          </div>
          {/* Featured coaches section */}
          <div className="grid w-full gap-10 mx-auto sm:gap-8 lg:col-span-1 xl:col-span-5 lg:mt-20 sm:grid-cols-2 lg:gap-4 xl:gap-8 lg:order-1 sm:max-w-none sm:mx-0">
            {featuredStaff.map((member, index) => (
              <div
                key={`featured-member-${index}`}
                className={clsx(index % 2 == 0 && 'lg:-translate-y-20')}
              >
                <div className="relative aspect-w-3 aspect-h-3 sm:aspect-w-3 sm:aspect-h-4 bg-yellow-50 rounded-3xl">
                  <Image
                    className="absolute inset-0 object-cover w-full h-full shadow-md rounded-3xl"
                    fill
                    src={member.data.portraitImage}
                    sizes="(min-width: 1280px) 15.6rem, (min-width: 1024px) 20.8vw, (min-width: 640px) 17rem, 100vw"
                    alt={member.data.name}
                  />
                </div>
                <div className="pl-2 sm:pl-0 mt-3.5 text-lg sm:text-center">
                  <p className="font-semibold tracking-wide text-purple-800">
                    {member.data.name}
                  </p>
                  <p className="text-base font-medium text-purple-600">
                    {member.data.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
