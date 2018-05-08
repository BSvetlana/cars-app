import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import VueRouter from "vue-router";

import AppCars from './components/AppCars.vue'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path: '/', redirect: 'cars'},
  {path: '/cars', component: AppCars, name: 'cars'}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
