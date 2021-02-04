<!--
 * @Author: zhimin
 * @Date: 2021-01-27 10:04:53
 * @LastEditors: zhimin
 * @LastEditTime: 2021-02-04 17:27:06
 * @FilePath: \malls\src\pages\cart\Cart.vue
-->
<!-- 组件说明 -->
<template>
  <div class="cart">
    <div class="cart__header">
      <div class="container">
        <div class="container__logo">
          <img
            class="container__logo__img"
            src="/imgs/logo-mi.png"
            alt="mi-logo"
          >
        </div>
        <div class="container__title">
          <span class="container__title__cart">我的购物车</span>
          <span class="container__title__msg">温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
        </div>
        <div class="container__name">
          zhimin
        </div>
      </div>
    </div>
    <div class="cart__content">
      <div class="container">
        <div class="wrapper">
          <h3 class="header">
            <span class="inputBox">
              <input
                type="checkbox"
                id="selectAll"
              >
              <label for="selectAll">全选</label>
            </span>
            <span class="name">商品名称</span>
            <span class="price">单价</span>
            <span class="num">数量</span>
            <span class="total">小计</span>
            <span class="operate">操作</span>
          </h3>
          <div class="item">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import x from ''
export default {
  components: {

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

<style scoped lang="scss">
</style>