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
            We believe that everyone has the potential to achieve their goals in
            gymnastics. We're here to inspire, support, and empower them to
            reach their full potential.
        </p>

        <div class="px-4 mt-6 sm:px-6 lg:px-8">
            <div class="mt-8 flow-root">
                <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div
                        class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
                    >
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        class="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                    >
                                        Age
                                    </th>
                                    <th
                                        scope="col"
                                        class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Class Type
                                    </th>
                                    <th
                                        scope="col"
                                        class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Price
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr
                                    v-for="service in services"
                                    :key="service.class"
                                >
                                    <td
                                        class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0"
                                    >
                                        {{ service.age }}
                                    </td>
                                    <td
                                        class="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900"
                                    >
                                        {{ service.class }}
                                    </td>
                                    <td
                                        class="whitespace-nowrap px-2 py-2 text-sm text-gray-500"
                                    >
                                        {{ service.price }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="mx-auto my-24 max-w-7xl px-6 sm:my-28 lg:px-8">
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
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'

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

const services = [
    {
        age: '2-5',
        class: 'Preschool',
        price: '$80/month'
    },
    {
        age: '2-5',
        class: 'Preschool Open Gym',
        price: '$10/visit'
    },

    {
        age: '5-18',
        class: 'Levels 1-4',
        price: '$80/month'
    },
    {
        age: '5-18',
        class: 'Team',
        price: '$280/month'
    },

    {
        age: '5-18',
        class: 'Open Gym',
        price: '$20/visit'
    },
    {
        age: '18+',
        class: 'Adult Open Gym',
        price: '$20/visit'
    },
    {
        age: '18+',
        class: 'Adult Conditioning',
        price: '$15/visit'
    },
    {
        age: 'All',
        class: 'Homeschool PE',
        price: '$15/visit'
    },
    {
        age: 'All',
        class: 'Birthday Party',
        price: '$200/day'
    }
]
</script>
