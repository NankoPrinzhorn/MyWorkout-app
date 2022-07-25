import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'
import router from './router'

import './index.css'
import {useDarkModeStore} from "./store/darkMode";

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')

router.isReady().then(async () => {
    await useDarkModeStore().init()
})
