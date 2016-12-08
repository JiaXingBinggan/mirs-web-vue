<template>
	<div class="find-view">
		<index-movies></index-movies>
		<div class="movies-result">
			<today-movies></today-movies>
		</div>
	</div>
</template>

<script>
import IndexMovies from '../components/index/IndexMovies.vue'
import TodayMovies from '../components/index/TodayMovies.vue'
export default {
  name: 'find-view',
  components: {
    IndexMovies,
    TodayMovies
  },
  data () {
    return {
      msg: '在这发现电影~'
    }
  }
}
</script>

<style lang="stylus" scoped>
.find-view
	width 1400px
	height 1100px
.find-view .movies-result
	height 700px
</style>
