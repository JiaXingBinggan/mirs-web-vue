<template>
  <div class="messages-view">
    <h1>{{msg}}</h1>
</template>

<script>
export default {
  name: 'messages-view',
  data () {
    return {
      msg: '我的消息页面~'
    }
  }
}
</script>

<style lang="stylus" scoped>
h1
  background #999
</style>
