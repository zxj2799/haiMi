<template>
  <div class='banner-page'>
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in bannerlist"><img :src="item.img"/></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: ['bannerlist'],
  data () {
    return {
      swiperOption: {
        autoplay: 2000,
        pagination: '.swiper-pagination',
        paginationClickable: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style lang="less">
  .banner-page{
    width:100%;
    overflow:hidden;
    .swiper-slide{
      img{
        display:block;
        width:100%;
        height:100%;
      }
    }
  }
</style>