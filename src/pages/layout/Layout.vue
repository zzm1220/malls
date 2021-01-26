<!-- 组件说明 -->
<template>
    <div class="">
        <nav-header />
        <router-view></router-view>
        <nav-footer />
    </div>
</template>

<script>
    import NavHeader from '../../components/NavHeader'
    import NavFooter from '../../components/NavFooter'
    export default {
        name: 'layout',
        components: {
            NavHeader,
            NavFooter
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

<style scoped>

</style>