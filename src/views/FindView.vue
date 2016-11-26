<template>
  <div class="find-view">
    <h1>{{msg}}</h1>
</template>

<script>
export default {
  name: 'find-view',
  data () {
    return {
      msg: '在这发现电影~'
    }
  }
}
</script>

<style lang="stylus" scoped>
h1
  background #999
</style>
