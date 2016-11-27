<template>
  <div class="today-movies">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'today-movies',
  data () {
    return {
      msg: '今天推荐的电影'
    }
  }
}
</script>


<style lang="stylus" scoped>
.today-movies
  background rgb(142, 179, 198)
  height 300px

</style>
