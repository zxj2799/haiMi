<template>
  <div class='navlistbar'>
    <a href='javascript:;' v-for='item in spanlist'>{{item.name}}</a>
  </div>
</template>
<script>
export default {
  props: ['spanlist']
}
</script>
<style lang="less">
.navlistbar{
  width:100%;
  a{
    display:inline-block;
    margin:0 0 0.1rem 0.2rem;
    padding:0.1rem;
    border:1px solid #e5e5e5;
    font-size:0.14rem;
    color: #242424
  }
}
</style>