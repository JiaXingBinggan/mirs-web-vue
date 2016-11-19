<template>
  <div class="new-view">
    <h1>{{msg}}</h1>
</template>

<script>
export default {
  name: 'new-view',
  data () {
    return {
      msg: 'This is new view!'
    }
  }
}
</script>

<style lang="stylus" scoped>
h1
  background #573
</style>
