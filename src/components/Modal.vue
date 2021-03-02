<!--
 * @Author: zhimin
 * @Date: 2021-01-30 17:22:55
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-31 22:13:23
 * @FilePath: /malls/src/components/Modal.vue
-->
<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal__dialog">
        <div class="modal__dialog__header">
          <span>{{ title }}</span>
          <a href="javascript:;" class="iconfont close" @click="handleClose"
            >&#xe647;</a
          >
        </div>
        <div class="modal__dialog__body">
          <slot name="body"></slot>
        </div>
        <div class="modal__dialog__footer">
          <a
            href="javascript:;"
            class="btn"
            v-if="btnType == 1"
            @click="handleSureClick"
            >{{ sureText }}</a
          >
          <a
            href="javascript:;"
            class="btn"
            v-if="btnType == 2"
            @click="handleCancelClick"
            >{{ cancelText }}</a
          >
          <div class="btn-group" v-if="btnType == 3">
            <a href="javascript:;" class="btn" @click="handleSureClick">{{sureText}}</a>
            <a
              href="javascript:;"
              class="btn btn-default"
              @click="handleCancelClick"
              >{{ cancelText }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  props: {
    // 弹框类型： 小small，中middle，大large，form
    modalType: {
      type: String,
      default: "form",
    },
    title: String,
    btnType: String,
    sureText: {
      type: String,
      default: "确定",
    },
    cancelText: {
      type: String,
      default: "取消",
    },
    showModal: Boolean,
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    handleSureClick() {
      this.$emit("sureClick");
    },
    handleCancelClick() {
      this.$emit("cancelClick");
    },
    handleClose() {
      this.$emit("closeClick");
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/iconfont.scss";
@import "../assets/scss/base.scss";
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 199;
  .mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000000;
    opacity: 0.5;
  }
  &.slide-enter,
  &.slide-leave-to {
    top: -100%;
  }
  &.slide-enter-active,
  &.slide-leave-active {
    transition: top 0.4s ease-in;
  }
  &__dialog {
    position: absolute;
    top: 30%;
    left: 50%;
    width: 660px;
    height: auto;
    transform: translate(-330px);
    background: #ffffff;
    opacity: 1;
    &__header {
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      height: 60px;
      line-height: 60px;
      padding: 0 26px;
      color: #333333;
      font-size: 16px;
      background: #f5f5f5;
      .close {
        color: #333333;
        &:hover {
          transform: scale(1.5);
          transition: transform 0.2s ease;
        }
        transition: transform 0.2s ease;
      }
    }
    &__body {
      box-sizing: border-box;
      padding: 42px 40px 54px 40px;
      background: #ffffff;
      font-size: 14px;
    }
    &__footer {
      width: 100%;
      height: 82px;
      line-height: 82px;
      text-align: center;
      background: #f5f5f5;
    }
  }
}
</style>
