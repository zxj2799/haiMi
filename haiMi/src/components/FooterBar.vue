<template>
  <div class="footer-page">
    <router-link v-for='item in footerList' :to='item.path' active-class='active'><i :class='item.icon'></i>{{item.name}}</router-link>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        footerList: [
          {
            'name': '首页',
            'icon': 'iconfont icon-shouye',
            'path': 'home'
          },
          {
            'name': '分类',
            'icon': 'iconfont icon-fenlei',
            'path': 'fenlei'
          },
          {
            'name': '购物车',
            'icon': 'iconfont icon-cart-copy',
            'path': 'shop'
          },
          {
            'name': '我的',
            'icon': 'iconfont icon-wode',
            'path': 'me'
          }
        ],
        routername: 'home'
      }
    },
    methods: {
      change (names) {
        this.routername = names
        console.log(this.routername)
      }
    }
  }
</script>
<style lang="less">
  .footer-page{
    width:100%;
    height:0.5rem;
    background:#fff;
    border-top:1px solid #e5e5e5;
    display:flex;
    justify-content:space-around;
    a{
      flex:1;
      font-size:0.12rem;
      color:#999999;
      text-align:center;
      i{
        display:block;
        font-size:0.16rem;
        padding-top:0.08rem;
      }
    }
    a.active{
      color:#801a2a;
    }
  }
</style>