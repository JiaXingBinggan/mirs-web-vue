<template>
  <div class="high-score-movies">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'high-score-movies',
  data () {
    return {
      msg: '评价高的电影'
    }
  }
}
</script>


<style lang="stylus" scoped>
.high-score-movies
  background rgb(141, 198, 160)
  height 300px

</style>
