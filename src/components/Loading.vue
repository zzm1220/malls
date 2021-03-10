<!-- 组件说明 -->
<template>
    <div class="loading">
        <img src="/imgs/loading-svg/loading-bubbles.svg" alt="loading">
    </div>
</template>

<script>
    export default {
        name: 'loading',
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
.loading {
    height: 80px;
    line-height: 80px;
    text-align: center;
    padding: 30px;
    img {
        height: 100%;
    }
}
</style>