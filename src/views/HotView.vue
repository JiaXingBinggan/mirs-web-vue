<template>
  <div class="hot-view">
    <h1>{{msg}}</h1>
</template>

<script>
export default {
  name: 'hot-view',
  data () {
    return {
      msg: 'This is hot view!'
    }
  }
}
</script>

<style lang="stylus" scoped>
h1
  background #345
</style>
