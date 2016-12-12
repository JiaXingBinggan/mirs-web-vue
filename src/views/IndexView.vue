<template>
  <div class="index-view">
    <!-- <h1 @click='notice()'>{{msg}}</h1> -->
    <div class="wrapper">
      <today-movies></today-movies>
    </div>
    <div class="wrapper">
      <hot-movies></hot-movies>
    </div>
    <div class="wrapper">
      <high-score-movies></high-score-movies>
    </div>
    <div class="wrapper" v-if="login">
      <similar-users></similar-users>
    </div>
  </div>
</template>

<script>
import TodayMovies from '../components/index/TodayMovies.vue'
import HotMovies from '../components/index/HotMovies.vue'
import HighScoreMovies from '../components/index/HighScoreMovies.vue'
import SimilarUsers from '../components/index/SimilarUsers.vue'
export default {
  name: 'index-view',
  components: {
    TodayMovies,
    HotMovies,
    HighScoreMovies,
    SimilarUsers
  },
  data () {
    return {
      msg: 'Welcome to the index page!'
    }
  },
  computed: {
    login () {
      return this.$store.state.user.login
    }
  }
}
</script>

<style lang="stylus" scoped>
h1
  background rgba(110, 86, 117, 0.22)
.wrapper
  margin 20px auto
  width 1166x
</style>
