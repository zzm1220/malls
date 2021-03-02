<!-- 组件说明 -->
<template>
  <div class="confirm">
    <div class="container">
      <div class="wrapper">
        <h3 class="address__title">收获地址</h3>
        <ul class="address__list">
          <li
            class="address__item"
            v-for="(item, index) in addressList"
            :key="index"
            :class="{checked:index==checkedIndex}"
            @click="checkedIndex=index"
          >
            <div class="address__item__name">{{ item.receiverName }}</div>
            <div class="address__item__telephone">
              {{ item.receiverMobile }}
            </div>
            <div class="address__item__content">
              {{
                item.receiverProvince +
                " " +
                item.receiverCity +
                " " +
                item.receiverDistrict +
                " " +
                item.receiverAddress
              }}
            </div>
            <div class="address__item__control">
              <span class="iconfont" @click="openDelAddressModal(item)"
                >&#xe659;</span
              >
              <span class="iconfont" @click="openEditAddressModal(item)"
                >&#xe632;</span
              >
            </div>
          </li>
          <li class="address__new">
            <div class="address__new__add" @click="openAddressModal">
              <span class="iconfont">&#xe853;</span>
            </div>
            <p class="address__new__tip">添加新地址</p>
          </li>
        </ul>
        <h3 class="address__product">商品</h3>
        <ul class="product__list">
          <li class="good">
            <div class="good__name">
              <img src="" alt="" />
              <span>小米手机</span>
            </div>
            <div class="good__price"></div>
            <div class="good__total"></div>
          </li>
        </ul>
        <h3 class="way">配送方式</h3>
        <p>包邮</p>
        <h3 class="page">发票</h3>
        <p><span>电子发票</span><span>个人</span></p>
        <div class="btn-group">
            <a href="javascript:;" class="btn">返回购物车</a>
            <a href="javascript:;" class="btn" @click="orderSubmit">去结算</a>
        </div>
      </div>
    </div>
    <modal
      title="添加收获地址"
      :showModal="isAddAddress"
      btnType="3"
      sureText="保存"
      cancelText="取消"
      @closeClick="isAddAddress = false"
      @sureClick="submitAddress"
    >
      <template v-slot:body>
        <div class="editor">
          <div class="editor__item">
            <input
              class="editor__item__name"
              type="text"
              placeholder="姓名"
              v-model="checkedItem.receiverName"
            />
            <input
              class="editor__item__phone"
              type="text"
              placeholder="手机号"
              v-model="checkedItem.receiverMobile"
            />
          </div>
          <div class="editor__item">
            <select
              name="province"
              id="province"
              class="editor__item__select"
              v-model="checkedItem.receiverProvince"
            >
              <option value="北京">北京</option>
              <option value="天津">天津</option>
              <option value="河北">河北</option>
            </select>
            <select
              name="city"
              id="city"
              class="editor__item__select"
              v-model="checkedItem.receiverCity"
            >
              <option value="北京">北京</option>
              <option value="天津">天津</option>
              <option value="石家庄">石家庄</option>
            </select>
            <select
              name="district"
              id="district"
              class="editor__item__select"
              v-model="checkedItem.receiverDistrict"
            >
              <option value="海淀">海淀</option>
              <option value="海淀">丰台</option>
              <option value="海淀">昌平</option>
              <option value="海淀">顺义</option>
            </select>
          </div>
          <div class="editor__item">
            <textarea
              name="address"
              id="address"
              class="editor__item__textarea"
              placeholder="详细地址"
              v-model="checkedItem.receiverAddress"
            ></textarea>
          </div>
          <div class="editor__item">
            <input
              type="text"
              placeholder="邮政编号"
              class="editor__item__number"
              v-model="checkedItem.receiverZip"
            />
          </div>
        </div>
      </template>
    </modal>
    <modal
      title="删除收获地址"
      :showModal="isShowDelModal"
      btnType="3"
      sureText="确认"
      cancelText="取消"
      @cancelClick="isShowDelModal = false"
      @closeClick="isShowDelModal = false"
      @sureClick="delAddress"
    >
      <template v-slot:body>
        <div>您确认要删除该地址吗？</div>
      </template>
    </modal>
  </div>
</template>

<script>
import { get, post, del, put } from "../../util/request";
import Modal from "../../components/Modal";
export default {
  name: "order-confirm",
  components: {
    Modal,
  },
  data() {
    return {
      addressList: [],
      shopList: [],
      cartTotalPrice: 0,
      checkedItem: {},
      checkedIndex: 0,
      userAction: 0, // 0 新增， 1 删除 2 编辑
      isAddAddress: false,
      isShowDelModal: false,
    };
  },
  computed: {},
  methods: {
    getAddressList() {
      get("/shippings").then((res) => {
        this.addressList = res.list;
      });
    },
    getShopList() {
      get("/carts").then((res) => {
        const list = res.cartProductVoList;
        this.cartTotalPrice = res.cartTotalPrice;
        this.shopList = list.filter((item) => item.productSelected);
      });
    },
    openAddressModal() {
      this.userAction = 0; // 新增
      this.checkedItem = {};
      this.isAddAddress = true;
    },
    openDelAddressModal(item) {
      this.userAction = 1; // 删除
      this.checkedItem = item;
      this.isShowDelModal = true;
    },
    openEditAddressModal(item) {
      this.userAction = 2; // 编辑
      this.checkedItem = item;
      this.isAddAddress = true;
    },
    closeModal() {
      this.isAddAddress = false;
      this.isShowDelModal = false;
      this.checkedItem = {};
    },
    submitAddress() {
      const { checkedItem, userAction } = this;
      let errMsg = "";
      if (userAction == 0 || userAction == 2) {
        const {
          receiverName,
          receiverMobile,
          receiverProvince,
          receiverCity,
          receiverDistrict,
          receiverAddress,
        } = checkedItem;
        if (!receiverName) {
          errMsg = "请输入name";
        } else if (!receiverMobile) {
          errMsg = "请输入手机号";
        } else if (!receiverProvince) {
          errMsg = "请选择省份";
        } else if (!receiverCity) {
          errMsg = "请选择city";
        } else if (!receiverDistrict || !receiverAddress) {
          errMsg = "请输入收获地址";
        }
        if (errMsg) {
          this.$message.error(errMsg);
          return;
        }
      }
      if (userAction == 0) {
        post(`/shippings`, checkedItem).then((res) => {
          console.log(res);
          this.closeModal();
          this.getAddressList();
          this.$message.success("操作成功");
        });
      } else if (userAction == 2) {
        put(`/shippings/${checkedItem.id}`, checkedItem).then((res) => {
          console.log(res);
          this.closeModal();
          this.getAddressList();
          this.$message.success("操作成功");
        });
      }
    },
    delAddress() {
      del(`/shippings/${this.checkedItem.id}`).then((res) => {
        console.log(res);
        this.closeModal();
        this.getAddressList();
        this.$message.success("删除地址成功");
      });
    },
    orderSubmit() {
        const item = this.addressList[this.checkedIndex]
        if (!item) {
            this.$message.error('请选择收获地址')
            return
        }
        post('/orders',{
            shippingId: item.id
        }).then(res => {
            console.log(res)
            this.$router.push({
                path: '/order/pay',
                query: {
                    orderNo: res.orderNo
                }
            })
        })
    }
  },
  mounted() {
    this.getAddressList();
    this.getShopList();
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/iconfont.scss";
@import "../../assets/scss/base.scss";
.confirm {
  width: 100%;
  padding-top: 32px;
  padding-bottom: 204px;
  background: #f5f5f5;
  .container {
    box-sizing: border-box;
    padding: 38px 68px;
    background: #ffffff;
    .wrapper {
      .address__title {
        font-size: 20px;
        font-weight: 400;
        color: #333333;
      }
      .address__list {
        margin-top: 20px;
        overflow: hidden;
        color: #999999;
        .address__item {
          box-sizing: border-box;
          width: 271px;
          height: 180px;
          padding: 20px;
          float: left;
          margin-right: 20px;
          border: 1px solid #e5e5e5;
          position: relative;
          cursor: pointer;
          &.checked {
              border: 1px solid #ff5670;
          }
          &__name {
            margin-bottom: 20px;
          }
          &__control {
            position: absolute;
            width: 231px;
            bottom: 20px;
            display: flex;
            justify-content: space-between;
          }
        }
        .address__new {
          box-sizing: border-box;
          width: 271px;
          height: 180px;
          float: left;
          border: 1px solid #e5e5e5;
          &__add {
            width: 30px;
            height: 30px;
            line-height: 30px;
            margin: 64px auto;
            background: #e0e0e0;
            border-radius: 50%;
            text-align: center;
            cursor: pointer;
          }
          &__tip {
            width: 72px;
            height: 14px;
            margin: -60px auto;
            font-size: 14px;
            font-weight: 400;
          }
        }
      }
      .address__product {
        margin-top: 20px;
        font-size: 20px;
        font-weight: 500;
        color: #333333;
      }
    }
  }
  .editor {
    &__item {
      margin-bottom: 14px;
      &__name {
        box-sizing: border-box;
        width: 283px;
        height: 40px;
        line-height: 40px;
        margin-right: 14px;
        padding: 0 15px;
        border: 1px solid #e5e5e5;
      }
      &__phone {
        box-sizing: border-box;
        width: 283px;
        height: 40px;
        padding: 0 15px;
        border: 1px solid #e5e5e5;
      }
      &__select {
        height: 40px;
        line-height: 40px;
        border: 1px solid #e5e5e5;
        margin-right: 15px;
      }
      &__textarea {
        box-sizing: border-box;
        height: 62px;
        width: 100%;
        padding: 13px 15px;
      }
      &__number {
        box-sizing: border-box;
        width: 283px;
        height: 40px;
        padding: 0 15px;
        border: 1px solid #e5e5e5;
      }
    }
  }
}
</style>