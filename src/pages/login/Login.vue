<!--
 * @Author: zhimin
 * @Date: 2021-02-01 09:37:36
 * @LastEditors: zhimin
 * @LastEditTime: 2021-02-01 16:31:01
 * @FilePath: \malls\src\pages\login\Login.vue
-->
<template>
  <div class="login">
    <div class="login__header container">
      <div class="login__header__logo">
        <img
          src="/imgs/login-logo.png"
          alt="logo"
        >
      </div>
    </div>
    <div class="login__content">
      <div class="login__content__wrapper">
        <div class="login__title">
          <span class="user__login">账号登录</span>
          <span class="scan__login">扫码登录</span>
        </div>
        <input
          type="text"
          placeholder="邮箱/手机号码/小米ID"
          v-model="username"
          class="input__box username"
        >
        <input
          type="text"
          placeholder="密码"
          v-model="password"
          class="input__box password"
        >
        <a
          href="javascript:;"
          class="btn btn-huge"
          @click="handleLogin"
        >登录</a>
        <div class="login__footer">
          <div class="login__phone">手机短信登录/注册</div>
          <div class="login__register">
            <span class="register">立即注册</span>
            <span class="passwordForget">忘记密码？</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { post } from '../../util/request'
export default {
  name: 'login',
  data () {
    return {
      username: this.$store.state.username,
      password: '',
      userId: ''
    };
  },
  created () {

  },
  mounted () {

  },
  methods: {
    handleLogin () {
      const { username, password } = this
      post('/user/login', {
        username,
        password
      }).then(res => {
        this.userId = res.id
        this.$cookie.set('userId', res.id, { expires: '1M' })
        this.$store.dispatch('saveUsername', {
          username: res.username
        })
        this.$router.push('/home')
      })
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/scss/base';
.login {
  background: #ffffff;
  &__header {
    height: 112px;
    vertical-align: middle;
  }
  &__content {
    position: relative;
    width: 100%;
    height: 576px;
    background: url('/imgs/login-bg.jpg') no-repeat center 60%;
    background-size: cover;
    &__wrapper {
      box-sizing: border-box;
      width: 410px;
      height: 510px;
      padding: 0 30px;
      position: absolute;
      top: 38px;
      right: 200px;
      background: #ffffff;
      .login__title {
        height: 112px;
        line-height: 112px;
        text-align: center;
        font-size: 24px;
        .user__login {
          box-sizing: border-box;
          padding: 0 35px;
          color: #ff6600;
          border-right: 2px solid #d7d7d7;
        }
        .scan__login {
          box-sizing: border-box;
          padding: 0 35px;
          color: #666666;
        }
      }
      .input__box {
        box-sizing: border-box;
        display: block;
        width: 348px;
        height: 50px;
        padding: 18px;
        border: 1px solid #e5e5e5;
        color: #333333;
        &::placeholder {
          font-size: 14px;
          color: #999999;
        }
      }
      .password {
        margin-top: 20px;
        margin-bottom: 30px;
      }
      .login__footer {
        margin-top: 14px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        .login__phone {
          color: #ff6600;
          font-size: 14px;
        }
        .login__register {
          color: #999999;
          .register {
            padding-right: 7px;
            border-right: 1px solid #d7d7d7;
          }
          .passwordForget {
            padding-left: 7px;
          }
        }
      }
    }
  }
}
</style>
