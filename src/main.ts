import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'virtual:svg-icons-register'
import router from "@/router";
const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn,
})
app.use(router)
app.mount('#app')
