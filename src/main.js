import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import animated from 'animate.css' // npm install animate.css --save安装，在引入
import './plugins/element.js'
import 'normalize.css/normalize.css'
import 'wowjs/css/libs/animate.css'

Vue.use(animated)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
