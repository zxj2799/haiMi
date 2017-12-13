<template>
  <div class='mainpagebox'>
    <NavBar :navList="navlist" @setTemplate="setTemplate" v-pin='0'></NavBar>
    <transition>
      <component :is="isTemplate" :pageId="pageId"></component>
    </transition>
  </div>
</template>
<script>
import NavBar from '@/views/Home/components/NavBar'
import MainBar from './MainBar'
import ListBox from './ListBox'
export default {
  data () {
    return {
      navlist: [
        {
          'name': '分类',
          'id': 0,
          'type': 1
        },
        {
          'name': '品牌',
          'id': 1,
          'type': 2
        }
      ],
      isTemplate: 'MainBar',
      pageId: 0
    }
  },
  components: {
    NavBar,
    ListBox,
    MainBar
  },
  methods: {
    setTemplate (id, type) {
      this.isTemplate = type
      this.pageId = id
    }
  }
}
</script>
<style lang="less">
.mainpagebox{
  flex:1;
  overflow:auto;
}
</style>