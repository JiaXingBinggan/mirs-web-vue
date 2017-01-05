<template>
  <div class="high-score-movies">
    <h3> {{msg}} </h3>
    <div class="movie_item" v-for="movie in movies">
      <div class="item_img" @click="goToMovie(movie.id)">
        <img width="150" height="220" :src="movie.coverLink">
      </div>
      <div class="item_context">
        <h3 @click="goToMovie(movie.id)">{{movie.name}}</h3>
        <el-rate :max=10 v-model="movie.doubanRating" disabled show-text text-color="#ff9900">
        </el-rate>
        <div class="item_introduce">
          <label>导演&nbsp;&nbsp;{{movie.directors}}</label><br>
          <label>演员&nbsp;&nbsp;{{movie.actors}}</label>
        </div>
        <div class="item_comment">
          <label>影片介绍</label>
          <p>{{movie.synopsis.substring(0,200)}}..</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import movieApi from '../../api/movieApi'
export default {
  name: 'high-score-movies',
  created () {
    this.get_today_movies()
  },
  data () {
    return {
      msg: '高评价电影',
      movies: ''
    }
  },
  methods: {
    get_today_movies () {
      var _this = this
      movieApi.getDailyMovie()
      .then(function (res) {
        let movies = res.data['data']
        for (var i = 0; i < movies.length; i++) {
          movies[i].doubanRating = parseFloat(movies[i].doubanRating)
        }
        _this.movies = movies
      })
      .catch(function (res) {
        if (res instanceof Error) {
          window.console.log(res.message)
        } else {
          window.console.log(res.data)
        }
      })
    },
    goToMovie (id) {
      this.$router.push('/movie/' + id)
    }
  }
}
</script>


<style lang="stylus" scoped>
.high-score-movies
  height 1800px
  margin 0px auto
@media screen and (min-width: 1201px){
  .high-score-movies{width:1200px}
}
@media screen and (max-width: 1201px){
  .high-score-movies{width:900}
}
@media screen and (max-width: 900){
  .high-score-movies{width:200px}
}
@media screen and (max-width: 500px){
  .high-score-movies{width:100px}
}
.movie_item
  width 100%
  height 16%
  margin 0px 0px 5px 0px 
  border-top 1px solid #d0d0d0
.movie_item .item_img
  width 15%
  height 100%
  float left
  padding 30px 20px 20px 20px
.movie_item .item_img:hover
  cursor pointer
.movie_item .item_context
  width 85%
  height 100%
  float left
  padding 10px 20px 20px 20px
.movie_item .item_context h3:hover
  cursor pointer
.movie_item .item_context .item_introduce
  margin-top 15px
.movie_item .item_context .item_introduce label
  font-size 14px
  color #000000
.movie_item .item_context .item_comment
  margin-top 10px
.movie_item .item_context .item_comment label
  font-size 16px
  color #0066CC
</style>
