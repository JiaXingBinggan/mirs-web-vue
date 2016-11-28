<template>
  <div class="recommendations-view">
    <h1>{{msg}}</h1>
</template>

<script>
export default {
  name: 'recommendations-view',
  beforeCreate () {
    // 如果没有登录，跳转到登录页面
    if (!this.$store.state.user.login) {
      this.$router.replace('/login')
    }
  },
  data () {
    return {
      msg: '推荐管理页面~'
    }
  }
}
</script>

<style lang="stylus" scoped>
h1
  background #999
</style>
