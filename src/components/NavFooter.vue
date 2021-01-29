<!--
 * @Author: zhimin
 * @Date: 2021-01-27 10:04:53
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-29 10:41:59
 * @FilePath: \malls\src\components\NavFooter.vue
-->
<!-- 组件说明 -->
<template>
  <div class="footer">
    <div class="footer__logo">
      <img
        src="/imgs/logo-footer.png"
        alt=""
        class="footer__logo__img"
      >
      <p class="footer__logo__intro">小米商城</p>
    </div>
    <div class="footer__title">
      <a
        href="javascript:;"
        class="footer__title__item"
      ><span>志敏主页</span></a>
      <a
        href="javascript:;"
        class="footer__title__item"
      ><span>Vue精通</span></a>
      <a
        href="javascript:;"
        class="footer__title__item"
      ><span>webpack精通</span></a>
      <a
        href="javascript:;"
        class="footer__title__item"
      ><span>node.js精通</span></a>
    </div>
    <p class="footer__desc">
      Copyright©<span class="author">1026938098@qq.com</span> AllRights Reserved
    </p>
  </div>
</template>

<script>
//import x from ''
export default {
  name: 'nav-footer',
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
.footer {
  box-sizing: border-box;
  width: 100%;
  height: 234px;
  text-align: center;
  border-top: 4px solid #ff7301;
  background: #333333;
  color: #999999;
  &__logo {
    margin-top: 46px;
    &__img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
    &__intro {
      color: #999999;
      margin-bottom: 31px;
    }
  }
  &__title {
    margin-bottom: 10px;
    &__item {
      color: #999999;
      padding: 0 10px;
      border-right: 1px solid #999999;
      &:last-child {
        border-right: none;
      }
    }
  }
  &__desc {
    .author {
      color: #ff6600;
    }
  }
}
</style>