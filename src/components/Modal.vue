<!--
 * @Author: zhimin
 * @Date: 2021-01-30 17:22:55
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-30 17:30:50
 * @FilePath: \malls\src\components\Modal.vue
-->
<template>
  <div class="modal">
    <div class="mask"></div>
    <div class="modal-dialog">
      <div class="modal-header">
        <span>标题</span>
        <a
          href="javascript:;"
          class="iconfont"
        >&#xe647;</a>
      </div>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
      <div class="modal-footer">
        <a
          href="javascript:;"
          class="btn"
        >确定</a>
        <a
          href="javascript:;"
          class="btn"
        >取消</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: {

  },
  data () {
    return {

    };
  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
};
</script>

<style scoped lang="scss">
@import '../assets/scss/iconfont.scss';
</style>
