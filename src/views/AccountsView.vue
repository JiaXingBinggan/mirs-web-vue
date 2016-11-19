<template>
  <div class="accounts-view">
    <h1>{{msg}}</h1>
</template>

<script>
export default {
  name: 'accounts-view',
  data () {
    return {
      msg: 'This is accounts view!'
    }
  }
}
</script>

<style lang="stylus" scoped>
h1
  background #543
</style>
