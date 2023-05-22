<template>
    <div id="faqs" class="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        <div class="mx-auto max-w-7xl divide-y divide-gray-900/10">
            <h2
                class="text-2xl font-bold leading-10 tracking-tight text-gray-900"
            >
                Frequently asked questions
            </h2>
            <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
                <Disclosure
                    as="div"
                    v-for="faq in faqs"
                    :key="faq.question"
                    class="pt-6"
                    v-slot="{ open }"
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
        id: 1,
        question: 'Are you a licensed childcare facility?',
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
    },
    {
        id: 2,
        question: 'What should my child wear to class?',
        answer: 'We recommend a leotard with undergarments, or elastic waist shorts (no pockets, snaps or zippers because they can get caught on equipment) and a T-shirt. For safety, please no exposed midriffs and hair should be secured away from the face.'
    },
    {
        id: 3,
        question: 'When are you closed for classes?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.'
    },
    {
        id: 4,
        question: 'Do you offer private lessons?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.'
    },
    {
        id: 5,
        question: 'If my child misses a class, can they do a make up class?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.'
    },
    {
        id: 6,
        question: 'How do I know which level to enroll my child in?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.'
    }
]
</script>
