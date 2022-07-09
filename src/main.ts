import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import './assets/global.css'
// import 'aos/dist/aos.css'



const app = createApp(App)


app.use(router).mount('#app')
