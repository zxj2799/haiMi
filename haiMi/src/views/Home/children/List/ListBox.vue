<template>
  <div class='listpage'>
    <ListPage :contentList='listpagedata'></ListPage>
  </div>
</template>
<script>
export default {
  props: ['pageId'],
  data () {
    return {
      listpagedata: []
    }
  },
  watch: {
    'pageId': function () {
      this.getData()
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      console.log('获取数据' + this.pageId)
      this.$http.get('/data/goodslist', {
        params: {
          'type': this.pageId,
          'page': 1,
          'pageSize': 10
        }
      }).then(res => {
        this.listpagedata = res.data
      }, error => {
        console.log(error)
      })
    }
  }
}
</script>