<!--
 * @Author: zhimin
 * @Date: 2021-01-27 10:04:53
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-28 17:34:19
 * @FilePath: \malls\src\components\NavHeader.vue
-->
<!-- 组件说明 -->
<template>
  <div class="wrapper">
    <div class="header">
      <div class="header__top container">
        <ul class="header__top__container">
          <li><a href="javascript:;">松果出行</a></li>
          <li><a href="javascript:;">MIUI</a></li>
          <li><a href="javascript:;">云服务</a></li>
          <li><a href="javascript:;">协议规则</a></li>
        </ul>
        <ul class="header__top__user">
          <li><a href="javascript:;">登录</a></li>
          <li><a href="javascript:;">注册</a></li>
          <li class="cart">
            <a href="javascript:;">
              <span class="iconfont">&#xe6af;</span>
              购物车
              <span class="num">(0)</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="bar container">
      <div class="bar__logo">
        <a href="/#/home"></a>
      </div>
      <div class="bar__menu">
        <div class="bar__menu__item">
          <span>小米手机</span>
          <ul class="children">
            <li
              class="children__item"
              v-for="item in phoneList"
              :key="item.id"
            >
              <a
                :href="`#/product/${item.id}`"
                target="_blank"
              >
                <div class="item__img">
                  <img
                    :src="item.mainImage"
                    :alt="item.name"
                  >
                </div>
                <h4 class="item__title">{{item.name}}</h4>
                <p class="item__price">{{item.price}}元</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="bar__menu__item">
          <span>Redmi红米</span>
        </div>
        <div class="bar__menu__item">
          <span>电视</span>
          <ul class="children">
            <li class="children__item">
              <a
                href=""
                target="_blank"
              >
                <div class="item__img">
                  <img
                    src="/imgs/nav-img/nav-3-1.jpg"
                    alt="mi"
                  >
                </div>
                <h4 class="item__title">小米9</h4>
                <p class="item__price">2999元</p>
              </a>
            </li>
            <li class="children__item">
              <a
                href=""
                target="_blank"
              >
                <div class="item__img">
                  <img
                    src="/imgs/nav-img/nav-3-2.jpg"
                    alt="mi"
                  >
                </div>
                <h4 class="item__title">小米9</h4>
                <p class="item__price">2999元</p>
              </a>
            </li>
            <li class="children__item">
              <a href="">
                <div class="item__img">
                  <img
                    src="/imgs/nav-img/nav-3-3.png"
                    alt="mi"
                  >
                </div>
                <h4 class="item__title">小米9</h4>
                <p class="item__price">2999元</p>
              </a>
            </li>
            <li class="children__item">
              <a href="">
                <div class="item__img">
                  <img
                    src="/imgs/nav-img/nav-3-4.jpg"
                    alt="mi"
                  >
                </div>
                <h4 class="item__title">小米9</h4>
                <p class="item__price">2999元</p>
              </a>
            </li>
            <li class="children__item">
              <a href="">
                <div class="item__img">
                  <img
                    src="/imgs/nav-img/nav-3-5.jpg"
                    alt="mi"
                  >
                </div>
                <h4 class="item__title">小米9</h4>
                <p class="item__price">2999元</p>
              </a>
            </li>
            <li class="children__item">
              <a href="">
                <div class="item__img">
                  <img
                    src="/imgs/nav-img/nav-3-6.png"
                    alt="mi"
                  >
                </div>
                <h4 class="item__title">小米9</h4>
                <p class="item__price">2999元</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="bar__search">
        <input
          class="bar__search__input"
          type="text"
        >
        <div class="iconfont bar__search__icon">&#xe60e;</div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from '../util/request'
export default {
  name: 'nav-header',
  data () {
    return {
      phoneList: [],
      tvList: []
    };
  },
  mounted () {
    this.getBarPhoneList()
  },
  computed: {

  },
  methods: {
    getBarPhoneList () {
      // console.log(get)
      console.log("hello methods")
      get('/products', {
        categoryId: '100012',
        pageSize: 6
      }).then(res => {
        this.phoneList = res.list
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/scss/iconfont.scss';
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
.wrapper {
  .header {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    background: #333333;
    &__top {
      @include flex();
      &__container {
        flex-basis: 213px;
        @include flex();
        a {
          color: #b0b0b0;
        }
      }
      &__user {
        flex-basis: 184px;
        height: 40px;
        @include flex();
        a {
          color: #b0b0b0;
        }
        .cart {
          width: 110px;
          text-align: center;
          background: #ff6600;
          a {
            color: #ffffff;
          }
        }
      }
    }
  }
  .bar {
    position: relative;
    height: 112px;
    @include flex();
    background: #ffffff;
    &__logo {
      width: 55px;
      height: 55px;
      background: #ff6600;
      a {
        display: inline-block;
        width: 110px;
        height: 55px;
        &::before {
          display: inline-block;
          content: '';
          @include bgImg(55px, 55px, '/imgs/mi-logo.png');
          transition: margin 0.2s ease-in;
        }
        &::after {
          display: inline-block;
          content: '';
          @include bgImg(55px, 55px, '/imgs/mi-home.png');
        }
        &:hover::before {
          margin-left: -55px;
          transition: margin 0.2s ease-in;
        }
      }
    }
    &__menu {
      position: absolute;
      left: 264px;
      width: 200px;
      height: 112px;
      font-size: 16px;
      @include flex();
      &__item {
        display: inline-block;
        font-weight: bold;
        &:hover > .children {
          opacity: 1;
          height: 220px;
          transition: all 0.2s ease-in;
        }
        span {
          display: inline-block;
          height: 112px;
          line-height: 112px;
          cursor: pointer;
          &:hover {
            color: #ff6600;
          }
        }
        .children {
          box-sizing: border-box;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 112px;
          left: -264px;
          width: 1226px;
          height: 0px;
          opacity: 0;
          border: 1px solid #e5e5e5;
          box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
          background: #ffffff;
          z-index: 99;
          transition: all 0.2s ease-in;
          &__item {
            flex: 1;
            flex-basis: 204px;
            text-align: center;
            &:last-child .item__img::after {
              border-left: none;
            }
            .item__img {
              img {
                width: 110px;
                height: 92px;
              }
              &::after {
                display: inline-block;
                content: '';
                position: relative;
                left: 40px;
                width: 1px;
                height: 99px;
                border-left: 1px solid #d7d7d7;
              }
            }
            .item__title {
              margin-top: 10px;
              font-size: 12px;
              font-weight: bold;
              color: #333333;
            }
            .item__price {
              margin-top: 8px;
              font-size: 12px;
              color: #ff6600;
            }
          }
        }
      }
    }
    &__search {
      display: flex;
      &__input {
        box-sizing: border-box;
        padding: 0 12px;
        width: 264px;
        height: 50px;
        border: 1px solid #e0e0e0;
      }
      &__icon {
        box-sizing: border-box;
        width: 55px;
        height: 50px;
        line-height: 50px;
        border: 1px solid #e0e0e0;
        border-left: none;
        text-align: center;
        font-size: 18px;
        color: #666666;
        cursor: pointer;
      }
    }
  }
}
</style>