<template>
  <div class="simple-search" @keyup.enter="onSearch">
    <mu-text-field v-model="searchKeywords" class="appbar-search-field"  slot="right" hintText="请输入搜索内容"/>
    <div v-if="suggestions.length" class="search-suggest">
      <mu-list>
        <mu-list-item :title="suggestion.name" @click="goToMovie(suggestion.url)" v-for="suggestion in suggestions">
          <img :src="suggestion.pic" slot="left">
        </mu-list-item>
      </mu-list>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import movieApi from '../../api/movieApi'
export default {
  name: 'simple-search',
  data () {
    return {
      searchKeywords: '',
      suggestions: []
    }
  },
  methods: {
    goToMovie (id) {
      this.$router.push('/movie/' + id)
    },
    onSearch () {
      this.$router.push('/search?keywords=' + this.searchKeywords)
    },
    searchMovie: _.debounce(
      function () {
        let _this = this
        movieApi.searchMovie(this.searchKeywords)
        .then(function (res) {
          if (res.data) {
            _this.suggestions = res.data
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
      // 等待一秒，限制请求频率
      1000
    )
  },
  watch: {
    searchKeywords () {
      // 当用户输入发生变化时，向后台请求数据
      this.searchMovie()
    }
  }
}
</script>

<style lang="stylus" scoped>
.simple-search
  .search-suggest
    margin 0 auto
    width 260px
    background #eee
    position fixed
    z-index 999
    img
      width 50px

</style>
