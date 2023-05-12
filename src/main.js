import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { inject } from '@vercel/analytics'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ScheduleView from './views/ScheduleView.vue'
import PricingView from './views/PricingView.vue'
import AboutView from './views/AboutView.vue'

inject()

const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/schedule',
        component: ScheduleView
    },
    {
        path: '/pricing',
        component: PricingView
    },
    {
        path: '/about',
        component: AboutView
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

app.use(router)

app.mount('#app')
