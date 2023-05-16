import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { inject } from '@vercel/analytics'
import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('./views/Home.vue')
const Schedule = () => import('./views/Schedule.vue')
const Pricing = () => import('./views/Pricing.vue')
const About = () => import('./views/About.vue')
const NotFound = () => import('./views/NotFound.vue')

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
