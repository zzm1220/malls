<!--
 * @Author: zhimin
 * @Date: 2021-01-27 10:04:53
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-29 17:33:50
 * @FilePath: \malls\src\pages\home\Home.vue
-->
<!-- 组件说明 -->
<template>
  <div class="home">
    <div class="box container">
      <div class="box__nav">
        <ul class="nav__container">
          <li class="nav__container__item">
            <a href="javascript:;">
              <span>手机 电话卡</span>
              <span class="iconfont goRight">&#xe622;</span>
            </a>
          </li>
          <li class="nav__container__item">
            <a href="javascript:;">
              <span>电视 盒子</span>
              <span class="iconfont goRight">&#xe622;</span>
            </a>
          </li>
          <li class="nav__container__item">
            <a href="javascript:;">
              <span>笔记本 平板</span>
              <span class="iconfont goRight">&#xe622;</span>
            </a>
          </li>
          <li class="nav__container__item">
            <a href="javascript:;">
              <span>家电 插线板</span>
              <span class="iconfont goRight">&#xe622;</span>
            </a>
          </li>
          <li class="nav__container__item">
            <a href="javascript:;">
              <span>出行 穿戴</span>
              <span class="iconfont goRight">&#xe622;</span>
            </a>
          </li>
          <li class="nav__container__item">
            <a href="javascript:;">
              <span>耳机 音箱</span>
              <span class="iconfont goRight">&#xe622;</span>
            </a>
          </li>
          <li class="nav__container__item">
            <a href="javascript:;">
              <span>电源 配件</span>
              <span class="iconfont goRight">&#xe622;</span>
            </a>
          </li>
          <li class="nav__container__item">
            <a href="javascript:;">
              <span>生活 箱包</span>
              <span class="iconfont goRight">&#xe622;</span>
            </a>
          </li>
        </ul>
      </div>
      <swiper :options="swiperOption">
        <swiper-slide
          v-for="(item,index) in sliderList"
          :key="index"
        >
          <a :href="`/#/product/${item.id}`">
            <img
              :src="item.img"
              alt="product"
            >
          </a>
        </swiper-slide>
        <!-- 分页器 -->
        <div
          class="swiper-pagination"
          slot="pagination"
        ></div>
        <!-- 导航按钮 -->
        <div
          class="swiper-button-prev"
          slot="button-prev"
        ></div>
        <div
          class="swiper-button-next"
          slot="button-next"
        ></div>
      </swiper>
    </div>
    <div class="ads"></div>
    <div class="banner"></div>
    <div class="products"></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'
export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: 'cube',
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      },
      //   轮播接口数据
      sliderList: [
        {
          id: '42',
          img: '/imgs/slider/slide-1.jpg'
        },
        {
          id: '45',
          img: '/imgs/slider/slide-2.jpg'
        },
        {
          id: '46',
          img: '/imgs/slider/slide-3.jpg'
        },
        {
          id: '',
          img: '/imgs/slider/slide-4.jpg'
        },
        {
          id: '',
          img: '/imgs/slider/slide-5.jpg'
        }
      ],
    };
  },
  computed: {

  },
  methods: {

  },
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/iconfont.scss';
@import '../../assets/scss/base.scss';
.home {
  .box {
    &__nav {
      float: left;
      box-sizing: border-box;
      width: 264px;
      height: 451px;
      padding: 26px 0;
      background: #55585a;
      .nav__container {
        width: 100%;
        &__item {
          &:hover {
            background: #ff6600;
          }
          a {
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            height: 50px;
            padding: 0 30px;
            font-size: 16px;
            color: #ffffff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .goRight {
              display: inline-block;
              width: 10px;
              height: 16px;
              line-height: 16px;
              color: #e0e0e0;
              font-size: 16px;
            }
          }
        }
      }
    }
    .swiper-container {
      width: 962px;
      height: 451px;
      margin-left: 264px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>