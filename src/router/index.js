import {createRouter, createWebHashHistory} from 'vue-router'
import NProgress from 'nprogress' // progress bar
// import {createRouter, createWebHashHistory} from './grouter/index'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})

export default router
