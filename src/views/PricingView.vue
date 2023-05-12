<template>
    <div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-32 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
            <h1 class="text-base font-semibold leading-7 text-indigo-600">
                Pricing
            </h1>
            <p
                class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
            >
                Pricing plans for everyone
            </p>
        </div>
        <p
            class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600"
        >
            Choose an affordable plan that’s packed with the best features for
            engaging your audience, creating customer loyalty, and driving
            sales.
        </p>
        <div class="mt-16 flex justify-center">
            <RadioGroup
                v-model="frequency"
                class="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
            >
                <RadioGroupLabel class="sr-only"
                    >Payment frequency</RadioGroupLabel
                >
                <RadioGroupOption
                    v-for="option in pricing.frequencies"
                    :key="option.value"
                    v-slot="{ checked }"
                    as="template"
                    :value="option"
                >
                    <div
                        :class="[
                            checked
                                ? 'bg-indigo-600 text-white'
                                : 'text-gray-500',
                            'cursor-pointer rounded-full px-2.5 py-1'
                        ]"
                    >
                        <span>{{ option.label }}</span>
                    </div>
                </RadioGroupOption>
            </RadioGroup>
        </div>
        <div
            class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4"
        >
            <div
                v-for="tier in pricing.tiers"
                :key="tier.id"
                :class="[
                    tier.mostPopular
                        ? 'ring-2 ring-indigo-600'
                        : 'ring-1 ring-gray-200',
                    'rounded-3xl p-8'
                ]"
            >
                <h2
                    :id="tier.id"
                    :class="[
                        tier.mostPopular ? 'text-indigo-600' : 'text-gray-900',
                        'text-lg font-semibold leading-8'
                    ]"
                >
                    {{ tier.name }}
                </h2>
                <p class="mt-4 text-sm leading-6 text-gray-600">
                    {{ tier.description }}
                </p>
                <p class="mt-6 flex items-baseline gap-x-1">
                    <span
                        class="text-4xl font-bold tracking-tight text-gray-900"
                        >{{ tier.price[frequency.value] }}</span
                    >
                    <span
                        class="text-sm font-semibold leading-6 text-gray-600"
                        >{{ frequency.priceSuffix }}</span
                    >
                </p>
                <a
                    :href="tier.href"
                    :aria-describedby="tier.id"
                    :class="[
                        tier.mostPopular
                            ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                            : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                        'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    ]"
                    >Buy plan</a
                >
                <ul
                    role="list"
                    class="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                >
                    <li
                        v-for="feature in tier.features"
                        :key="feature"
                        class="flex gap-x-3"
                    >
                        <CheckIcon
                            class="h-6 w-5 flex-none text-indigo-600"
                            aria-hidden="true"
                        />
                        {{ feature }}
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="mx-auto my-24 max-w-7xl px-6 sm:my-56 lg:px-8">
        <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h2
                class="text-2xl font-bold leading-10 tracking-tight text-gray-900"
            >
                Frequently asked questions
            </h2>
            <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
                <Disclosure
                    v-for="faq in faqs"
                    :key="faq.question"
                    v-slot="{ open }"
                    as="div"
                    class="pt-6"
                >
                    <dt>
                        <DisclosureButton
                            class="flex w-full items-start justify-between text-left text-gray-900"
                        >
                            <span class="text-base font-semibold leading-7">{{
                                faq.question
                            }}</span>
                            <span class="ml-6 flex h-7 items-center">
                                <PlusSmallIcon
                                    v-if="!open"
                                    class="h-6 w-6"
                                    aria-hidden="true"
                                />
                                <MinusSmallIcon
                                    v-else
                                    class="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </span>
                        </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" class="mt-2 pr-12">
                        <p class="text-base leading-7 text-gray-600">
                            {{ faq.answer }}
                        </p>
                    </DisclosurePanel>
                </Disclosure>
            </dl>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption
} from '@headlessui/vue'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'
import { CheckIcon } from '@heroicons/vue/20/solid'

const pricing = {
    frequencies: [
        { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
        { value: 'annually', label: 'Annually', priceSuffix: '/year' }
    ],
    tiers: [
        {
            name: 'Hobby',
            id: 'tier-hobby',
            href: '#',
            price: { monthly: '$15', annually: '$144' },
            description:
                'The essentials to provide your best work for clients.',
            features: [
                '5 products',
                'Up to 1,000 subscribers',
                'Basic analytics'
            ],
            mostPopular: false
        },
        {
            name: 'Freelancer',
            id: 'tier-freelancer',
            href: '#',
            price: { monthly: '$30', annually: '$288' },
            description:
                'The essentials to provide your best work for clients.',
            features: [
                '5 products',
                'Up to 1,000 subscribers',
                'Basic analytics',
                '48-hour support response time'
            ],
            mostPopular: false
        },
        {
            name: 'Startup',
            id: 'tier-startup',
            href: '#',
            price: { monthly: '$60', annually: '$576' },
            description:
                'A plan that scales with your rapidly growing business.',
            features: [
                '25 products',
                'Up to 10,000 subscribers',
                'Advanced analytics',
                '24-hour support response time',
                'Marketing automations'
            ],
            mostPopular: true
        },
        {
            name: 'Enterprise',
            id: 'tier-enterprise',
            href: '#',
            price: { monthly: '$90', annually: '$864' },
            description:
                'Dedicated support and infrastructure for your company.',
            features: [
                'Unlimited products',
                'Unlimited subscribers',
                'Advanced analytics',
                '1-hour, dedicated support response time',
                'Marketing automations',
                'Custom reporting tools'
            ],
            mostPopular: false
        }
    ]
}
const faqs = [
    {
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
    },
    {
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
    },
    {
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
    },
    {
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
    }
]

const frequency = ref(pricing.frequencies[0])
</script>
