<template>
    <div id="hiring" class="mx-auto py-20 sm:py-28 max-w-7xl px-6 lg:px-8">
        <div
            class="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row"
        >
            <div class="w-full lg:max-w-lg lg:flex-auto">
                <h2
                    class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                    We’re always looking for awesome people to join us
                </h2>
                <p class="mt-6 text-xl leading-8 text-gray-600">
                    We want to inspire the next generation of gymnasts. Beyond
                    helping them succeed in the gym, we're building a lifelong
                    foundation of grit and excellence.
                </p>
                <img
                    src="https://images.unsplash.com/photo-1655842556824-507cad4f4650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt=""
                    class="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
                />
            </div>
            <div class="w-full lg:max-w-xl lg:flex-auto">
                <h3 class="sr-only">Job openings</h3>
                <ul class="-my-8 divide-y divide-gray-100">
                    <li
                        v-for="opening in jobOpenings"
                        :key="opening.id"
                        class="py-8"
                    >
                        <dl class="relative flex flex-wrap gap-x-3">
                            <dt class="sr-only">Role</dt>
                            <dd
                                class="w-full flex-none text-lg font-semibold tracking-tight text-gray-900"
                            >
                                <a :href="opening.href" target="_blank">
                                    {{ opening.role }}
                                    <span
                                        class="absolute inset-0"
                                        aria-hidden="true"
                                    />
                                </a>
                            </dd>
                            <dt class="sr-only">Description</dt>
                            <dd
                                class="mt-2 w-full flex-none text-base leading-7 text-gray-600"
                            >
                                {{ opening.description }}
                            </dd>
                            <dt class="sr-only">Salary</dt>
                            <dd
                                class="mt-4 text-base font-semibold leading-7 text-gray-900"
                            >
                                {{ opening.rate }}/hour
                            </dd>
                            <dt class="sr-only">Location</dt>
                            <dd
                                class="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500"
                            >
                                <svg
                                    viewBox="0 0 2 2"
                                    class="h-0.5 w-0.5 flex-none fill-gray-300"
                                    aria-hidden="true"
                                >
                                    <circle cx="1" cy="1" r="1" />
                                </svg>
                                {{ opening.employment }}
                            </dd>
                        </dl>

                        <div class="flex pt-8">
                            <a
                                :href="opening.href"
                                target="_blank"
                                class="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                                >Apply today
                                <span aria-hidden="true">&rarr;</span></a
                            >
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
const jobOpenings = [
    {
        id: 1,
        role: 'Gymnastics Coach',
        href: 'https://forms.gle/Xagd6meiKKzttkbm8',
        description:
            "We're looking for someone who's a team player - passionate about developing the skills and confidence of tomorrow's gymnasts in a safe and positive environment.",
        rate: '$15-25',
        employment: 'Part-time'
    },
    {
        id: 2,
        role: 'Front Desk Receptionist',
        href: 'https://forms.gle/TpkE2tMEUAvaWhWPA',
        description:
            "We're looking for someone who can make people feel welcome, handle administrative tasks and duties, and provide a lasting-positive impression on our customers.",
        rate: '$15',
        employment: 'Part-time'
    }
]
</script>
