<template>
  <div class="accounts-view">
    <h1>{{msg}}</h1>
</template>

<script>
export default {
  name: 'accounts-view',
  beforeCreate () {
    // 如果没有登录，跳转到登录页面
    if (!this.$store.state.user.login) {
      this.$router.replace('/login')
    }
  },
  data () {
    return {
      msg: '用户信息管理'
    }
  }
}
</script>

<style lang="stylus" scoped>
h1
  background #543
</style>
