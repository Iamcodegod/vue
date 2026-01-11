import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css' // 引入动画样式

const app = createApp(App)
app.use(router)
app.mount('#app')