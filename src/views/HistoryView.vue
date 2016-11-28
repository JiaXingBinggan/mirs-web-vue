<template>
  <div class="history-view">
    <h1>{{msg}}</h1>
</template>

<script>
export default {
  name: 'history-view',
  beforeCreate () {
    // 如果没有登录，跳转到登录页面
    if (!this.$store.state.user.login) {
      this.$router.replace('/login')
    }
  },
  data () {
    return {
      msg: '我的记录页面~'
    }
  }
}
</script>

<style lang="stylus" scoped>
h1
  background #999
</style>
