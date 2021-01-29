<!--
 * @Author: zhimin
 * @Date: 2021-01-27 10:04:53
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-29 11:45:15
 * @FilePath: \malls\src\components\ServiceBar.vue
-->
<template>
  <div class="serviceBar">
    <div class="container">
      <ul class="service__wrapper">
        <li class="service__wrapper__item">
          <span class="iconfont service__icon">&#xe67d;</span>
          预约维修服务
        </li>
        <li class="service__wrapper__item">
          <span class="iconfont service__icon">&#xe638;</span>
          7天无理由退货
        </li>
        <li class="service__wrapper__item">
          <span class="iconfont service__icon">&#xe639;</span>
          15天免费换货
        </li>
        <li class="service__wrapper__item">
          <span class="iconfont service__icon">&#xe63e;</span>
          满150元包邮
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'service-bar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/scss/iconfont.scss';
@import '../assets/scss/base.scss';
.serviceBar {
  width: 100%;
  height: 84px;
  font-size: 16px;
  background: #ffffff;
  .container {
    height: 100%;
    .service__wrapper {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      &__item {
        vertical-align: middle;
        position: relative;
        &::after {
          position: absolute;
          top: -6px;
          left: 200px;
          content: '';
          width: 1px;
          height: 34px;
          border-right: 1px solid #e5e5e5;
        }
        &:last-child::after {
          border-right: none;
        }
        .service__icon {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
