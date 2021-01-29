<!--
 * @Author: zhimin
 * @Date: 2021-01-27 10:04:53
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-29 11:11:20
 * @FilePath: \malls\src\pages\layout\Layout.vue
-->
<!-- 组件说明 -->
<template>
  <div class="">
    <nav-header />
    <router-view></router-view>
    <service-bar />
    <nav-footer />
  </div>
</template>

<script>
import NavHeader from '../../components/NavHeader'
import NavFooter from '../../components/NavFooter'
import ServiceBar from '../../components/ServiceBar'
export default {
  name: 'layout',
  components: {
    NavHeader,
    NavFooter,
    ServiceBar
  },
  data () {

    return {

    };
  },
  computed: {

  },
  methods: {

  },
}
</script>

<style scoped>
</style>