<template>
  <div class="search-page">
    <search-bar theme="white" :defaultVal="$route.params.searchVal"></search-bar>
    <ListPage :contentList='datalist'></ListPage>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
export default {
  data () {
    return {
      datalist: [],
      dataVal: this.$route.params.searchVal
    }
  },
  components: {
    SearchBar
  },
  watch: {
    $route: function () {
      this.getData()
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      console.log(this.dataVal, this.$route.params.searchVal)
      if (this.$route.params.searchVal !== this.dataVal) {
        this.$http.get('/data/listpage/goodslist', {
          params: {
            type: this.$route.params.searchVal * 1,
            page: 0,
            pageSize: 10
          }
        }).then(res => {
          console.log(res.data)
          this.datalist = res.data
        }, error => {
          console.log(error)
        })
      }
    }
  }
}
</script>