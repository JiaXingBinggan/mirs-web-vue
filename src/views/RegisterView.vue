<template>
  <div class="register-view">
    <h1>{{msg}}</h1>
</template>

<script>
export default {
  name: 'register-view',
  data () {
    return {
      msg: 'This is register view!'
    }
  }
}
</script>

<style lang="stylus" scoped>
h1
  background #a4d
</style>
