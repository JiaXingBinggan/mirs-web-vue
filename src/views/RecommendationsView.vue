<template>
  <div class="recommendations-view">
    <h1>{{msg}}</h1>
</template>

<script>
export default {
  name: 'recommendations-view',
  data () {
    return {
      msg: '推荐管理页面~'
    }
  }
}
</script>

<style lang="stylus" scoped>
h1
  background #999
</style>
