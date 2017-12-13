<template>
    <div class="fenlei-page">
      <mainboxpage></mainboxpage>
      <FooterBar></FooterBar>
    </div>
</template>
<script>
import FooterBar from '@/components/FooterBar'
import mainboxpage from './children/mainboxpage'
export default {
  data () {
    return {

    }
  },
  components: {
    FooterBar,
    mainboxpage
  }
}
</script>

<style>
.fenlei-page{
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
}
</style>