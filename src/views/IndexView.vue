<template>
  <div class="index-view">
    <h1>{{msg}}</h1>
</template>

<script>
export default {
  name: 'index-view',
  data () {
    return {
      msg: 'Welcome to the index page!'
    }
  }
}
</script>

<style lang="stylus" scoped>
h1
  background #111
</style>
