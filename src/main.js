import { createApp } from 'vue';
//import router from '@/25-hw-router/router/index.js';
import App from '@/27-plugins/App.vue'

import Translate from "@/27-plugins/plugins/translate";

import '@/assets/sass/app.scss'

createApp(App)
    .use(Translate, {
        translate: {
            ru: "О нас",
            en: "About"
        }
    })
    //.use(router)
    //.directive('intersection', VIntersection)
    .mount('#app')
