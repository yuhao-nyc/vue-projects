import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
Vue.use(VueRouter)

import {
  routes
} from './routes.js'

const router = new VueRouter({
  routes,
  mode: 'history'
})

// router.beforeEach((to, from, next) => {
//   next()
// })


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})