<!-- 组件说明 -->
<template>
    <div class="header">
        <div class="header__top container">
            <ul class="header__top__container">
                <li><a href="javascript:;">松果出行</a></li>
                <li><a href="javascript:;">MIUI</a></li>
                <li><a href="javascript:;">云服务</a></li>
                <li><a href="javascript:;">协议规则</a></li>
            </ul>
            <ul class="header__top__user">
                <li><a href="javascript:;">登录</a></li>
                <li><a href="javascript:;">注册</a></li>
                <li class="cart">
                    <a href="javascript:;">
                        <span class="iconfont">&#xe6af;</span>
                        购物车
                        <span class="num">(0)</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="header__bar container">
            <div class="header__bar__logo">
                <a href="/#/home"></a>
            </div>
            <div class="header__bar__menu"></div>
            <div class="header__bar__search"></div>
        </div>
    </div>
</template>

<script>
    //import x from ''
    export default {
        name: 'nav-header',
        components: {

        },
        data () {
            return {

            };
        },
        computed: {

        },
        methods: {

        },
    }
</script>

<style scoped lang="scss">
@import "../assets/scss/iconfont.scss";
@import "../assets/scss/base.scss";
.header{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    background: #333333;
    &__top {
        display: flex;
        justify-content: space-between;
        &__container {
            flex-basis: 213px;
            display: flex;
            justify-content: space-between;
            a {
                color: #B0B0B0;
            }
        }
        &__user {
            flex-basis: 184px;
            height: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            a {
                color: #B0B0B0;
            }
            .cart {
                width: 110px;
                text-align: center;
                background: #FF6600;
                a {
                    color: #ffffff;
                }
            }
        }
    }
    &__bar {
        height: 112px;
        background: #ffffff;
    }
}
</style>