<template>
  <div class="simple-search" @keyup.enter="onSearch">
    <mu-text-field v-model="searchKeywords" class="appbar-search-field"  slot="right" hintText="请输入搜索内容"/>
    <div class="search-suggest">
      <mu-list>
        <mu-list-item :title="suggestion.name" @click="goToMovie(suggestion.url)" v-for="suggestion in suggestions">
          <img :src="suggestion.pic" slot="left">
        </mu-list-item>
      </mu-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'simple-search',
  data () {
    return {
      searchKeywords: '',
      suggestions: [
        {
          'url': '268',
          'name': '黑板 第1夜 ブラックボード 第1夜',
          'pic': 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2339240482.jpg'
        },
        {
          'url': '813',
          'name': 'BBC 巴黎 第一季 BBC Paris Season 1',
          'pic': 'https://img1.doubanio.com/lpic/s8989209.jpg'
        },
        {
          'url': '719',
          'name': '热浪来袭！猫之谷！！ 熱いぞ!!猫ヶ谷',
          'pic': 'https://img3.doubanio.com/lpic/s8965754.jpg'
        },
        {
          'url': '493',
          'name': '山下智久ROUTE66~只身一人的美国 山下智久・ルート66〜たった一人のアメリカ',
          'pic': 'https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2284691247.jpg'
        }
      ]
    }
  },
  methods: {
    goToMovie (id) {
      this.$router.push('/movie/' + id)
    },
    onSearch () {
      this.$router.push('/search?keywords=' + this.searchKeywords)
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
