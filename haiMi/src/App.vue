<template>
  <div id="app">
    <router-view/>
    <div id='loadingBox'></div>
  </div>
</template>

<script>
import './utils/http'
import './static/css/reset.css'
import './static/css/font/iconfont.css'
export default {
  name: 'app'
}
</script>

<style>
*{
  margin:0;
  padding:0;
  text-decoration:none;
  font-family:"microsoft yahei";
}
body,html,#app{
  width:100%;
  height:100%;
}
html{
  font-size:100px;
}
#app {
  display:flex;
  flex-direction:column;
  font-size:0.16rem;
}
</style>
