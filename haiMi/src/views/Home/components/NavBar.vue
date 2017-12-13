<template>
  <nav class="nav-page">
    <ul>
      <li 
        v-for="(item, index) in navList" 
        @click='change(item, index)' 
        :key="item.id"
        :class='[listId==index?"on":""]'
        ><span>{{item.name}}</span></li>
    </ul>
  </nav>
</template>
<script>
  export default {
    props: ['navList'],
    data () {
      return {
        listId: 0
      }
    },
    methods: {
      change (item, index) {
        var typeStr = item.type === 1 ? 'MainBar' : 'ListBox'
        this.listId = index
        this.$emit('setTemplate', item.id, typeStr)
      }
    }
  }
</script>
<style lang="less">
li{
  list-style:none;
}
.nav-page{
  width:100%;
  height:0.4rem;
  line-height:0.4rem;
  background:#fff;
  ul{
    width:100%;
    height:100%;
    display:flex;
    li{
      flex:1;
      text-align:center;
    }
    li.on{
      border-bottom:2px solid #242424;
    }
  }
}
</style>