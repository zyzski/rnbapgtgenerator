import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import axios from 'axios'
import { store } from './store/store.js'
import router from './router'

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(axios)
Vue.use(Vuex)

new Vue({
  render: h => h(App),
  router,
  store: store
}).$mount('#app')
