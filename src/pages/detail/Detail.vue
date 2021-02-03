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
    <ProductNav :height="152"> </ProductNav>
    <div class="wrapper">
      <div class="container">
        <div class="swiper">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(item, index) in swiperList" :key="index">
              <img :src="item.img" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <!-- 导航按钮 -->
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
        <div class="content">
          <h2 class="content__title">小米8</h2>
          <p class="content__desc">
            相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS /
            骁龙845处理器 / 红 外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏
          </p>
          <h4 class="content__delivery">小米自营</h4>
          <div class="content__price">
            <span class="currentPrice">2599元</span>
            <span class="oldPrice">2999元</span>
          </div>
          <div class="content__address">
            <p class="content__address__message">
              <i class="iconfont address__icon">&#xe648;</i>
              <span class="address">北京 北京市 朝阳区 安定门街道</span>
              <span class="address__modify">修改</span>
            </p>
            <p class="stock">有现货</p>
          </div>
          <h5 class="select__version">选择版本</h5>
          <div class="versions">
            <span class="version selected">6GB+64GB 全网通</span>
            <span class="version">4GB+64GB 移动4G</span>
          </div>
          <h5 class="select__colors">选择颜色</h5>
          <div class="colors">
            <span>深空灰</span>
          </div>
          <div class="content__detail">
            <p class="detail__msg">
              <span class="detail__msg__name"
                >小米8 6GB+64GB 全网通 深灰色</span
              >
              <span class="detail__msg__price">1099元</span>
            </p>
            <p class="total">总计：1099元</p>
          </div>
            <a href="javascript:;" class="btn btn-huge">加入购物车</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.min.css";
import ProductNav from "../../components/ProductNav";
export default {
  components: {
    ProductNav,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        // autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      swiperList: [
        {
          id: 1,
          img: "/imgs/detail/phone-1.jpg",
        },
        {
          id: 2,
          img: "/imgs/detail/phone-2.jpg",
        },
        {
          id: 3,
          img: "/imgs/detail/phone-3.jpg",
        },
        {
          id: 4,
          img: "/imgs/detail/phone-4.jpg",
        },
      ],
    };
  },
  computed: {},
  methods: {},
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/iconfont.scss";
@import "../../assets/scss/base.scss";
.wrapper {
  width: 100%;
  height: 870px;
  background: #ffffff;
  .swiper {
    box-sizing: border-box;
    width: 530px;
    float: left;
    padding-right: 60px;
    .swiper-container {
      width: 100%;
      height: 100%;
      text-align: center;
      --swiper-navigation-color: #d7d7d7; /* 单独设置按钮颜色 */
      --swiper-navigation-size: 15px; /* 设置按钮大小 */
      --swiper-pagination-color: #999999; /* 两种都可以 */
      img {
        width: 384px;
        height: 486px;
      }
    }
  }
  .content {
    width: 690px;
    float: left;
    &__title {
      font-size: 28px;
      color: #333333;
      line-height: 60px;
    }
    &__desc {
      font-size: 14px;
      color: #999999;
      line-height: 22px;
    }
    &__delivery {
      margin-top: 26px;
      font-size: 16px;
      font-weight: bold;
      color: #ff6700;
      line-height: 22px;
    }
    &__price {
      margin-top: 14px;
      .currentPrice {
        color: #ff6700;
        font-size: 20px;
        margin-right: 10px;
      }
      .oldPrice {
        color: #999999;
        font-size: 14px;
        text-decoration: line-through;
      }
    }
    &__address {
      box-sizing: border-box;
      width: 584px;
      height: 108px;
      padding: 31px 34px;
      margin-top: 28px;
      border: 1px solid #e5e5e5;
      background: #fafafa;
      &__message {
        .address__icon {
          margin-right: 10px;
          font-size: 20px;
          vertical-align: middle;
        }
        .address {
          margin-right: 20px;
          color: #666666;
          font-size: 14px;
        }
        .address__modify {
          color: #ff6700;
          font-size: 14px;
        }
      }
      .stock {
        margin-top: 15px;
        font-size: 14px;
        color: #ff6600;
      }
    }
    .select__version {
      margin: 30px 0 20px;
      font-size: 18px;
      font-weight: bold;
      color: #333333;
    }
    .versions {
      width: 584px;
      height: 50px;
      .version {
        display: inline-block;
        box-sizing: border-box;
        width: 287px;
        height: 50px;
        line-height: 50px;
        border: 1px solid #e5e5e5;
        font-size: 16px;
        font-weight: bold;
        color: #333333;
        text-align: center;
        margin-right: 10px;
        &:last-child {
          margin-right: 0;
        }
        &.selected {
          border: 1px solid #ff6600;
          color: #ff6600;
        }
      }
    }
    .select__colors {
      margin: 30px 0 20px;
      font-size: 18px;
      font-weight: bold;
      color: #333333;
    }
    .colors {
      box-sizing: border-box;
      width: 287px;
      height: 50px;
      margin-bottom: 50px;
      padding: 17px 0;
      text-align: center;
      border: 1px solid #ff6600;
    }
    &__detail {
      box-sizing: border-box;
      width: 584px;
      height: 108px;
      margin-bottom: 30px;
      padding: 24px 30px 0;
      background: #fafafa;
      .detail__msg {
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        font-weight: bold;
        color: #333333;
      }
      .total {
        margin-top: 18px;
        font-size: 24px;
        font-weight: bold;
        color: #ff6600;
      }
    }
  }
}
</style>
