<!--
 * @Author: zhimin
 * @Date: 2021-01-27 10:04:53
 * @LastEditors: zhimin
 * @LastEditTime: 2021-02-03 15:50:19
 * @FilePath: \malls\src\App.vue
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { get } from './util/request'
export default {
  name: 'App',
  mounted () {
    this.getUser()
    this.getCartCount()
  },
  methods: {
    getUser () {
      get('/user').then((res = {}) => {
        this.$store.dispatch('saveUsername', {
          username: res.username
        })
      })
    },
    getCartCount () {
      get('/carts/products/sum').then((res = 0) => {
        console.log(res)
        this.$store.dispatch('saveCartCount', {
          cartCount: res
        })
      })
    }
  }
}
</script>

<style>
@import './assets/scss/reset.scss';
</style>
