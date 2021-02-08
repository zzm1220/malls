<!--
 * @Author: zhimin
 * @Date: 2021-01-27 10:04:53
 * @LastEditors: zhimin
 * @LastEditTime: 2021-02-05 11:11:53
 * @FilePath: \malls\src\pages\cart\Cart.vue
-->
<!-- 组件说明 -->
<template>
  <div class="cart">
    <order-header title="我的购物车">
      <template v-slot:tip>
        <span class="container__title__msg">
          温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算
        </span>
      </template>
    </order-header>
    <div class="cart__content">
      <div class="container">
        <div class="wrapper">
          <h3 class="header">
            <span class="col-2 inputBox">
              <input type="checkbox" id="selectAll" class="selectAll" />
              <label for="selectAll">全选</label>
            </span>
            <span class="col-3">商品名称</span>
            <span class="col-1">单价</span>
            <span class="col-2">数量</span>
            <span class="col-1">小计</span>
            <span class="col-1">操作</span>
          </h3>
          <div class="item" v-for="(item, index) in list" :key="index">
            <span class="col-2 inputBox">
              <input
                type="checkbox"
                id="selectAll"
                class="selectAll"
                :checked="item.productSelected"
              />
            </span>
            <span class="col-3">
              <img :src="item.productMainImage" :alt="item.productName" />
              <span>{{ item.productSubtitle }}</span>
            </span>
            <span class="col-1">{{ item.productPrice }}元</span>
            <span class="col-2">
              <span class="operate">
                <a href="javascript:;" class="iconfont minus">&#xe634;</a>
                <span>{{ item.quantity }}</span>
                <a href="javscript:;" class="iconfont plus">&#xe853;</a>
              </span>
            </span>
            <span class="col-1">{{ item.productTotalPrice }}元</span>
            <span class="col-1 iconfont del">&#xe6ac;</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderHeader from "../../components/OrderHeader";
import { get } from "../../util/request";
export default {
  components: {
    OrderHeader,
  },
  data() {
    return {
      list: [],
      allChecked: false,
      cartTotalPrice: 0,
      checkedNum: 0,
    };
  },
  computed: {},
  methods: {
    getCartList() {
      get("/carts").then((res) => {
        this.list = res.cartProductVoList || [];
        this.allChecked = res.selectedAll;
        this.cartTotalPrice = res.cartTotalPrice;
        this.checkedNum = res.cartTotalQuantity;
      });
    },
  },
  mounted() {
    this.getCartList();
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/iconfont.scss";
@import "../../assets/scss/base.scss";
.cart {
  &__content {
    box-sizing: border-box;
    padding: 30px 0 133px;
    background: #f5f5f5;
    .container {
      .wrapper {
        box-sizing: border-box;
        padding: 24px 43px;
        background: #ffffff;
        .selectAll {
          position: relative;
          width: 16px;
          height: 16px;
          margin-right: 16px;
          font-size: 14px;
          &::after {
            content: "";
            display: inline-block;
            position: absolute;
            top: 0;
            width: 16px;
            height: 16px;
            text-align: center;
            background: #ff6600;
          }
          &:checked::after {
            content: "✓";
            color: #ffffff;
            font-size: 12px;
            font-weight: bold;
          }
        }
        .header {
          height: 50px;
          display: flex;
          font-size: 14px;
          font-weight: bold;
          color: #666666;
          border-bottom: 1px solid #e5e5e5;
          .col-2.inputBox {
            text-align: left;
          }
        }
        .item {
          box-sizing: border-box;
          width: 100%;
          height: 50px;
          display: flex;
          align-items: center;
          padding: 22px 0;
          border-bottom: 1px solid #e5e5e5;
          .del {
            cursor: pointer;
          }
          .col-2.inputBox {
            text-align: left;
          }
          .col-2 .operate {
            display: flex;
            justify-content: space-around;
            margin: 0 auto;
            box-sizing: border-box;
            width: 150px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            border: 1px solid #E5E5E5;
            a.minus,a.plus{
              color: #333333;
            }
          }
          .col-3 {
            height: 50px;
            text-align: center;
            display: flex;
            align-items: center;
            img {
              width: 30px;
              height: 30px;
              margin-right: 40px;
            }
            span {
              font-size: 12px;
              font-weight: bold;
              color: #333333;
            }
          }
        }
      }
    }
  }
}
</style>