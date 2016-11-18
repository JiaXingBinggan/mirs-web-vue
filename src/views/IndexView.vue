<template>
  <div class="index-view">
    <h1>{{msg}}</h1>
</template>

<script>
export default {
  name: 'index-view',
  data () {
    return {
      msg: 'Welcome to Vue.js App'
    }
  }
}
</script>

<style lang="stylus">
.index-view
  h1
    background #111
</style>
