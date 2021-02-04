<!--
 * @Author: zhimin
 * @Date: 2021-01-27 10:04:53
 * @LastEditors: zhimin
 * @LastEditTime: 2021-02-04 17:27:06
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
            <span class="inputBox">
              <input type="checkbox" id="selectAll" class="selectAll" />
              <label for="selectAll">全选</label>
            </span>
            <span class="name">商品名称</span>
            <span class="price">单价</span>
            <span class="num">数量</span>
            <span class="total">小计</span>
            <span class="operate">操作</span>
          </h3>
          <div class="item">
            <span class="">
              <input type="checkbox" id="selectAll" class="selectAll" />
            </span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderHeader from "../../components/OrderHeader";
export default {
  components: {
    OrderHeader,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style scoped lang="scss">
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
        .header {
          height: 50px;
          display: flex;
          font-size: 14px;
          font-weight: bold;
          color: #666666;
          border-bottom: 1px solid #e5e5e5;
          .inputBox {
            flex-basis: 77px;
            margin-right: 30px;
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
          }
          .name {
            flex-basis: 470px;
            box-sizing: border-box;
            padding-left: 110px;
          }
          .price {
            flex-basis: 90px;
            text-align: center;
          }
          .num {
            flex-basis: 150px;
            text-align: center;
          }
          .total {
            flex-basis: 178px;
            text-align: center;
          }
          .operate {
            flex-basis: 160px;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>