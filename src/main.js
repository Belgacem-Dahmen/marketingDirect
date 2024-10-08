import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import './assets/main.css'
import { router } from './router'

const app = createApp(App)
app.use(router)
app.use(createPinia())

app.mount('#app')
