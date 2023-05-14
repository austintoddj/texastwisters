<template>
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
            <div
                class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
            >
                Membership opens January 2024.
                <a href="#" class="font-semibold text-indigo-600"
                    ><span class="absolute inset-0" aria-hidden="true" />Read
                    more <span aria-hidden="true">&rarr;</span></a
                >
            </div>
        </div>
        <div class="text-center">
            <h1
                class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
                Coming Soon
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-600">
                Serving the greater Georgetown area, Texas Twisters provides
                gymnastics for all ages. Want to stay in the loop? Sign up for
                our newsletter.
            </p>

            <form
                class="mt-6 max-w-md m-auto w-full col-span-5"
                method="POST"
                @submit.prevent="subscribe"
            >
                <div class="flex gap-x-4">
                    <label for="email-address" class="sr-only"
                        >Email address</label
                    >
                    <input
                        id="email-address"
                        v-model="email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        required=""
                        class="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Enter your email"
                    />
                    <button
                        type="submit"
                        :disabled="successfullySubscribed"
                        :class="[
                            'flex-none rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                            successfullySubscribed
                                ? 'bg-indigo-500'
                                : 'bg-indigo-600'
                        ]"
                    >
                        {{
                            successfullySubscribed ? 'Subscribed!' : 'Subscribe'
                        }}
                    </button>
                </div>
                <p class="mt-4 text-sm leading-6 text-gray-900">
                    We care about your data. Read our
                    <a
                        class="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer"
                        @click="privacyModalOpen = true"
                        >privacy&nbsp;policy</a
                    >.
                </p>
            </form>
        </div>
    </div>

    <TransitionRoot as="template" :show="privacyModalOpen">
        <Dialog
            as="div"
            class="relative z-50"
            @close="privacyModalOpen = false"
        >
            <TransitionChild
                as="template"
                enter="ease-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in duration-200"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <div
                    class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                />
            </TransitionChild>

            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div
                    class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
                >
                    <TransitionChild
                        as="template"
                        enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <DialogPanel
                            class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
                        >
                            <div class="sm:flex sm:items-start">
                                <div
                                    class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10"
                                >
                                    <LockClosedIcon
                                        class="h-6 w-6 text-gray-600"
                                        aria-hidden="true"
                                    />
                                </div>
                                <div
                                    class="mt-3 sm:ml-4 sm:mt-0 sm:text-left px-6 sm:px-0"
                                >
                                    <DialogTitle
                                        as="h3"
                                        class="text-base font-semibold leading-6 text-gray-900"
                                        >Privacy Policy</DialogTitle
                                    >
                                    <div class="mt-2">
                                        <p class="text-sm text-gray-500">
                                            We are committed to protecting your
                                            privacy. This policy explains how we
                                            collect, use, and share your
                                            information.
                                        </p>
                                        <p class="mt-3 text-sm text-gray-500">
                                            <span class="font-bold"
                                                >What information do we
                                                collect?</span
                                            >

                                            We collect information from you when
                                            you visit our website, use our
                                            services, or interact with our
                                            marketing and advertising. The
                                            information we collect may include:
                                        </p>

                                        <ul
                                            role="list"
                                            class="mt-3 ml-6 list-disc text-sm text-gray-500"
                                        >
                                            <li>Your email address</li>
                                            <li>
                                                Your interactions with our
                                                marketing and advertising
                                            </li>
                                        </ul>

                                        <p class="mt-3 text-sm text-gray-500">
                                            <span class="font-bold"
                                                >How do we use your
                                                information?</span
                                            >

                                            We use the information we collect
                                            for a variety of purposes,
                                            including:
                                        </p>

                                        <ul
                                            role="list"
                                            class="mt-3 ml-6 list-disc text-sm text-gray-500"
                                        >
                                            <li>To communicate with you</li>
                                            <li>
                                                To personalize your experience
                                            </li>
                                            <li>
                                                To improve our website and
                                                services
                                            </li>
                                            <li>
                                                To target our marketing and
                                                advertising
                                            </li>
                                            <li>
                                                To comply with our legal
                                                obligations
                                            </li>
                                        </ul>

                                        <p class="mt-3 text-sm text-gray-500">
                                            <span class="font-bold"
                                                >Who do we share your
                                                information with?</span
                                            >
                                            We may share your information with:
                                        </p>

                                        <ul
                                            role="list"
                                            class="mt-3 ml-6 list-disc text-sm text-gray-500"
                                        >
                                            <li>
                                                Our marketing partners, who help
                                                us target our marketing and
                                                advertising
                                            </li>
                                            <li>
                                                Law enforcement or other
                                                government officials, if
                                                required by law
                                            </li>
                                        </ul>

                                        <p class="mt-3 text-sm text-gray-500">
                                            <span class="font-bold"
                                                >How do we protect your
                                                information?</span
                                            >
                                            We use a variety of security
                                            measures to protect your
                                            information, including:
                                        </p>

                                        <ul
                                            role="list"
                                            class="mt-3 ml-6 list-disc text-sm text-gray-500"
                                        >
                                            <li>Encryption</li>
                                            <li>Access controls</li>
                                            <li>Auditing</li>
                                        </ul>

                                        <p class="mt-3 text-sm text-gray-500">
                                            <span class="font-bold"
                                                >How do you exercise your
                                                privacy rights?</span
                                            >
                                            You have rights with respect to your
                                            personal information, including:
                                        </p>

                                        <ul
                                            role="list"
                                            class="mt-3 ml-6 list-disc text-sm text-gray-500"
                                        >
                                            <li>
                                                The right to withdraw your
                                                consent
                                            </li>
                                        </ul>

                                        <p class="mt-3 text-sm text-gray-500">
                                            To exercise any of these rights,
                                            please contact us at
                                            <a
                                                href="mailto:privacy@texastwistersgym.com"
                                                class="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer focus-visible:outline-none"
                                                >privacy@texastwistersgym.com</a
                                            >.
                                        </p>

                                        <p class="mt-3 text-sm text-gray-500">
                                            <span class="font-bold"
                                                >How do we update this Privacy
                                                Policy?</span
                                            >
                                            We may update this Privacy Policy
                                            from time to time. If we make any
                                            significant changes, we will notify
                                            you by email or through a prominent
                                            notice on our website.
                                        </p>

                                        <p class="mt-3 text-sm text-gray-500">
                                            <span class="font-bold"
                                                >How can you contact us?</span
                                            >
                                            If you have any questions about this
                                            Privacy Policy, please contact us at
                                            <a
                                                href="mailto:privacy@texastwistersgym.com"
                                                class="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer focus-visible:outline-none"
                                                >privacy@texastwistersgym.com</a
                                            >.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                class="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
                            >
                                <button
                                    ref="closeButtonRef"
                                    type="button"
                                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                    @click="privacyModalOpen = false"
                                >
                                    Close
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue'
import MailerLite from '@mailerlite/mailerlite-nodejs'
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot
} from '@headlessui/vue'
import { LockClosedIcon } from '@heroicons/vue/24/outline'

const privacyModalOpen = ref(false)

const email = ref(null)

const mailerlite = new MailerLite({
    api_key: import.meta.env.VITE_MAILERLITE_TOKEN
})

const successfullySubscribed = ref(false)

function subscribe() {
    mailerlite.subscribers
        .createOrUpdate({
            email: email.value,
            groups: [import.meta.env.VITE_MAILERLITE_GROUP]
        })
        .then(() => {
            email.value = null
            successfullySubscribed.value = true
        })
}
</script>
