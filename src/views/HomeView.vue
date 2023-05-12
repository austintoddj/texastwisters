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
                Serving the greater Georgetown area, Texas Twisters is
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
                        href="#"
                        class="font-semibold text-indigo-600 hover:text-indigo-500"
                        >privacy&nbsp;policy</a
                    >.
                </p>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
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
