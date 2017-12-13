<template>
  <div class='content-page'>
    <p class='title' v-if='title'>{{title}}</p>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        default: ''
      }
    }
  }
</script>
<style lang="less">
  .content-page{
    width:100%;
    background:#fff;
    margin-top:0.1rem;
    >img{
      display:block;
      width:100%;
    }
    .title{
      font-size:0.16rem;
      color:#242424;
      line-height:0.49rem;
      text-align:center;
    }
  }
</style>