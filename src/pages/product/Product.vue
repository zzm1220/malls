<!--
 * @Author: zhimin
 * @Date: 2021-01-27 10:04:53
 * @LastEditors: zhimin
 * @LastEditTime: 2021-02-03 16:34:02
 * @FilePath: \malls\src\pages\product\Product.vue
-->
<!-- 组件说明 -->
<template>
  <div class="product">
    <ProductNav :height="152">
      <template v-slot:navBtn>
        <a
          href="javascript:;"
          class="btn"
          @click="buy"
        >立即购买</a>
      </template>
    </ProductNav>
    <div class="product__main">
      <h3 class="product__main__title">小米8</h3>
      <p class="product__main__desc">8周年旗舰版</p>
      <div class="product__main__intro">
        <span class="item">全球首款双频 GP</span>
        <span class="item">骁龙845</span>
        <span class="item">AI 变焦双摄</span>
        <span class="item">红外人脸识别</span>
      </div>
      <div class="product__main__price">
        <span class="currentPrice">￥2599</span>
        <span class="oldPrice">￥2999</span>
      </div>
    </div>
    <div class="product__detail">
      <img
        class="product__detail__img"
        src="/imgs/product/product-bg-2.png"
        alt="product__detail"
      >
    </div>
    <div class="product__ad"></div>
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
      <!-- 如果需要分页器 -->
      <div
        class="swiper-pagination"
        slot="pagination"
      ></div>
    </swiper>
    <div class="product__video">
      <h3 class="product__video__title">60帧超慢动作摄影</h3>
      <h3 class="product__video__title">慢慢回味每一瞬间的精彩</h3>
      <p class="product__video__desc1">后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！</p>
      <p class="product__video__desc2">更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
      <div
        class="product__video__wrapper"
        @click="showSlide=true"
      >
        <img
          class="video__img"
          src="/imgs/product/gallery-1.png"
          alt=""
        >
      </div>
      <div class="product__video__box">
        <div
          class="overlay"
          v-if="showSlide"
        ></div>
        <div
          class="video"
          :class="{'slide':showSlide}"
        >
          <span
            class="iconfont video__close"
            @click="showSlide=false"
          >&#xe647;</span>
          <video
            src="/imgs/product/video.mp4"
            muted
            autoplay
            controls="controls"
          >
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'
import ProductNav from '../../components/ProductNav'
import { get } from '../../util/request'
export default {
  components: {
    ProductNav,
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      showSlide: false,
      product: null,
      swiperOption: {
        autoplay: true,
        loop: true,
        centeredSlides: true,
        centeredSlidesBounds: true,
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicMainBullets: 2,
        }
      },
      sliderList: [
        {
          id: '1',
          img: '/imgs/product/gallery-2.png'
        },
        {
          id: '2',
          img: '/imgs/product/gallery-3.png'
        },
        {
          id: '3',
          img: '/imgs/product/gallery-4.png'
        },
        {
          id: '54',
          img: '/imgs/product/gallery-5.jpg'
        },
        {
          id: '5',
          img: '/imgs/product/gallery-6.jpg'
        }
      ]
    };
  },
  computed: {

  },
  methods: {
    getProduct () {
      const id = this.$route.params.id
      get(`/products/${id}`).then(res => {
        this.product = res;
      })
    },
    buy () {
      const id = this.$route.params.id
      this.$router.push(`/detail/${id}`)
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/iconfont.scss';
.product {
  &__main {
    box-sizing: border-box;
    width: 100%;
    height: 718px;
    padding-top: 55px;
    background: url('/imgs/product/product-bg-1.png') no-repeat center;
    background-size: cover;
    color: #333333;
    text-align: center;
    &__title {
      font-size: 80px;
      font-weight: bold;
    }
    &__desc {
      margin-top: 13px;
      height: 23px;
      font-size: 23px;
    }
    &__intro {
      width: 482px;
      margin: 22px auto;
      display: flex;
      justify-content: space-around;
      font-size: 16px;
      .item {
        position: relative;
        &::after {
          content: '|';
          position: absolute;
          top: 4px;
          right: -14px;
          font-size: 10px;
        }
        &:last-child::after {
          content: '';
        }
      }
    }
    &__price {
      margin-top: 40px;
      .currentPrice {
        font-size: 18px;
        margin-right: 4px;
      }
      .oldPrice {
        font-size: 15px;
        text-decoration: line-through;
      }
    }
  }
  &__detail {
    box-sizing: border-box;
    width: 100%;
    height: 480px;
    padding: 38px 0 45px;
    background: #ffffff;
    &__img {
      display: block;
      width: 1226px;
      height: 397px;
      margin: 0 auto;
      border: 1px dashed #333333;
    }
  }
  &__ad {
    width: 100%;
    height: 638px;
    margin-bottom: 36px;
    background: url('/imgs/product/product-bg-3.png') no-repeat center;
    background-size: cover;
  }
  .swiper-container {
    width: 100%;
    height: 356px;
    .swiper-wrapper {
      .swiper-slide {
        width: 28%;
        height: 356px;
        img {
          width: 100%;
          height: 326px;
        }
      }
    }
  }
  &__video {
    box-sizing: border-box;
    width: 100%;
    height: 1044px;
    padding-top: 82px;
    margin-top: 98px;
    background: #000000;
    text-align: center;
    &__title {
      font-size: 40px;
      color: #ffffff;
    }
    &__desc1 {
      margin-top: 20px;
      font-size: 20px;
      color: #ffffff;
      font-weight: bold;
    }
    &__desc2 {
      font-size: 20px;
      color: #ffffff;
      font-weight: bold;
    }
    &__wrapper {
      margin: 40px auto 0;
      width: 1226px;
      height: 540px;
      img {
        width: 100%;
        height: auto;
      }
    }
    &__box {
      .overlay {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: #333333;
        opacity: 0.4;
        z-index: 299;
      }
      .video {
        width: 1000px;
        height: 536px;
        position: fixed;
        top: -50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 399;
        opacity: 0;
        transition: all 0.4s;
        &.slide {
          opacity: 1;
          top: 50%;
        }
        video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          outline: none;
        }
        &__close {
          position: absolute;
          top: 10px;
          right: 10px;
          background: red;
          border-radius: 50%;
          color: #ffffff;
          z-index: 499;
          cursor: pointer;
        }
      }
    }
  }
}
</style>