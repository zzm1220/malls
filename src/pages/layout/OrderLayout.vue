<!-- 组件说明 -->
<template>
  <div class="">
    <order-header />
    <router-view></router-view>
    <nav-footer />
  </div>
</template>

<script>
import OrderHeader from "../../components/OrderHeader.vue"
import NavFooter from "../../components/NavFooter"
export default {
  components: {
    OrderHeader,
    NavFooter
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style scoped lang="sass">
</style>