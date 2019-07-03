import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    // Prevent blank screen in Electron builds
    this.$router.push('/')
  }
}).$mount('#app')
