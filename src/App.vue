<template>
    <div class="bg-white">
        <Header />
        <div class="relative isolate px-6 pt-14 lg:px-8">
            <div
                class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style="
                        clip-path: polygon(
                            74.1% 44.1%,
                            100% 61.6%,
                            97.5% 26.9%,
                            85.5% 0.1%,
                            80.7% 2%,
                            72.5% 32.5%,
                            60.2% 62.4%,
                            52.4% 68.1%,
                            47.5% 58.3%,
                            45.2% 34.5%,
                            27.5% 76.7%,
                            0.1% 64.9%,
                            17.9% 100%,
                            27.6% 76.8%,
                            76.1% 97.7%,
                            74.1% 44.1%
                        );
                    "
                />
            </div>
            <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div
                        class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                    >
                        Membership opens January 2024.
                        <a href="#" class="font-semibold text-indigo-600"
                            ><span
                                class="absolute inset-0"
                                aria-hidden="true"
                            />Read more
                            <span aria-hidden="true">&rarr;</span></a
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
                        Serving the greater Georgetown area, Texas Twisters is
                        gymnastics for all ages. Want to stay in the loop? Sign
                        up for our newsletter.
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
                                    successfullySubscribed
                                        ? 'Subscribed!'
                                        : 'Subscribe'
                                }}
                            </button>
                        </div>
                        <p class="mt-4 text-sm leading-6 text-gray-900">
                            We care about your data. Read our
                            <a
                                href="#"
                                class="font-semibold text-indigo-600 hover:text-indigo-500"
                                >privacy&nbsp;policy</a
                            >.
                        </p>
                    </form>
                </div>
            </div>
            <div
                class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style="
                        clip-path: polygon(
                            74.1% 44.1%,
                            100% 61.6%,
                            97.5% 26.9%,
                            85.5% 0.1%,
                            80.7% 2%,
                            72.5% 32.5%,
                            60.2% 62.4%,
                            52.4% 68.1%,
                            47.5% 58.3%,
                            45.2% 34.5%,
                            27.5% 76.7%,
                            0.1% 64.9%,
                            17.9% 100%,
                            27.6% 76.8%,
                            76.1% 97.7%,
                            74.1% 44.1%
                        );
                    "
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '@/components/Header.vue'
import MailerLite from '@mailerlite/mailerlite-nodejs'

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
