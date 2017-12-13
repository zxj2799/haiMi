<template>
  <div class='pinpai'>
    <dl v-for='item in pinpai'>
      <dt>
        <img :src='item.img'/>
      </dt>
      <dd>
        <p>{{item.title}}</p>
        <span>{{item.con}}</span>
      </dd>
    </dl>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        pinpai: []
      }
    },
    created () {
      this.$http.get('/data/fenlei').then(res => {
        this.pinpai = res.data
      })
    }
  }
</script>
<style lang="less">
.pinpai{
  width:100%;
  display:flex;
  flex-wrap:wrap;
  dl{
    width:33.3%;
    dt{
      img{
        width:100%;
      }
    }
    dd{
      font-size:0.14rem;
      text-align:center;
      padding:0.05rem 0;
      span{
        display:block;
        font-size:0.12rem;
        width:100%;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color:#999;
      }
    }
  }
}
</style>