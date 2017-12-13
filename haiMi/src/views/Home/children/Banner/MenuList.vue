<template>
  <div class='menu-page'>
    <ul>
      <li v-for="item in list">
        <img :src='item.img'/>
        <span>{{item.tit}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        list: [
          {
            'img': '//img.haimi.com/FuPMz-_M6cc-EKholObO_ec5niTe',
            'tit': '新人礼包'
          },
          {
            'img': '//img.haimi.com/Fvxjun-u3MAa7vGJnbSiCXlFtepB',
            'tit': '领取积分'
          },
          {
            'img': '//img.haimi.com/Fi2HlhU6SOQ0GqagPJ1whoJAzg57',
            'tit': '邀请有礼'
          },
          {
            'img': '//img.haimi.com/Ft0Vx786oXJADIPEamFGp5vew5KY',
            'tit': '每周新品'
          }
        ]
      }
    }
  }
</script>
<style lang="less">
  .menu-page{
    width:100%;
    background:#fff;
    ul{
      width:100%;
      display:flex;
      justify-content:space-around;
      li{
        text-align:center;
        img{
          max-height:100%;
          max-width:100%;
        }
        span{
          line-height:0.4rem;
        }
      }
    }
  }
</style>