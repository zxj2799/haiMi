<template>
  <div class="main-page">
    <BannerPage :bannerlist='bannerlist'></BannerPage>
    <ContentBox>
      <MenuList></MenuList>
    </ContentBox>
    <ContentBox>
      <img v-for='item in adv1' :src='item.img'/>
    </ContentBox>
    <ContentBox>
      <img v-for='item in adv1' :src='item.img'/>
    </ContentBox>
    <ContentBox title='严选品牌'>
      <div class='img-page'>
        <div class='img-left imgBox'>
          <img src='//img.haimi.com/FgDc_2t_n2s_5y6sJXq_HC52toxk'/>
          <img src='//img.haimi.com/Fl1dPmAViO5wHlnVKCeX44aqK25X'/>
        </div>
        <div class='img-right imgBox'>
          <img src='//img.haimi.com/Fo6aIswHZTuLTpc1zuFQGT59wfOv'/>
        </div>
      </div>
    </ContentBox>
    <ContentBox title='推荐好物'>
      <div class='img-box'>
        <a href='javascript:;' v-for='items in imgList'>
          <img :src='items.img'/>
        </a>
      </div>
    </ContentBox>
    <ContentBox title='大家都在买'>
      <ListPage :contentList='contentList'></ListPage>
    </ContentBox>
  </div>
</template>
<script>
import MenuList from './MenuList'
import BannerPage from '@/views/Home/components/BannerPage'
export default {
  data () {
    return {
      imgList: [],
      bannerlist: [],
      contentList: [],
      adv1: []
    }
  },
  components: {
    MenuList,
    BannerPage
  },
  created () {
    this.$http.get('/data/bannerimg').then(res => {
      this.bannerlist = res.data
    })
    this.$http.get('/data/advertising').then(res => {
      this.adv1 = res.data
    })
    this.$http.get('/data/recommendthings').then(res => {
      this.imgList = res.data
    })
    this.$http.get('/data/goodslist', {
      params: {
        type: 0,
        page: 1,
        pageSize: 20
      }
    }).then(res => {
      this.contentList = res.data
    }, error => {
      console.log(error)
    })
  }
}
</script>
<style lang="less">
  .main-page{
    .img-page{
      width:100%;
      display:flex;
      .imgBox{
        width:50%;
        img{
          display:block;
          width:100%
        }
      }
      .img-left{
        img{
          height:50%;
        }
      }
    }
    .img-box{
      width:100%;
      overflow:hidden;
      a{
        display:block;
        float:left;
        width:50%;
        img{
          display:block;
          width:100%;
          height:1.2rem;
        }
      }
      
    }
  }
</style>