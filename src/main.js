import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/styles/tailwind.css'
import Toasted from 'vue-toasted';
import Options from 'vue-toasted';

Vue.use(Toasted, Options)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
