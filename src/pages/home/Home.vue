<!--
 * @Author: zhimin
 * @Date: 2021-01-27 10:04:53
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-31 22:40:16
 * @FilePath: /malls/src/pages/home/Home.vue
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
            <div class="children">
              <ul
                class="children__ul"
                v-for="(item,index) in menuList"
                :key="index"
              >
                <li
                  class="children__ul__item"
                  v-for="sub in item"
                  :key="sub.id"
                >
                  <a :href="`/#/product/${sub.id}`">
                    <img
                      :src="sub.img"
                      :alt="sub.name"
                    >
                    <span>{{sub.name}}</span>
                  </a>
                </li>
              </ul>
            </div>
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
    <div class="ads container">
      <div
        class="ads__item"
        v-for="item in adsList"
        :key="item.id"
      >
        <a :href="`/#/product/${item.id}`">
          <img
            class="ads__item__img"
            v-lazy="item.img"
            alt="ads"
          >
        </a>
      </div>
    </div>
    <div class="banner container">
      <a
        href="/#/product/30"
        class="banner__link"
      >
        <img
          class="banner__link__img"
          v-lazy="'/imgs/banner-1.png'"
          alt="banner"
        >
      </a>
    </div>
    <div class="products">
      <div class="products__content container">
        <h4 class="products__content__title">手机</h4>
        <div class="products__content__intro">
          <div class="products__content__banner">
            <a href="/#/product/35">
              <img
                v-lazy="'/imgs/mix-alpha.jpg'"
                alt="product"
              >
            </a>
          </div>
          <div class="products__content__list">
            <div
              class="list__item"
              v-for="item in phoneList"
              :key="item.id"
            >
              <a :href="`/#/product/${item.id}`">
                <div class="list__item__tile">{{item.status?"新品":"秒杀"}}</div>
                <img
                  class="list__item__img"
                  v-lazy="item.mainImage"
                  :alt="item.name"
                >
                <h4 class="list__item__title">{{item.name}}</h4>
                <p class="list__item__desc">{{item.subtitle}}</p>
              </a>
              <p
                class="list__item__price"
                @click="addCart(item.id)"
              >
                {{item.price|currency}}
                <span class="iconfont">&#xe6af;</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal 
      title="提示" 
      sureText="查看购物车" 
      btnType="1"
      modalType="middle"
      :showModal="showModal"
      @sureClick="goToCart"
      @closeClick="handleCloseClick"
      >
      <template v-slot:body>
        <div>
          商品添加成功！
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import Modal from '../../components/Modal'
import 'swiper/css/swiper.min.css'
import { get,post } from '../../util/request'
export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperSlide,
    Modal
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
      menuList: [
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米CC9',
          }, {
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米8青春版',
          }, {
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro',
          }, {
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '移动4G专区',
          }
        ],
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米CC9',
          }, {
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米8青春版',
          }, {
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro',
          }, {
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '移动4G专区',
          }
        ],
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米CC9',
          }, {
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米8青春版',
          }, {
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro',
          }, {
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '移动4G专区',
          }
        ],
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米CC9',
          }, {
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米8青春版',
          }, {
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro',
          }, {
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '移动4G专区',
          }
        ],
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米CC9',
          }, {
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米8青春版',
          }, {
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro',
          }, {
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '移动4G专区',
          }
        ],
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米CC9',
          }, {
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米8青春版',
          }, {
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro',
          }, {
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '移动4G专区',
          }
        ]
      ],
      adsList: [
        {
          id: 33,
          img: '/imgs/ads/ads-1.png'
        }, {
          id: 48,
          img: '/imgs/ads/ads-2.jpg'
        }, {
          id: 45,
          img: '/imgs/ads/ads-3.png'
        }, {
          id: 47,
          img: '/imgs/ads/ads-4.jpg'
        }
      ],
      phoneList: [],
      showModal: false
    };
  },
  mounted () {
    this.init()
  },
  computed: {

  },
  filters: {
    currency (val) {
      if (!val) return '0.00'
      return `￥${val.toFixed(2)}元`
    }
  },
  methods: {
    init () {
      get('/products', {
        categoryId: 100012,
        pageSize: 8
      }).then(res => {
        this.phoneList = res.list
      })

    },
    addCart (productId) {
      post('/carts',{
        productId,
        selected: true
      }).then(()=> { 
        this.showModal = true
      })
    },
    goToCart() {
      this.$router.push('/cart')
    },
    handleCloseClick() {
      this.showModal = false
    }
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
        position: relative;
        width: 100%;
        &__item {
          &:hover {
            background: #ff6600;
            & > .children {
              display: block;
              opacity: 1;
              transition: all 0.4s ease;
            }
          }
          & > a {
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
          .children {
            display: none;
            opacity: 0;
            transition: all 0.2s ease;
            // display: flex;
            // flex-direction: column;
            // justify-content: space-around;
            position: absolute;
            top: -26px;
            left: 264px;
            box-sizing: border-box;
            width: 964px;
            height: 451px;
            padding: 14px 23px;
            border: 1px solid #e5e5e5;
            background: #ffffff;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            z-index: 11;
            &__ul {
              display: flex;
              width: 100%;
              height: 72px;
              &__item {
                flex: 1;
                margin-right: 20px;
                img {
                  width: 35px;
                  height: 42px;
                  margin-right: 15px;
                  vertical-align: middle;
                }
                span {
                  font-size: 14px;
                  font-weight: bold;
                  color: #333333;
                }
              }
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
        height: 100%;
      }
    }
  }
  .ads {
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
    &__item {
      width: 296px;
      height: 167px;
      &__img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .banner {
    margin-top: 31px;
    margin-bottom: 50px;
    &__link {
      display: block;
      &__img {
        width: 100%;
      }
    }
  }
  .products {
    box-sizing: border-box;
    padding: 20px 0px 50px;
    background: #f5f5f5;
    &__content {
      &__title {
        width: 100%;
        height: 60px;
        line-height: 60px;
        font-size: 22px;
        font-weight: bold;
        color: #333333;
      }
      &__intro {
        display: flex;
        justify-content: space-between;
        .products__content__banner {
          width: 224px;
          height: 619px;
          & > a {
            display: inline-block;
            width: 100%;
            height: 100%;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        .products__content__list {
          width: 986px;
          height: 619px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          .list__item {
            width: 236px;
            height: 302px;
            text-align: center;
            background: #ffffff;
            a {
              display: inline-block;
              width: 100%;
              height: 90%;
            }
            &__tile {
              width: 67px;
              height: 24px;
              line-height: 24px;
              margin: 0 auto;
              background: #7ecf68;
              color: #ffffff;
              font-weight: bold;
              font-size: 14px;
              text-align: center;
            }
            &__img {
              display: block;
              width: auto;
              height: 156px;
              margin: 0 auto;
              margin-top: 24px;
            }
            &__title {
              margin-top: 14px;
              margin-bottom: 6px;
              font-weight: bold;
              color: #333333;
              font-size: 14px;
            }
            &__desc {
              margin-bottom: 13px;
              font-size: 12px;
              font-weight: bold;
              color: #999999;
            }
            &__price {
              font-size: 14px;
              font-weight: bold;
              color: #f20a0a;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>