import { createApp } from 'vue'
import App from './views/Login.vue'

import router from './routers'

// Import our custom CSS
import './scss/styles.scss'

import './style.css'

const app = createApp(App)

app.use(router)

app.mount('#app')