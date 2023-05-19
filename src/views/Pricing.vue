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

        <div class="px-4 mt-6 sm:px-6 lg:px-8 pt-24">
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
                                        Gender
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
                                        class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pl-0"
                                    >
                                        {{ service.age }}
                                    </td>
                                    <td
                                        class="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-500"
                                    >
                                        {{ service.gender }}
                                    </td>
                                    <td
                                        class="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900"
                                    >
                                        {{ service.class }}
                                    </td>
                                    <td
                                        class="whitespace-nowrap px-4 py-4 text-sm text-gray-500"
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
</template>

<script setup>
const services = [
    {
        age: '2-5',
        class: 'Preschool',
        gender: 'All',
        price: '$80/month'
    },
    {
        age: '2-5',
        class: 'Preschool Open Gym',
        gender: 'All',
        price: '$10/visit'
    },

    {
        age: '5-18',
        class: 'Levels 1-4',
        gender: 'All',
        price: '$80/month'
    },
    {
        age: '5-18',
        class: 'Team',
        gender: 'Female',
        price: '$280/month'
    },

    {
        age: '5-18',
        class: 'Open Gym',
        gender: 'All',
        price: '$20/visit'
    },
    {
        age: '18+',
        class: 'Adult Open Gym',
        gender: 'All',
        price: '$20/visit'
    },
    {
        age: '18+',
        class: 'Adult Conditioning',
        gender: 'All',
        price: '$15/visit'
    },
    {
        age: 'All',
        class: 'Homeschool PE',
        gender: 'All',
        price: '$15/visit'
    },
    {
        age: 'All',
        class: 'Birthday Party',
        gender: 'All',
        price: '$200/day'
    }
]
</script>
