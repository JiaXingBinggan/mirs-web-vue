<template>
  <div class="hot-movies">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'hot-movies',
  data () {
    return {
      msg: '正在热映的电影'
    }
  }
}
</script>


<style lang="stylus" scoped>
.hot-movies
  background rgb(173, 198, 141)
  height 300px

</style>
