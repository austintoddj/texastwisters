import { getAllItems } from '@/lib/getItems'
import { marked } from 'marked'

export const PoliciesHero = () => {
  const policies = getAllItems('policies')

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-25 via-purple-25 to-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-screen-xl">
        {/* Header */}
        <div className="relative">
          <h2 className="h1 mx-auto mt-4 max-w-3xl text-center text-purple-900">
            Rules & Policies
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-xl leading-relaxed text-purple-800 sm:mt-5">
            We want to ensure that the gym has a positive and healthy culture,
            our rules and policies are designed with that in mind.
          </p>
        </div>
        {policies.map((policy, i) => (
          <div key={`member-${i}`}>
            <div className="prose prose-lg mx-auto max-w-screen-lg relative leading-relaxed text-purple-800 mt-6 flex lg:mt-0">
              <div
                dangerouslySetInnerHTML={{
                  __html: marked.parse(policy.data.description)
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
