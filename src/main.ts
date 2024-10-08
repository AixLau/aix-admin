import { createApp } from 'vue'
import '@/assets/styles.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'virtual:svg-icons-register'
import router from "@/router";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn,
})
app.use(router)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.mount('#app')
