<template>
  <div class="box-office-view">
    <h1>{{msg}}</h1>
</template>

<script>
export default {
  name: 'box-office-view',
  data () {
    return {
      msg: '在这里查看票房!'
    }
  }
}
</script>

<style lang="stylus" scoped>
h1
  background #999
</style>
