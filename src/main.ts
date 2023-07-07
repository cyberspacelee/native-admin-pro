import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import router from '~/routes'

/**
 * 解决 tailwind 的样式冲突
 */
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)
const app = createApp(App)
const pinia = createPinia()
app.use(router).use(pinia).mount('#app')
