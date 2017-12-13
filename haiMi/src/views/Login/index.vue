<template>
  <div class='login'>
    <p>手机号:<input type='text' placeholder='请输入手机号' v-model='phone'/></p>
    <p>密  码:<input type='password' placeholder='请输入密码' v-model='password'/></p>
    <button @click='loginPage'>登录</button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        phone: '',
        password: ''
      }
    },
    methods: {
      loginPage () {
        window.localStorage.setItem('userInfo', JSON.stringify(
            {phone: this.phone}
          )
        )
        this.$router.push(this.$route.query.loginCallBack)
      }
    }
  }
</script>
