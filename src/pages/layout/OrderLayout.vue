<!-- 组件说明 -->
<template>
  <div class="">
    <order-header :title="title"></order-header>
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer />
  </div>
</template>

<script>
import OrderHeader from "../../components/OrderHeader.vue"
import NavFooter from "../../components/NavFooter"
import ServiceBar from '../../components/ServiceBar.vue';
export default {
  components: {
    OrderHeader,
    NavFooter,
    ServiceBar
  },
  data() {
    return {
      title: ""
    };
  },
  computed: {},
  methods: {},
  mounted() {
    const path = this.$route.path
    console.log(path)
    if (path === '/order/list') {
      this.title = "订单列表"
    } else if (path === '/order/confirm') {
      this.title = "订单确认"
    } else if (path === '/order/pay') {
      this.title = "订单支付"
    }
  },
};
</script>

<style scoped lang="sass">
</style>