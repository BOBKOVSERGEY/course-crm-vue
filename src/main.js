import { createApp } from 'vue';
//import router from '@/25-hw-router/router/index.js';
import App from '@/26-composables-and-directives/App.vue'
import VIntersection from "@/26-composables-and-directives/directives/vIntersection";
import '@/assets/sass/app.scss'

createApp(App)
    //.use(router)
    .directive('intersection', VIntersection)
    .mount('#app')
