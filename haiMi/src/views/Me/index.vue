<template>
    <div class="me-page">
      <memain></memain>
      <FooterBar></FooterBar>
    </div>
</template>


<script>
import FooterBar from '@/components/FooterBar'
import memain from './children/memain'
export default {
  data () {
    return {

    }
  },
  components: {
    FooterBar,
    memain
  }
}
</script>

<style>
.me-page{
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
}
</style>