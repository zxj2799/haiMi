<template>
    <div class="shop-page">
      <shopmain></shopmain>
      <FooterBar></FooterBar>
    </div>
</template>

<script>
import FooterBar from '@/components/FooterBar'
import shopmain from './children/shopmain'
export default {
  data () {
    return {

    }
  },
  components: {
    FooterBar,
    shopmain
  }
}
</script>

<style>
.shop-page{
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
}
</style>