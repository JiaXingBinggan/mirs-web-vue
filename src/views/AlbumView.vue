<template>
  <div class="album-view">
    <h1>{{msg}}</h1>
</template>

<script>
export default {
  name: 'album-view',
  data () {
    return {
      msg: '在这寻找电影专辑~'
    }
  }
}
</script>

<style lang="stylus" scoped>
h1
  background #999
</style>
