<!-- 组件说明 -->
<template>
  <div
    class="nav"
    :class="{'isFixed':isFixed}"
  >
    <div class="container">
      <div class="nav__title">
        <span class="nav__title__name">小米8 透明探索版</span>
        <span class="nav__title__desc">小米8 SE</span>
        <span class="nav__title__intro">小米8</span>
      </div>
      <div class="nav__param">
        <span class="nav__param__intro">概述</span>
        <span class="nav__param__payload">参数</span>
        <span class="nav__param__comment">用户评价</span>
        <slot name="navBtn"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-nav',
  props: ['height'],
  components: {

  },
  data () {
    return {
      isFixed: false
    };
  },
  computed: {

  },
  methods: {
    initHeight () {
      let scrollVal = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollVal > this.height) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.initHeight)
  },
  destroyed () {
    window.removeEventListener('scroll', this.initHeight)
  },
}
</script>

<style scoped lang="scss">
@import '../assets/scss/base.scss';
.nav {
  height: 71px;
  &.isFixed {
    position: fixed;
    top: 0;
    width: 100%;
  }
  .container {
    height: 71px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  border-top: 1px solid #e5e5e5;
  background: #ffffff;
  &__title {
    font-size: 12px;
    color: #666666;
    height: 27px;
    &__name {
      display: inline-block;
      height: 100%;
      position: relative;
      font-size: 18px;
      color: #333333;
      padding-right: 13px;
      &::after {
        position: absolute;
        top: 6px;
        right: 4px;
        content: '|';
        font-size: 11px;
      }
    }
    &__desc {
      display: inline-block;
      height: 100%;
      position: relative;
      vertical-align: middle;
      padding: 0 10px;
      &::after {
        position: absolute;
        top: 2px;
        right: 0px;
        content: '|';
        font-size: 11px;
      }
    }
    &__intro {
      display: inline-block;
      height: 100%;
      vertical-align: middle;
      padding: 0 10px;
    }
  }
  &__param {
    font-size: 14px;
    color: #666666;
    & span {
      padding: 0 10px;
    }
    &__intro {
      position: relative;
      &::after {
        content: '';
        position: absolute;
        top: 3px;
        right: 0px;
        font-size: 11px;
        width: 1px;
        height: 11px;
        border-right: 1px solid #999999;
      }
    }
    &__payload {
      position: relative;
      &::after {
        content: '';
        position: absolute;
        top: 3px;
        right: 0px;
        font-size: 11px;
        width: 1px;
        height: 11px;
        border-right: 1px solid #999999;
      }
    }
  }
}
</style>