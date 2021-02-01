<!-- 组件说明 -->
<template>
    <div class="product">
        <ProductNav :height="12">
            <template v-slot:navBtn>
                <a href="javascript:;" class="btn">立即购买</a>
            </template>
        </ProductNav>
        <div class="test">1111111</div>
        <div class="test">111</div>
        <div class="test">111</div>
        <div class="test">111</div>
        <div class="test">111</div>
        <div class="test">111</div>
        <div class="test">111</div>
        <div class="test">111</div>
        <div class="test">111</div>
        <div class="test">111</div>
    </div>
</template>

<script>
    import ProductNav from '../../components/ProductNav'
    export default {
        components: {
            ProductNav
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
.test {
    height: 220px;
}
</style>