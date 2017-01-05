<template>
  <div class="find-view" @dblclick="button_restore()">
    <h2>{{msg}}</h2>
    <div class="button_index">
      <mu-flat-button v-for="button in button_index" :label="button.button_option" class="demo-flat-button" @click="button_select(button)" :backgroundColor="button===current_button?'#0066CC':''" :color="button===current_button?'#FFFFFF':''"/>
    </div>
    <div class="select_index">
      <div class="select_title"><label>详细搜索</label></div>
      <el-select v-model="relase_year" placeholder="请选择年份" class="select_input">
        <el-option v-for="year in year_options" :value="year.year">
          <div @click="year_select(year)">{{year.year}}</div>
        </el-option>
      </el-select>
      <el-select v-model="origin_place" placeholder="选择地区" class="select_input">
        <el-option v-for="place in place_options" :value="place.place">
          <div @click="place_select(place)">{{place.place}}</div>
        </el-option>
      </el-select>
      <el-select v-model="movie_type" placeholder="选择类型" class="select_input">
        <el-option v-for="type in type_options" :value="type.keywords">
           <div @click="type_select(type)">{{type.keywords}}</div>
        </el-option>
      </el-select>
      <el-select v-model="sorting" placeholder="选择排序方式" class="select_input">
        <el-option v-for="sort in sort_options" :value="sort.sorting">
            <div @click="sort_select(sort)">{{sort.sorting}}</div>
        </el-option>
      </el-select>
      </div>
    <div class="movies-result">
      <div class="border-movie" v-for="movie in movies">
      <div class="single-movie" @click="goToMovie(movie.id)" @mouseenter="change_movieclass(movie)" @mouseleave="re_movieclass()">
        <img width="100%" height="85%" :src="movie.coverLink" >
        <div class="movie-title">
          <label>{{movie.name.substring(0,15)}}<span> {{movie.doubanRating}}</span></label>
        </div> 
      </div>
      <div v-if="current_movie === movie" class="movie_context_active">
          <div class="movie_context">
          <label>{{movie.name}}<span> {{movie.releaseYear}}</span></label>
          <div class="movie_rate">
          <el-rate :max=10 v-model="rating" disabled show-text text-color="#ff9900">
          </el-rate>
          </div>
          <div class="movie_type">
            <label>{{movie.runtime}}分钟&nbsp;&nbsp;&nbsp;&nbsp;<label>{{movie.originPlace}}</label></label>
          </div>
          <div class="movie_members">
          <label>导演&nbsp;&nbsp;&nbsp;&nbsp;{{movie.directors}}</label><br>
          <label>演员&nbsp;&nbsp;&nbsp;&nbsp;{{movie.actors}}</label>
          </div>
          </div>
          <div class="movie_comment">
            {{movie.synopsis.substring(0,20)}}..
          </div>
      </div>
      </div>
    </div>
    <el-button class="load-more-button" @click="loadMore" :loading="loading" :disabled="disabled">{{buttonText}}</el-button>
  </div>
</template>

<script>
import movieCatagory from '../utils/movieCatagory'
import movieApi from 'src/api/movieApi'
export default {
  name: 'find-view',
  created () {
    this.get_movies()
  },
  data () {
    const sortBy = {
      'id': 1,
      'douban_rating': 4,
      'imdb_rating': 5,
      'release_year': 6
    }
    return {
      current_button: '',
      current_index_keywords: '',
      current_index_type: '',
      current_index_sort: '',
      msg: '电影导航',
      button_index: movieCatagory.movieIndex.button_index,
      year_options: movieCatagory.movieIndex.year_options,
      relase_year: '',
      place_options: movieCatagory.movieIndex.place_options,
      origin_place: '',
      type_options: movieCatagory.movieIndex.type_options,
      movie_type: '',
      sort_options: movieCatagory.movieIndex.sort_options,
      sorting: '',
      sortBy,
      limit: 6,
      offset: 0,
      isActive: false,
      loading: false,
      current_movie: '',
      value: 9,
      movies: '',
      buttonText: '点击加载更多'
    }
  },
  methods: {
    loadMore () {
      var _this = this
      this.loading = true
      this.limit += 6
      if (this.current_index_keywords === '9.0-9.9') {
        this.get_movies()
      } else {
        movieApi.searchMovie(this.current_index_keywords, this.current_index_type, this.current_index_sort, this.limit, this.offset)
      .then(function (res) {
        if (res.data['success'] === false) {
          _this.$message({
            message: res.data['error'],
            type: 'error'
          })
        } else {
          // 获取数据成功
          _this.movies = res.data['data']
          _this.movies_limit(res.data['data'])
          _this.loading = false
        }
      })
      .catch(function (res) {
        if (res instanceof Error) {
          window.console.log(res.message)
        } else {
          window.console.log(res.data)
        }
      })
      }
    },
    movies_limit: function (results) {
      // 表示不能加载更多了
      if (results.length < this.limit) {
        this.buttonText = '不能加载更多了'
        this.disabled = true
      }
    },
    button_select: function (arg) {
      this.current_button = arg
      this.type_select(arg)
    },
    type_select: function (arg) {
      var _this = this
      // this.current_button = arg
      this.current_index_keywords = arg.keywords
      this.current_index_type = arg.type
      this.current_index_sort = this.sortBy['id']
      movieApi.searchMovie(arg.keywords, arg.type, this.sortBy['id'], this.limit, this.offset)
      .then(function (res) {
        if (res.data['success'] === false) {
          _this.$message({
            message: res.data['error'],
            type: 'error'
          })
        } else {
          // 获取数据成功
          _this.movies = res.data['data']
          _this.loading = false
        }
      })
      .catch(function (res) {
        if (res instanceof Error) {
          window.console.log(res.message)
        } else {
          window.console.log(res.data)
        }
      })
    },
    button_restore: function () {
      this.current_button = ''
    },
    change_movieclass: function (arg) {
      this.current_movie = arg
    },
    re_movieclass: function () {
      this.current_movie = ''
    },
    goToMovie: function (id) {
      this.$router.push('/movie/' + id)
    },
    get_movies () {
      var _this = this
      this.current_index_keywords = '9.0-9.9'
      this.current_index_sort = this.sortBy['id']
      movieApi.searchMovie('9.0-9.9', 4, this.sortBy['id'], this.limit, this.offset)
      .then(function (res) {
        if (res.data['success'] === false) {
          _this.$message({
            message: res.data['error'],
            type: 'error'
          })
        } else {
          // 获取数据成功
          _this.movies = res.data['data']
          _this.movies_limit(res.data['data'])
          _this.loading = false
        }
      })
      .catch(function (res) {
        if (res instanceof Error) {
          window.console.log(res.message)
        } else {
          window.console.log(res.data)
        }
      })
    },
    year_select: function (arg) {
      var _this = this
      this.current_index_keywords = arg.keywords
      this.current_index_type = arg.type
      this.current_index_sort = this.sortBy['id']
      movieApi.searchMovie(arg.keywords, arg.type, arg.type, this.limit, this.offset)
      .then(function (res) {
        if (res.data['success'] === false) {
          _this.$message({
            message: res.data['error'],
            type: 'error'
          })
        } else {
          // 获取数据成功
          _this.movies = res.data['data']
          _this.loading = false
        }
      })
      .catch(function (res) {
        if (res instanceof Error) {
          window.console.log(res.message)
        } else {
          window.console.log(res.data)
        }
      })
    },
    place_select: function (arg) {
      var _this = this
      this.current_index_keywords = arg.keywords
      this.current_index_type = arg.type
      this.current_index_sort = this.sortBy['id']
      movieApi.searchMovie(arg.keywords, arg.type, this.sortBy['id'], this.limit, this.offset)
      .then(function (res) {
        if (res.data['success'] === false) {
          _this.$message({
            message: res.data['error'],
            type: 'error'
          })
        } else {
          // 获取数据成功
          _this.movies = res.data['data']
          _this.loading = false
        }
      })
      .catch(function (res) {
        if (res instanceof Error) {
          window.console.log(res.message)
        } else {
          window.console.log(res.data)
        }
      })
    },
    sort_select: function (arg) {
      var _this = this
      this.current_index_sort = arg.type
      movieApi.searchMovie(this.current_index_keywords, this.current_index_type, arg.type, this.limit, this.offset)
      .then(function (res) {
        if (res.data['success'] === false) {
          _this.$message({
            message: res.data['error'],
            type: 'error'
          })
        } else {
          // 获取数据成功
          _this.movies = res.data['data']
          _this.movies_limit(res.data['data'])
          _this.loading = false
        }
      })
      .catch(function (res) {
        if (res instanceof Error) {
          window.console.log(res.message)
        } else {
          window.console.log(res.data)
        }
      })
    }
  },
  computed: {
    rating () {
      return parseFloat(this.current_movie.doubanRating)
    },
    limitpages () {
      return this.limit
    }
  }
}
</script>

<style lang="stylus" scoped>
.find-view
  width 1400px
  height auto
  overflow hidden
.find-view .movies-result
  width 1100px
  height 700px
  margin 0px auto
.border-movie
  width 20%
  height 45%
  float left
  margin-left 10%
.single-movie
  height 100%
  width 75%
  margin-top 10%
  margin-left 2%
.single-movie:hover
  cursor pointer
.movie_context_active
  border 1px solid #C0C0C0
  background rgb(255,255,255)
  height 400px
  width 300px
  margin-top -315px
  margin-left 80%
  float left
  position relative
  z-index 1999
  display block
.movie_context
  width 100%
  height 80%
  text-align left
  font-size 16px
  color #4682B4
  padding 10px 10px 10px 20px
  border-bottom 1px solid #DCDCDC
.movie_context label span
  color #7B7B7B
  font-size 12px
.movie_context .movie_rate
  margin-top 5px
.movie_context .movie_type
  margin-top 10px
  color #4F4F4F
  font-size 14px
.movie_context .movie_members
  margin-top 15px
  color #4F4F4F
  font-size 14px
.movie_context .movie_members label
  padding-bottom 10px
.movie_comment
  width 100%
  height 20%
  background #F5F5F5
  padding 10px 10px 10px 10px
.movie-title
  text-align center
  padding 0px
  font-size 12px
  margin-bottom 10px
.movie-title span
  color #FFA042
h2
  text-align center
.index-movies
  margin 20px auto
  height 300px
.button_index
  height 150px
  padding 0px
  margin 20px 60px 30px 60px
.demo-flat-button
  margin 12px
.select_index
  border-top 1px solid #BEBEBE
  height 80px
.demo-flat-button 
  margin: 12px
.select_title
  width 140px
  margin 20px
  float left
  padding 5px
.select_title label
  font-size 18px
  margin-left 50px
.select_input
  width 200px
  margin 20px 0px 20px 30px
  float left
.load-more-button
  width 100%
  margin 20px 0px 20px 0px
</style>
