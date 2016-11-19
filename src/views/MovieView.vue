<template>
  <div class="movie-view">
    <h1>{{msg}}</h1>
</template>

<script>
export default {
  name: 'movie-view',
  data () {
    return {
      msg: 'This is movie view!'
    }
  }
}
</script>

<style lang="stylus" scoped>
h1
  background #d3f
</style>
