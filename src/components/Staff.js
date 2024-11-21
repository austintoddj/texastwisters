import { Icon } from '@/components/Icon'
import { getAllItems } from '@/lib/getItems'
import Image from 'next/image'
import Link from 'next/link'

export const Staff = () => {
  const staff = getAllItems('staff')

  return (
    <section id="staff">
      {/* Top purple background section */}
      <div className="bg-purple-600 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Section header text */}
        <div className="mx-auto max-w-2xl lg:max-w-screen-xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div className="flex items-center">
              <h3 className="h2 max-w-4xl text-white sm:text-center lg:text-left">
                Meet the people behind Texas Twisters
              </h3>
            </div>
            <div className="flex items-center">
              <p className="mt-5 text-xl leading-relaxed text-purple-50 sm:text-center lg:mt-0 lg:text-left">
                With decades of gymnastics experience among us, we're looking
                forward to sharing our love of the sport with all of you in
                Georgetown, Texas!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* background to create overlay effect */}
      <div className="h-32 w-full bg-purple-600" />
      {/* Team section */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl -translate-y-32 lg:max-w-screen-xl">
          <div className="grid gap-y-16 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
            {staff.map((member, i) => (
              <div key={`member-${i}`}>
                {/* About member image */}
                <div className="aspect-h-2 aspect-w-3">
                  <Image
                    src={member.data.image}
                    className="rounded-2xl object-cover"
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    alt={member.data.name}
                  />
                </div>
                {/* About member info */}
                <div className="flex items-center justify-between">
                  <div className="mt-3 text-xl font-medium">
                    <p className="font-semibold tracking-wide text-purple-900">
                      {member.data.name}
                    </p>
                    <p className="text-lg text-purple-600">
                      {member.data.role}
                    </p>
                  </div>
                  {/* Social links */}
                  {member.data.social && (
                    <div className="flex space-x-1.5">
                      {member.data.social.map((socialLink, j) => (
                        <Link
                          target="_blank"
                          key={`member-${i}-social-link-${j}`}
                          href={socialLink.href}
                          aria-label={
                            socialLink.name + ' icon - opens in new tab'
                          }
                        >
                          <Icon
                            icon={socialLink.name}
                            className="durarion-300 h-[22px] w-[22px] text-purple-600 transition ease-in-out hover:text-purple-500"
                          />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                {member.data.bio && (
                  <p className="prose prose-slate">{member.data.bio}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
