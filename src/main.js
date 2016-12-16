import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from 'store/store'

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'history' // TODO: Remember to set up the server to ALWAYS serve the index.html file when this history-mode is on (to avoid hashes in the url)
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
