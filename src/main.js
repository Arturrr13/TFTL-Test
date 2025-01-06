import { createApp } from 'vue'
import './assets/css/main.scss'
import i18n from './assets/js/i18n'
import router from './assets/js/router'
import App from './App.vue'

createApp(App).use(i18n()).use(router).mount('#app')
