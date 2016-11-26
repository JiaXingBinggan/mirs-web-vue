<template>
  <div class="history-view">
    <h1>{{msg}}</h1>
</template>

<script>
export default {
  name: 'history-view',
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
