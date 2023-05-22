import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { inject } from '@vercel/analytics'

inject()

const app = createApp(App)

app.mount('#app')
