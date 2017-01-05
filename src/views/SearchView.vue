<template>
  <div class="search-view">
    <div class="search-bar" @keyup.enter="searchMovie">
      <el-input placeholder="请输入内容" v-model="keywords" style="width: 600px;" size="large">
        <el-select v-model="type" slot="prepend" placeholder="请选择 ">
          <el-option label="名称" value="3"></el-option>
          <el-option label="别名" value="16"></el-option>
          <el-option label="导演" value="7"></el-option>
          <el-option label="编剧" value="8"></el-option>
          <el-option label="演员" value="9"></el-option>
          <el-option label="类型" value="10"></el-option>
          <el-option label="国家" value="12"></el-option>
          <el-option label="语言" value="14"></el-option>
          <el-option label="年份" value="6"></el-option>
          <el-option label="豆瓣评分" value="4"></el-option>
          <el-option label="IMDB评分" value="5"></el-option>
          <el-option label="获奖信息" value="24"></el-option>
        </el-select>
        <el-button slot="append" icon="search" @click="searchMovie"></el-button>
      </el-input>
    </div>
    <div class="search-result">
      <mu-list>
        <template v-for="movie in movies">
          <div class="movie-detail" @click="goToMovie(movie.id)">
            <div class="movie-img">
              <img :src="movie.coverLink" alt="" slot="left" >
            </div>
            <div class="movie-content" slot="right">
                <span>电影名：{{movie.name}}</span>
                <span>导演：{{movie.directors}}</span>
                <span>主编：{{movie.screenwriters}}</span>
                <span>演员：{{movie.actors}}</span>
                <span>类型：{{movie.types}}</span>
                <span>发行年份：{{movie.releaseYear}}</span>
                <div >
                  <span>豆瓣评分：{{movie.doubanRating}}</span>
                  <br>
                  <span>IMDB评分：{{movie.imdbRating}}</span>
                </div>
                <div>简介：{{movie.synopsis}}</div>

            </div>
          </div>
          <mu-divider/>
        </template>
      </mu-list>
    </div>
    <el-button class="load-more-button" @click="loadMore" :loading="loading" :disabled="disabled">{{buttonText}}</el-button>
  </div>
</template>

<script>
import movieApi from 'src/api/movieApi'
export default {
  name: 'search-view',
  created () {
    this.fetchData()
    this.searchMovie()
  },
  data () {
    const sortBy = {
      'id': 1,
      'douban_rating': 4,
      'imdb_rating': 5,
      'release_year': 6
    }
    return {
      keywords: '',
      type: 3,
      sortBy,
      limit: 10,
      offset: 0,
      movies: [],
      loading: false,
      disabled: false,
      buttonText: '点击加载更多'
    }
  },
  methods: {
    fetchData () {
      this.keywords = this.$route.query.keywords
    },
    loadMore () {
      console.log('-------------')
      this.loading = true
      this.offset += this.limit
      this.searchMovie()
    },
    goToMovie (id) {
      this.$router.push('/movie/' + id)
    },
    addMovie (results) {
      for (var i = 0; i < results.length; i++) {
        this.movies.push(results[i])
      }
      // 表示不能加载更多了
      if (results.length < this.limit) {
        this.buttonText = '不能加载更多了'
        this.disabled = true
      }
    },
    searchMovie () {
      var _this = this
      movieApi.searchMovie(this.keywords, this.type, this.sortBy['id'], this.limit, this.offset)
      .then(function (res) {
        if (res.data['success'] === false) {
          _this.$message({
            message: res.data['error'],
            type: 'error'
          })
        } else {
          // 获取数据成功
          _this.addMovie(res.data['data'])
          console.log(res.data['data'])
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
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData',
    keywords () {
      this.movies = []
      this.offset = 0
      this.disabled = false
      this.buttonText = '点击加载更多'
    }
  }
}
// {
//   id: '',
//   name: '',
//   doubanRating: '',
//   imdbRating: '',
//   releaseYear: '',
//   directors: '',
//   screenwriters: '',
//   actors: '',
//   types: '',
//   originPlace: '',
//   languages: '',
//   runtime: '',
//   coverLink: '',
//   synopsis: ''
// }
</script>

<style lang="stylus" scoped>
.search-bar
  margin-top 30px
  margin-left 25%
  margin-bottom 30px
.el-select
  width 115px
.load-more-button
  width 100%
.movie-img
  float left
  width 200px
  height 200px
  img
    width 120px
.movie-content
  float left
  width 930px
</style>
