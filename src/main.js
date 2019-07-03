import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    // Prevent blank screen in Electron builds
    this.$router.push('/')
  }
}).$mount('#app')
