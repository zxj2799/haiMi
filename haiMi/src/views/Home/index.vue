<template>
  <div class="home-page">
    <MainBox></MainBox>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import MainBox from './components/MainBox'
import FooterBar from '@/components/FooterBar'
export default {
  data () {
    return {

    }
  },
  components: {
    MainBox,
    FooterBar
  }
}
</script>
<style lang="less">
  .home-page{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
  }
</style>