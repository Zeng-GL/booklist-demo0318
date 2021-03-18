import Vue from 'vue'
// import App from './App.vue'
import booklist from './booklist.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import VueResource from 'vue-resource'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
// Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
  render: h => h(booklist),
}).$mount('#app')
