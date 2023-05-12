<template>
    <div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-32 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
            <h1 class="text-base font-semibold leading-7 text-indigo-600">
                About
            </h1>
            <p
                class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
            >
                Our mission
            </p>
        </div>
        <p
            class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600"
        >
            We believe that everyone has the potential to achieve their goals in
            gymnastics. We're here to inspire, support, and empower them to
            reach their full potential.
        </p>

        <div class="py-24 md:py-32 lg:py-40">
            <div
                class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3"
            >
                <div class="mx-auto max-w-2xl lg:mx-0">
                    <h2
                        class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                    >
                        Our team
                    </h2>
                    <p class="mt-6 text-lg leading-8 text-gray-600">
                        We’re a dynamic group of individuals who are passionate
                        about what we do and dedicated to delivering the best
                        results for our clients.
                    </p>
                </div>
                <ul
                    role="list"
                    class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
                >
                    <li v-for="person in people" :key="person.name">
                        <img
                            class="aspect-[3/3] w-full rounded-2xl object-cover object-top"
                            :src="person.imageUrl"
                            alt=""
                        />
                        <h3
                            class="mt-6 text-lg font-semibold leading-8 text-gray-900"
                        >
                            {{ person.name }}
                        </h3>
                        <p class="text-base leading-7 text-gray-600">
                            {{ person.role }}
                        </p>
                        <p class="mt-4 text-base leading-7 text-gray-600">
                            {{ person.bio }}
                        </p>
                        <ul role="list" class="mt-6 flex gap-x-6">
                            <li v-if="person.twitterUrl">
                                <a
                                    :href="person.twitterUrl"
                                    class="text-gray-400 hover:text-gray-500"
                                >
                                    <span class="sr-only">Twitter</span>
                                    <svg
                                        class="h-5 w-5"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li v-if="person.linkedinUrl">
                                <a
                                    :href="person.linkedinUrl"
                                    class="text-gray-400 hover:text-gray-500"
                                >
                                    <span class="sr-only">LinkedIn</span>
                                    <svg
                                        class="h-5 w-5"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li v-if="person.instagramUrl">
                                <a
                                    :href="person.instagramUrl"
                                    class="text-gray-400 hover:text-gray-500"
                                >
                                    <span class="sr-only">Instagram</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 1000 1000"
                                        class="h-5 w-5"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"
                                            transform="translate(-2.5 -2.5)"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li v-if="person.tiktokUrl">
                                <a
                                    :href="person.tiktokUrl"
                                    class="text-gray-400 hover:text-gray-500"
                                >
                                    <span class="sr-only">Instagram</span>
                                    <svg
                                        viewBox="0 0 512 512"
                                        class="h-5 w-5"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
const people = [
    {
        name: 'Becky Austin',
        role: 'Manager, Head Coach',
        imageUrl: '/becky.jpg',
        bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
        instagramUrl: 'https://instagram.com/gymnastrx',
        tiktokUrl: 'https://www.tiktok.com/@gymnastrx'
    },
    {
        name: 'Todd Austin',
        role: 'Owner',
        imageUrl: '/todd.jpg',
        bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
        twitterUrl: 'https://twitter.com/austintoddj',
        linkedinUrl: 'https://linkedin.com/in/austintoddj'
    }
]
</script>
