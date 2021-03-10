<!-- 组件说明 -->
<template>
  <div class="ali">
      <loading v-if="isShowLoading"></loading>
      <div class="form" v-html="content "></div>
  </div>
</template>

<script>
import Loading from '../../components/Loading.vue';
import { post } from "../../util/request";
export default {
  name: "ali",
  components: {Loading},
  data() {
    return {
      isShowLoading: true,
      orderId: this.$route.query.orderNo,
      content: " ",
    };
  },
  mounted() {
    this.paySubmit();
  },
  computed: {},
  methods: {
    paySubmit() {
      post("/pay", {
        orderId: this.orderId,
        orderName: "shop",
        amount: 0.01,
        payType: 1,
      }).then(res => {
           this.content = res.content
           setTimeout(() => {
               document.forms[0].submit()
           }, 100);
      });
    },
  },
};
</script>

<style scoped lang="sass">
</style>