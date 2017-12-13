<template>
  <div class='conlist-page'>
    <div class='goodsbox' v-for='item in contentList'>
      <dl>
        <dt><img :src='item.img'/></dt>
        <dd>
          <p>{{item.title}}</p>
          <span>￥{{item.price}}</span>
        </dd>
      </dl>
    </div>
  </div>
</template>
<script>
export default {
  props: ['contentList']
}
</script>
<style lang="less">
  .conlist-page{
    width:100%;
    background:#f7f7f7;
    overflow:hidden;
    >h2{
      font-weight:normal;
      font-size:0.16rem;
      color:#242424;
      line-height:0.49rem;
      text-align:center;
    }
    .goodsbox{
      background:#f7f7f7;
      width:50%;
      overflow:hidden;
      float:left;
      padding-right:0.05rem;
      box-sizing:border-box;
      margin-top:0.1rem;
      dl{
        width:100%;
        background:#fff;
        dt{
          width:100%;
          img{
            max-width:100%;
            max-height:100%;
          }
        }
        dd{
          width:100%;
          padding:0 0.1rem;
          box-sizing:border-box;
          p{
            width:calc( 100% - 0.2rem );
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
</style>