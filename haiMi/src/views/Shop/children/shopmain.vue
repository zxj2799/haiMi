<template>
  <div class='shopmain'>
    <shopBar></shopBar>
    <ContentBox title='大家都在买的宝贝'>
      <ListPage :contentList='goodslist'></ListPage>
    </ContentBox>
  </div>
</template>
<script>
import shopBar from './shopBar'
export default {
  data () {
    return {
      goodslist: []
    }
  },
  components: {
    shopBar
  },
  created () {
    this.$http.get('/data/goodslist', {
      params: {
        type: 5,
        page: 5,
        pageSize: 10
      }
    }).then(res => {
      this.goodslist = res.data
    })
  }
}
</script>
<style lang="less">
  .shopmain{
    flex:1;
    background:#f7f7f7;
    overflow:auto;
  }
</style>