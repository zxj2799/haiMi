<template>
  <div class='mainbox-page'>
    <SearchBar></SearchBar>
    <NavBar :navList="navList" @setTemplate="setTemplate" v-pin='0'></NavBar>
    <transition>
      <component :is="isTemplate" :pageId="pageId"></component>
    </transition>
  </div>
</template>
<script>
import SearchBar from '@/components/SearchBar'
import NavBar from './NavBar'
import MainBar from '@/views/Home/children/Banner/MainBar'
import ListBox from '@/views/Home/children/List/ListBox'
export default {
  data () {
    return {
      navList: [],
      isTemplate: 'MainBar',
      pageId: 0
    }
  },
  components: {
    SearchBar,
    NavBar,
    MainBar,
    ListBox
  },
  methods: {
    setTemplate (id, type) {
      this.isTemplate = type
      this.pageId = id
    }
  },
  created () {
    this.$http.get('/data/homenav').then(res => {
      this.navList = res.data
    })
  }
}
</script>
<style lang="less">
  .mainbox-page{
    flex:1;
    overflow:auto;
    background:#f7f7f7;
  }
</style>