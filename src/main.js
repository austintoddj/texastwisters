import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { inject } from '@vercel/analytics'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Schedule from './views/Schedule.vue'
import Pricing from './views/Pricing.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'

inject()

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/pricing',
        component: Pricing
    },
    {
        path: '/schedule',
        component: Schedule
    },
    {
        path: '/:catchAll(.*)',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

app.use(router)

app.mount('#app')
