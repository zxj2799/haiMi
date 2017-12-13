<template>
  <div class='search-bar' :class='[theme]'>
    <p>
      <input type="text" placeholder="搜索宝贝" v-model="searchVal"/>
      <span class="iconfont icon-sousuo"></span>
      <i v-show="clearFlag" @click="clearVal">×</i>
    </p>
    <router-link 
      :to="{name:'Search',params:{'searchVal':searchVal}}"
      class='submit'
    >搜索</router-link>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    theme: {
      default: 'black'// || "white"
    },
    defaultVal: {
      default: ''
    }
  },
  data () {
    return {
      searchVal: this.defaultVal
    }
  },
  computed: {
    clearFlag () {
      return this.searchVal.length >= 1
    }
  },
  methods: {
    clearVal: function () {
      this.searchVal = ''
    }
  }
}
</script>
<style lang="less">
  .search-bar{
    width:100%;
    height:0.44rem;
    padding:0.08rem 0.1rem;
    box-sizing:border-box;
    display:flex;
    border-bottom:1px solid #e5e5e5;
    p{
      width:85%;
      height:100%;
      position:relative;
      input{
        width:100%;
        height:100%;
        border:none;
        background:#1a1a1a;
        outline:none;
        padding-left:0.35rem;
        box-sizing:border-box;
        color:#a9a9a9;
      }
      span{
        position:absolute;
        top:0.06rem;
        left:0.12rem;
        font-size:0.16rem;
        color:#7a7a7a;
      }
      i{
        font-style:normal;
        position:absolute;
        right:0.1rem;
        top:0.06rem;
        width:0.18rem;
        height:0.18rem;
        background:#989898;
        border-radius:50%;
        font-size:0.12rem;
        line-height:0.16rem;
        text-align:center;
        color:#1d1d1d;
      }
    }
    .submit{
      width:15%;
      height:100%;
      line-height:0.24rem;
      text-align:center;
      background:none;
      border:none;
      font-size:0.14rem;
      color:#fff;
      outline:none;
    }
  }
  .black{
    background:#242424
  }
  .white{
    background:#fff;
    p{
      input{
        background:#f7f7f7;
      }
      span{
        color:#d8d8d8;
      }
    }
    .submit{
      color:#242424;
    }
  }
</style>