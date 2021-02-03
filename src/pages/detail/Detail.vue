<!--
 * @Author: zhimin
 * @Date: 2021-01-27 10:04:53
 * @LastEditors: zhimin
 * @LastEditTime: 2021-02-03 17:09:42
 * @FilePath: \malls\src\pages\detail\Detail.vue
-->
<!-- 组件说明 -->
<template>
  <div class="detail">
    <ProductNav :height="152">
    </ProductNav>
    <div class="wrapper">
      <div class="container">
        <div class="swiper">
          <swiper :options="swiperOption">
            <swiper-slide
              v-for="(item,index) in swiperList"
              :key="index"
            >
              <img :src="item.img">
            </swiper-slide>
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
        <div class="content">
          <h2 class="content__title">小米8</h2>
          <p class="content__desc">相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红 外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏</p>
          <h4 class="content_-delivery">小米自营</h4>
          <div class="content__price">
            <span class="currentPrice">2599元</span>
            <span class="oldPrice">2999元</span>
          </div>
          <div class="content__address">
            <p>
              <i class="iconfont">&#xe648;</i>
              <span class="address__modify">修改</span>
            </p>
            <p class="stock">有现货</p>
          </div>
          <h5 class="select__version">选择版本</h5>
          <div class="versions">
            <span class="version1">6GB+64GB 全网通</span>
            <span class="version2">4GB+64GB 移动4G</span>
          </div>
          <h5 class="select__colors">选择颜色</h5>
          <div class="colors">
            <span>深空灰</span>
          </div>
          <div class="content__detail">
            <p class="detail__msg">
              <span>小米8 6GB+64GB 全网通 深灰色</span>
              <span>1099元 1699元</span>
            </p>
            <p class="total">总计：1099元</p>
          </div>
          <div class="content__cart">
            <a
              href="javascript:;"
              class="btn"
            >加入购物车</a>
            <span>喜欢</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'
import ProductNav from '../../components/ProductNav'
export default {
  components: {
    ProductNav,
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      swiperList: [
        {
          id: 1,
          img: '/imgs/detail/phone-1.jpg'
        },
        {
          id: 2,
          img: '/imgs/detail/phone-2.jpg'
        },
        {
          id: 3,
          img: '/imgs/detail/phone-3.jpg'
        },
        {
          id: 4,
          img: '/imgs/detail/phone-4.jpg'
        }
      ]
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
</style>