import { createApp } from 'vue'
import Index from '@/components/index/index'
import router from '@/router/index'
import '@/css/common.scss'

const app = createApp({})
app.component('index',Index)
app.use(router)
app.mount('#index')