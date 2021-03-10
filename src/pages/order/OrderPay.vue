<!-- 组件说明 -->
<template>
  <div class="pay">
    <div class="pay__wrapper">
      <div class="pay__wrapper__item first">
        <div class="item__msg">
          <span class="iconfont checked">&#xe60a;</span>
          <div class="item__msg__detail">
            <h4>订单提交成功！去付款咯～</h4>
            <p>
              请在<span class="time">0小时30分钟</span>内完成支付,
              超时后将取消订单
            </p>
            <p>收货信息：{{ addressInfo }}</p>
          </div>
        </div>
        <div class="item__sum">
          <span
            >应付总额:<i class="item__sum__total">{{ totalMoney }}元</i></span
          >
          <span
            >订单详情
            <i class="iconfont arrow__toggle">&#xe61a;</i>
          </span>
        </div>
      </div>
      <div class="pay__wrapper__item second">
        <h3>选择以下支付方式付款</h3>
        <h4>支付平台</h4>
        <div class="select">
          <div
            :class="['select__item', payType == 1 ? 'checked' : '']"
            @click="selectPay(1)"
          >
            <img class="zfb" src="/imgs/pay/icon-ali.png" alt="zfb" />
          </div>
          <div
            :class="['select__item', payType == 2 ? 'checked' : '']"
            @click="selectPay(2)"
          >
            <img class="wxzf" src="/imgs/pay/icon-wechat.png" alt="wx" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode';
import { get, post } from "../../util/request";
export default {
  name: "order-pay",
  components: {},
  data() {
    return {
      orderNo: this.$route.query.orderNo,
      addressInfo: "",
      orderInfo: "",
      totalMoney: 0,
      payType: 1,
    };
  },
  mounted() {
    this.getOrderDetail();
  },
  computed: {},
  methods: {
    getOrderDetail() {
      get(`/orders/${this.orderNo}`).then((res) => {
        const item = res.shippingVo;
        this.totalMoney = res.payment;
        this.addressInfo = `${item.receiverName} ${item.receiverMobile} ${item.receiverCity} ${item.receiverDistrict} ${item.receiverAddress}`;
      });
    },
    selectPay(payType) {
      this.payType = payType;
      if (payType === 1) {
        this.payType = payType;
        window.open(`/#/order/alipay?orderNo=${this.orderNo}`, "_blank");
      } else if (payType === 2) {
        post("/pay", {
          orderId: this.orderNo,
          orderName: "shop",
          amount: 0.01,
          payType: 2,
        }).then(res => {
            console.log(res)
            return QRCode.toDataURL(res.content)
        }).then(url => {
            console.log(url)
        })
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/iconfont.scss";
.pay {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  &__wrapper {
    width: 1226px;
    margin: 0 auto;
    overflow: hidden;
    &__item {
      width: 100%;
      box-sizing: border-box;
      margin-top: 32px;
      &:last-child {
        margin-bottom: 260px;
      }
      padding: 62px 52px;
      background: #ffffff;
      &.first {
        display: flex;
        justify-content: space-between;
        .item__msg {
          display: flex;
          align-items: center;
          .checked {
            color: #7ec688;
            font-size: 90px;
            margin-right: 10px;
          }
          &__detail {
            h4 {
              font-size: 24px;
              font-weight: bold;
              color: #333333;
              line-height: 60px;
            }
            p {
              font-size: 14px;
              font-family: PingFang SC;
              color: #666666;
              .time {
                color: #ff6700;
              }
            }
          }
        }
        .item__sum {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          cursor: pointer;
          span {
            font-size: 14px;
          }
          .item__sum__total {
            margin-left: 6px;
            color: #ff803f;
            font-size: 22px;
          }
          .arrow__toggle {
            margin-left: 6px;
          }
        }
      }
      &.second {
        padding-top: 10px;
        h3 {
          margin-bottom: 16px;
          font-size: 20px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #333333;
          line-height: 60px;
          border-bottom: 1px solid #d7d7d7;
        }
        h4 {
          margin-bottom: 16px;
        }
        .select {
          display: flex;
          align-items: center;
          &__item {
            width: 188px;
            height: 64px;
            box-sizing: border-box;
            margin-right: 20px;
            padding: 12px 53px 14px 32px;
            border: 1px solid #d7d7d7;
            img {
              width: 100%;
              height: auto;
              border: 1px dashed #666666;
            }
            &.checked {
              border: 1px solid #ff6700;
            }
          }
        }
      }
    }
  }
}
</style>