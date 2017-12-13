<template>
  <div class='loading' v-show='isLoad'>
    <div class='load'>
      <i></i>
      <span>正在加载中...</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isLoad: false
    }
  },
  methods: {
    show () {
      this.isLoad = true
    },
    hide () {
      this.isLoad = false
    }
  }
}
</script>
<style lang="less">
.loading{
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.4);
  position:fixed;
  top:0;
  left:0;
  z-index:1000;
  .load{
    width:100%;
    margin-top:50%;
    i{
      display:block;
      width:25px;
      height:25px;
      background:red;
      margin:0.2rem auto;
      animation: load 1s linear infinite;
    }
    span{
      font-size:0.16rem;
      color:#fff;
      display:block;
      text-align:center;
    }
  }
}
@-webkit-keyframes load {
  0% {
    transform:rotate(0deg)
  }
  100% {
    transform:rotate(360deg)
  }
}
</style>