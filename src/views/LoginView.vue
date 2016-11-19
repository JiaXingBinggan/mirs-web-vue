<template>
  <div class="login-view">
    <h1>{{msg}}</h1>
</template>

<script>
export default {
  name: 'login-view',
  data () {
    return {
      msg: 'This is login view!'
    }
  }
}
</script>

<style lang="stylus" scoped>
h1
  background #864
</style>
