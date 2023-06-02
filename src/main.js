import { createApp } from 'vue';
import router from '@/25-hw-router/router/index.js';
import App from '@/25-hw-router/App.vue'

import '@/assets/sass/app.scss'

createApp(App)
    .use(router)
    .mount('#app')
