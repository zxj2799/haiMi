<template>
  <div class='memain'>
    {{msg}}
  </div>
</template>
<script>
  export default {
    data () {
      return {
        msg: '这是我的页面'
      }
    }
  }
</script>
<style lang="less">
  .memain{
    flex:1;
    overflow:auto;
  }
</style>