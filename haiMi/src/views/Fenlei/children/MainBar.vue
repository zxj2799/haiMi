<template>
  <div class='main-boxpage'>
    <div class='img-page'>
      <a href='javascript:;'><img src='//img.haimi.com/FloxuBkDf7JLo-AtEqLGRRnhAxJn'/></a>
    </div>
    <ContentBox>
      <navlistBar :spanlist='spanlist'></navlistBar>
    </ContentBox>
    <div class='img-page'>
      <a href='javascript:;'><img src='//img.haimi.com/FoXDKmO-JoZqbHyGfCcOQFeb0Jit'/></a>
    </div>
    <ContentBox>
      <navlistBar :spanlist='spanlist'></navlistBar>
    </ContentBox>
    <div class='img-page'>
      <a href='javascript:;'><img src='//img.haimi.com/FgHw-Qt_o8Dpt6Xj9Yq7TXuldwZ6'/></a>
    </div>
    <ContentBox>
      <navlistBar :spanlist='spanlist'></navlistBar>
    </ContentBox>
    <div class='img-page'>
      <a href='javascript:;'><img src='//img.haimi.com/FqdLiXEI16k6T2WEivYT7NhZYgGD'/></a>
    </div>
    <ContentBox>
      <navlistBar :spanlist='spanlist'></navlistBar>
    </ContentBox>
    <div class='img-page'>
      <a href='javascript:;'><img src='//img.haimi.com/FhJPFBPHwBExbG-O9o_Jb7KWjiMD'/></a>
    </div>
    <ContentBox>
      <navlistBar :spanlist='spanlist'></navlistBar>
    </ContentBox>
  </div>
</template>
<script>
import navlistBar from './components/navlistBar'
export default {
  data () {
    return {
      spanlist: [
        {
          'name': '面膜',
          'src': '#'
        },
        {
          'name': '面霜乳液',
          'src': '#'
        },
        {
          'name': '眼霜',
          'src': '#'
        },
        {
          'name': '精华',
          'src': '#'
        },
        {
          'name': '爽肤水',
          'src': '#'
        },
        {
          'name': '卸妆',
          'src': '#'
        },
        {
          'name': '洁面',
          'src': '#'
        },
        {
          'name': '隔离',
          'src': '#'
        },
        {
          'name': '精油',
          'src': '#'
        }
      ]
    }
  },
  components: {
    navlistBar
  }
}
</script>
<style lang="less">
.main-boxpage{
  width:100%;
  .img-page{
    width:100%;
    img{
      width:100%;
    }
  }
}
</style>