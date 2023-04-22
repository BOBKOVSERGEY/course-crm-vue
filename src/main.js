import { createApp } from 'vue'
import App from '@/12-custom-components/App.vue'

import '@/assets/sass/app.scss'
import Button from "@/12-custom-components/components/Button.vue";
import Footer from "@/12-custom-components/components/Footer.vue";
import LeftBar from "@/12-custom-components/components/LeftBar.vue";
import RightBar from "@/12-custom-components/components/RightBar.vue";

createApp(App)
    .component('Button', Button)
    .component('Footer', Footer)
    .component('LeftBar', LeftBar)
    .component('RightBar', RightBar)
    .mount('#app')
