import { createApp } from 'vue';
//import router from '@/25-hw-router/router/index.js';
import App from '@/26-hw-composables-directives/App.vue'

import '@/assets/sass/app.scss'

createApp(App)
    //.use(router)
    //.directive('intersection', VIntersection)
    .mount('#app')
