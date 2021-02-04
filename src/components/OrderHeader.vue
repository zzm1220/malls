<!-- 组件说明 -->
<template>
  <div class="cart__header">
    <div class="container">
      <div class="container__logo">
        <a href="/#/home">
          <img
            class="container__logo__img"
            src="/imgs/logo-mi.png"
            alt="mi-logo"
          />
        </a>
      </div>
      <div class="container__title">
        <span class="container__title__cart">{{title}}</span>
        <slot name="tip"></slot>
      </div>
      <div class="container__name">{{username}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "order-header",
  props: {
      title: String
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    username() {
        return this.$store.state.username
    }
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/base.scss";
.cart__header {
  box-sizing: border-box;
  width: 100%;
  height: 112px;
  border-bottom: 1px solid #ff6600;
  background: #ffffff;
  padding: 30px 0;
  .container__logo {
    display: inline-block;
    width: 52px;
    height: 52px;
    a {
      display: inline-block;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        vertical-align: middle;
      }
    }
  }
  .container__title {
    display: inline-block;
    height: 52px;
    line-height: 52px;
    margin-left: 53px;
    vertical-align: middle;
    &__cart {
      font-size: 28px;
      font-weight: bold;
      color: #333333;
      margin-right: 17px;
    }
    &__msg {
      font-size: 14px;
      color: #999999;
    }
  }
  .container__name {
    float: right;
    width: 64px;
    height: 60px;
    font-size: 16px;
    font-weight: bold;
    color: #666666;
    line-height: 60px;
  }
}
</style>