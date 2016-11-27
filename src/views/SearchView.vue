<template>
  <div class="search-view">
    <h1>{{msg}}</h1>
    <h1>你搜索了：{{keywords}}</h1>
</template>

<script>
export default {
  name: 'search-view',
  created () {
    this.fetchData()
  },
  data () {
    return {
      msg: '高级检索页面!',
      keywords: ''
    }
  },
  methods: {
    fetchData () {
      this.keywords = this.$route.query.keywords
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  }
}
</script>

<style lang="stylus" scoped>
h1
  background #999
</style>
