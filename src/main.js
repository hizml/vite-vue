import { createApp } from 'vue'
import Element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router/index'
import store from './store'

window.onerror = function(e){
  console.log(['https://stackoverflow.com/search?q=[js]+'+e])
}

createApp(App).use(router).use(store).use(Element3).mount('#app')
