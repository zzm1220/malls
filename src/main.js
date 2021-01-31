/*
 * @Author: zhimin
 * @Date: 2021-01-27 10:04:53
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-27 14:04:14
 * @FilePath: \malls\src\main.js
 */
import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueLazyLoad,{
  loading: '/imgs/loading-svg/loading-bars.svg'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
