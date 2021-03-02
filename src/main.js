/*
 * @Author: zhimin
 * @Date: 2021-01-27 10:04:53
 * @LastEditors: zhimin
 * @LastEditTime: 2021-02-04 16:19:41
 * @FilePath: \malls\src\main.js
 */
import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui' 
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
});
Vue.use(VueCookie)

Vue.prototype.$message = Message

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
