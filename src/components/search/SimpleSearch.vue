<template>
  <div class="simple-search" @keyup.enter="onSearch" @mouseover="changeMouseStatus(true)">
    <mu-text-field v-model="searchKeywords" class="appbar-search-field"  slot="right" hintText="请输入搜索内容"/>
    <div v-if="suggestions.length && isMouseOver" class="search-suggest">
      <span class="close-search-suggest" @click="changeMouseStatus(false)">关闭</span>
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
      isMouseOver: false,
      searchKeywords: '',
      suggestions: []
    }
  },
  methods: {
    goToMovie (id) {
      this.isMouseOver = false
      this.$router.push('/movie/' + id)
    },
    onSearch () {
      this.$router.push('/search?keywords=' + this.searchKeywords)
    },
    changeMouseStatus (isOver) {
      this.isMouseOver = isOver
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
      this.getSuggestionMovie()
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
    .close-search-suggest
      float right
      color red
      cursor pointer

</style>
