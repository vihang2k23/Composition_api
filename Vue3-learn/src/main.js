import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import './index.js'
const app = createApp(App)

//App level Provider
app.provide("name","eventdaata")
app.mount('#app')
