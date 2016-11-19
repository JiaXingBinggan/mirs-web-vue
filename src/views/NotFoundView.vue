<template>
  <div class="not-found-view">
    <h1>{{msg}}</h1>
</template>

<script>
export default {
  name: 'not-found-view',
  data () {
    return {
      msg: '404 Not Found!'
    }
  }
}
</script>

<style lang="stylus" scoped>
h1
  background #f00
</style>
