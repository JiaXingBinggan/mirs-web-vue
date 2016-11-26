<template>
  <div class="friends-view">
    <h1>{{msg}}</h1>
</template>

<script>
export default {
  name: 'friends-view',
  data () {
    return {
      msg: '好友管理页面~'
    }
  }
}
</script>

<style lang="stylus" scoped>
h1
  background #999
</style>
