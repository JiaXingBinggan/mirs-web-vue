<template>
  <div class="movie-view">
    <h1>{{msg}}</h1>
    <div id="content">
      <div id="header">
        <section id="header-left">
          <h1>
            <span id="name" v-text="movie.name"></span>
            <span id="year" v-text="movie.movie_year"></span>
          </h1>
          <div class="article">
            <div id="cover">
              <a class="nbgnbg">
                <img :src="movie.coverLink">
              </a>
            </div>
            <div id="info">
              <span v-show="movie.directors">
                <span class="pl">导演：</span>
                <span class="attrs">{{movie.directors}}</span>
                <br>
              </span>
              <span v-show="movie.screenwriters">
                <span class="pl">编剧：</span>
                <span class="attrs">{{movie.screenwriters}}</span>
                <br>
              </span>
              <span class="actor" v-show="movie.actors">
                <span class="pl">主演：</span>
                <span class="attrs">
                <span>{{movie.actors}}</span>
                </span>
                <br>
              </span>
              <span v-show="movie.types">
                <span class="pl">类型：</span>
                <span class="attrs">{{movie.types}}</span>
                <br>
              </span>
              <span v-show="movie.originPlace">
                <span class="pl">制片国家/地区：</span>
                {{movie.originPlace}}
                <br>
              </span>
              <span v-show="movie.languages">
                <span class="pl">语言：</span>
                {{movie.languages}}
                <br>
              </span>
              <span v-show="movie.releaseDate">
                <span class="pl">上映日期：</span>
                <span>{{movie.releaseDate}}</span>
                <br>
              </span>
              <span v-show="movie.runtime">
                <span class="pl">片长：</span>
                <span>{{movie.runtime}}</span>
                <br>
              </span>
              <span v-show="movie.anotherNames">
                <span class="pl">又名：</span>
                <span>{{movie.anotherNames}}</span>
                <br>
              </span>
              <span v-show="movie.officialWebsite">
                <span class="pl">官方网站：</span>
                <a :href="movie.officialWebsite | addHttp" >{{movie.officialWebsite}}</a>
                <!-- <a :href="movie.officialWebsite">{{movie.officialWebsite}}</a> -->
                <br>
              </span>
              <span v-show="movie.imdb_link">
                <span class="pl">IMDb链接：</span>
                <a :href="movie.imdb_link | addIMDbLink">{{movie.imdb_link}}</a>
                <br>
              </span>
              <span v-show="doubanRating">
                <div id="ratingPlace">
                  <span class="pl" id="ratingLeft">豆瓣评分：</span>
                  <el-rate :max=10 v-model="doubanRating" id="ratingRight"  disabled show-text text-color="#ff9900" :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                </el-rate>
                </div>
                </el-rate>
                <br>
              </span>
              <span v-show="imdbRating">
                <div id="ratingPlace">
                  <span class="pl" id="ratingLeft">IMDb评分：</span>
                  <el-rate :max=10 v-model="imdbRating" id="ratingRight" disabled show-text text-color="#ff9900" :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                  </el-rate>
                </div>
                <br>
              </span>
              <span v-show="imdbRating">
                <div id="ratingPlace">
                  <span class="pl" id="ratingLeft">本站评星：</span>
                  <el-rate :max=5 v-model="imdbRating" id="ratingRight" disabled  text-color="#ff9900" :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                  </el-rate>
                </div>
                <br>
              </span>
            </div>
        </section>
        <section id="header-right">
          <div id="short-comment">
              <h2>
                {{movie.name}}的短评· · · · · ·
              </h2>
              <div>
               <el-popover
                v-model="visibleComment"
                ref="popover4"
                placement="right"
                width="400"
                trigger="click">
                <mu-text-field v-model="commentText" hintText="不允许超过100个字符" :errorText="multiLineInputErrorText" @textOverflow="handleMultiLineOverflow" multiLine :rows="2" :rowsMax="6" :maxLength="100" fullWidth/><br/>
                <el-button :plain="true" type="success" id="commentSubmit" @click="submitComment">提交</el-button>
                <el-button :plain="true" type="warning" id="commentCancle" @click="cancleComment">取消</el-button>
                </el-popover>
                <el-popover
                  v-model="visibleRating"
                  ref="popover6"
                  placement="right"
                  width="200"
                  >
                  <div class="block">
                    <el-rate
                      :max=5
                      v-model="valueRating"
                      show-text text-color="#ff9900"
                      :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                    </el-rate>
                  </div>
                  <br>
                  <el-button :plain="true" type="warning" id="ratingCancle" @click="cancleRating">取消</el-button>
                  <el-button :plain="true" type="success" id="ratingSubmit" @click="submitRating">提交</el-button>
                </el-popover>
                <el-button type="text" v-popover:popover4 id="comment-btn">我来写评论</el-button>
                <el-button type="text" v-popover:popover6 id="rating-btn">我来评星</el-button>
              </div>

              <div class="block">
                <div id="comment-items">
                  <div class="comment-item" v-for='comment in currentComments'>
                    <span class="comment-info">
                      <div>
                        <span class="comment-author">{{comment.comment_author}}</span>
                        <span class="comment-date">{{comment.comment_date}}</span>
                      </div>
                      <span class="comment-text">{{comment.comment_text}}</span>
                    </span>
                  </div>
                  <br>
                </div>
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-size="sizePerOnePage"
                  layout="total, prev, pager, next"
                  :total="totalCommentSize">
                </el-pagination>
              </div>
          </div>
        </section>
      </div>
      <section id="synopsis" class="section-same">
        <!-- 剧情简介 -->
      <h2>{{movie.name}}的剧情简介  ·  ·  ·  ·  ·  ·</h2>
      <div id="synopsis-content">
            　　{{movie.synopsis}}
      </div>
      </section>
      <section id="photo" class="section-same">
        <h2>
          {{movie.name}}的图片 · · · · · ·(
        <a href="https://movie.douban.com/photos/photo/2293569209/">全部</a>
        )
        </h2>
        <ul>
          <!-- <li v-for="stillPhoto in movie.stillsPhotosLinks">
            <a href="https://movie.douban.com/photos/photo/2293569209/">
            <img :src="stillPhoto">
          </li> -->
        </ul>
        <br><br><br><br><br><br>
        <br>
      </section>
      <section id="award" class="section-same">
        <h2>
          {{movie.name}}的获奖情况 · · · · · ·
        </h2>
        <div v-if="movie.awards">
          {{movie.awards}}
        </div>
        <div v-else>
          暂无
        </div>
      </section>
      <section id="also-like-movie" class="section-same">
        <h2>喜欢这部电影的人也喜欢 · · · · · ·</h2>
        <div id="also-like-movie-content">
          <dl>
            <dt>
              <a href="https://movie.douban.com/subject/25814705/?from=subject-page">
                <img src="https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2221319641.jpg">
              </a>
            </dt>
            <dd>
              <a href="https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p1272904657.jpg">萤火之森</a>
            </dd>
          </dl>
          <dl>
            <dt>
              <a href="https://movie.douban.com/subject/25814705/?from=subject-page">
                <img src="https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p1272904657.jpg">
              </a>
            </dt>
            <dd>
              <a href="https://movie.douban.com/subject/5989818/?from=subject-page">小森林 夏秋篇</a>
            </dd>
          </dl>
          <dl>
            <dt>
              <a href="https://movie.douban.com/subject/25814705/?from=subject-page">
                <img src="https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p2266293606.jpg">
              </a>
            </dt>
            <dd>
              <a href="https://movie.douban.com/subject/25814705/?from=subject-page">小森林 夏秋篇</a>
            </dd>
          </dl>
          <dl>
            <dt>
              <a href="https://movie.douban.com/subject/25814705/?from=subject-page">
                <img src="https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p1958733032.jpg">
              </a>
            </dt>
            <dd>
              <a href="https://movie.douban.com/subject/25814705/?from=subject-page">小森林 夏秋篇</a>
            </dd>
          </dl>
          <dl>
            <dt>
              <a href="https://movie.douban.com/subject/25814705/?from=subject-page">
                <img src="https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2221319641.jpg">
              </a>
            </dt>
            <dd>
              <a href="https://movie.douban.com/subject/25814705/?from=subject-page">小森林 夏秋篇</a>
            </dd>
          </dl>
          <dl>
            <dt>
              <a href="https://movie.douban.com/subject/25814705/?from=subject-page">
                <img src="https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p1272904657.jpg">
              </a>
            </dt>
            <dd>
              <a href="https://movie.douban.com/subject/25814705/?from=subject-page">小森林 夏秋篇</a>
            </dd>
          </dl>
          <dl>
            <dt>
              <a href="https://movie.douban.com/subject/25814705/?from=subject-page">
                <img src="https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p1272904657.jpg">
              </a>
            </dt>
            <dd>
              <a href="https://movie.douban.com/subject/25814705/?from=subject-page">小森林 夏秋篇</a>
            </dd>
          </dl>
          <dl>
            <dt>
              <a href="https://movie.douban.com/subject/25814705/?from=subject-page">
                <img src="https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2221319641.jpg">
              </a>
            </dt>
            <dd>
              <a href="https://movie.douban.com/subject/25814705/?from=subject-page">小森林 夏秋篇</a>
            </dd>
          </dl>
          <dl>
            <dt>
              <a href="https://movie.douban.com/subject/25814705/?from=subject-page">
                <img src="https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p1272904657.jpg">
              </a>
            </dt>
            <dd>
              <a href="https://movie.douban.com/subject/25814705/?from=subject-page">小森林 夏秋篇</a>
            </dd>
          </dl>
          <dl>
            <dt>
              <a href="https://movie.douban.com/subject/25814705/?from=subject-page">
                <img src="https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2221319641.jpg">
              </a>
            </dt>
            <dd>
              <a href="https://movie.douban.com/subject/25814705/?from=subject-page">小森林 夏秋篇</a>
            </dd>
          </dl>
        </div>
      </section>
      <div id="imgTest"></div>
    </div>
  </div>
</template>

<script>
import movieApi from '../api/movieApi'
export default {
  name: 'movie-view',
  created () {
    this.get_one_movie()
  },
  data () {
    return {
      // msg: 'This is movie view!一个电影的页面',
      commentText: '',
      currentPage: 1,
      visibleComment: false,
      visibleRating: false,
      valueRating: null,
      // 评论输入超过规定长度
      multiLineInputErrorText: '',
      currentComments: [],
      sizePerOnePage: 5,
      movie: {
        actors: '',
        alsoLikeMovies: [],
        anotherNames: '',
        awards: '',
        coverLink: '',
        directors: '',
        doubanId: '',
        doubanRating: '',
        id: '',
        imdbLink: '',
        imdbRating: '',
        languages: '',
        name: '',
        officialWebsite: '',
        originPlace: '',
        posterPhotosLinks: [],
        releaseDate: '',
        releaseYear: '',
        reviews: [],
        runtime: '',
        screenwriters: '',
        shortPopComments: [],
        stillsPhotosLinks: [],
        synopsis: '',
        types: '',
        wallpaperPhotosLinks: []
      }
    }
  },
  methods: {
    get_one_movie () {
      var id = this.$route.params.id
      var _this = this
      movieApi.getMovieByMovieId(id)
      .then(function (res) {
        if (res.data['success'] === false) {
          _this.$message({
            message: res.data['error'],
            type: 'error'
          })
          _this.$router.push('/find')
        } else {
          // 成功
          // let movie = JSON.stringify(res.data['data'])
          let movie = res.data['data']
          // 处理json,把字符串转成json
          /* no-useless-escape */
          console.log(typeof (movie['shortPopComments']))
          // 强行处理\"\"造成的作物
          /* eslint no-useless-escape: "off", curly: "error" */
          movie['shortPopComments'] = movie['shortPopComments'].replace(/\"\"/g, '\"')
          // shortPopComments如果有错就赋值为空
          try {
            movie['shortPopComments'] = JSON.parse(movie['shortPopComments'] || '[]')
          } catch (e) {
            movie['shortPopComments'] = []
          }
          movie['posterPhotosLinks'] = JSON.parse(movie['posterPhotosLinks'] || '[]')
          movie['stillsPhotosLinks'] = JSON.parse(movie['stillsPhotosLinks'] || '[]')
          movie['wallpaperPhotosLinks'] = JSON.parse(movie['wallpaperPhotosLinks'] || '[]')
          // review如果要用和shortPopComment一样处理
          // movie['reviews'] = JSON.parse(movie['reviews'] || '[]')
          movie['reviews'] = []
          movie['awards'] = movie['awards'].replace(/\\xa0/g, '').replace(/\'/g, '"')
          movie['alsoLikeMovies'] = movie['alsoLikeMovies'].replace(/\\xa0/g, '').replace(/\'/g, '"')
          movie['awards'] = JSON.parse(movie['awards'] || '[]')
          var tempAwards = ''
          movie['alsoLikeMovies'] = JSON.parse(movie['alsoLikeMovies'] || '[]')
          for (var i = 0; i < movie['awards'].length; i++) {
            tempAwards = tempAwards + movie['awards'][i] + ' '
          }
          movie['awards'] = tempAwards
          console.log(movie)
          _this.movie = movie
          _this.getCurrentComment(1)
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
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.getCurrentComment(val)
    },
    getCurrentComment (page) {
      var size = this.movie.shortPopComments.length
      // var sizePerOnePage = 2
      var startComment = this.sizePerOnePage * (page - 1)
      var endComment = startComment + this.sizePerOnePage
      endComment = endComment < size ? endComment : size
      this.currentComments = []
      for (var i = startComment; i < endComment; i++) {
        this.currentComments.push(this.movie.shortPopComments[i])
      }
    },
    handleMultiLineOverflow (isOverflow) {
      this.multiLineInputErrorText = isOverflow ? '超过啦！！！！' : ''
    },
    submitComment () {
      if (this.multiLineInputErrorText !== '') {
        this.$message({
          message: '超过了，请重新评论！',
          type: 'warning'
        })
      } else {
        var commentDate = new Date().toLocaleDateString().replace(/\//g, '-')
        var commentAuthor = '匿名'
        if (this.$store.state.user.login) {
          commentAuthor = this.$store.state.user.user.username
        }
        var comment = {
          'comment_date': commentDate,
          'comment_text': this.commentText,
          'comment_author': commentAuthor
        }

        this.movie.shortPopComments.unshift(comment)
        // 加到comment
        // 传上去
        // 提交评论让评论框消失
        this.visibleComment = false
        // 成功弹出成功，置空
        this.$message({
          message: '评论成功！',
          type: 'success'
        })
        this.commentText = ''
      }
    },
    cancleComment () {
      this.visibleComment = false
      this.commentText = ''
    },
    submitRating () {
      // 置空
      this.valueRating = null
      // 弹出成功
      this.$message({
        message: '评星成功！',
        type: 'success'
      })
      // 隐藏窗口
      this.visibleRating = false
    },
    cancleRating () {
      this.visibleRating = false
    }
    // handlePhotoRequest () {
    //   var referUrl = 'https://movie.douban.com/subject/' + this.movie.id + '/all_photos'
    //   var url = 'https://movie.douban.com/photos/photo/2366424485/'
    //   var xhr = new XMLHttpRequest()
    //   xhr.open('GET', url, true)
    //   xhr.responseType = 'blob'
    //   xhr.setRequestHeader('Referer', referUrl)
    //   xhr.onload = function () {
    //     if (this.status === 200) {
    //       var blob = this.response
    //       var img = document.createElement('img')
    //       img.onload = function (e) {
    //         window.URL.revokeObjectURL(img.src)
    //       }
    //       img.src = window.URL.createObjectURL(blob)
    //       $('imgTest').html(img)
    //     }
    //   }
    //   xhr.send()
    // }
  },
  computed: {
    totalCommentSize () {
      console.log('computed test2222222222222\n')
      console.log(this.movie.shortPopComments.length)
      return this.movie.shortPopComments.length
    },
    doubanRating () {
      return parseFloat(this.movie.doubanRating)
    },
    imdbRating () {
      return parseFloat(this.movie.imdbRating)
    }
  },
  watch: {
    movie: {
      handler: function (val, oldVal) {
        console.log('watch 33333333333333333333\n')
        this.handleCurrentChange(this.currentPage)
      },
      deep: true
    }
  }
}

</script>

<style lang="stylus" scoped>
h2
  color:#22AA3E;

h1
  font-size:25px;
  font-weight:bold;
  color:#494949;
  line-height:1.1;
a
  color:#0085DD;
.section-same
  width:1000px;
  float:left;
  margin-left:10%;
  margin-right:10%;
#header
  width:1000px;
  margin-left:10%;
  margin-right:10%;
  margin-top: 20px;
#cover
  .nbgnbg
    img
      width:70%;
#header-left
  float:left;
  width: 400px;
#header-right
  padding-top:50px;
  margin-left:600px;
  width: 500px;
#comment-btn
  width:80px;
  color:#ca6445;
  background:#fae9da;
#rating-btn
  margin-left: 50%;
  width:80px;
  color:#ca6445;
  background:#fae9da;
.comment-author
  color:#0085DD;
#synopsis-content
  width:1000px;

#photo
  ul
    float:left;
    li
      float:left;
      img
        height:100px;
#also-like-movie-content
  float:left;
  dl
    float:left;
    img
      height:250px;
#ratingPlace
  float:left;
#ratingLeft
  float:left;
#ratingRight
  float:left;
#commentSubmit
  float:right;
#commentCancle
  float:left;
</style>
