<template>
  <div class="movie-view">
    <h1>{{msg}}</h1>
    <div id="content">
      <div id="header">
        <section id="header-left">
          <h1>
            <span id="name" v-text="movie.movie_name"></span>
            <span id="year" v-text="movie.movie_year"></span>
          </h1>
          <div class="article">
            <div id="cover">
              <a class="nbgnbg">
                <img src="https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2395733377.jpg">
              </a>
            </div>
            <div id="info">
              <span>
                <span class="pl">导演：</span>
                <span class="attrs">{{movie.directors}}</span>
              </span>
              <br>
              <span>
                <span class="pl">编剧：</span>
                <span class="attrs">{{movie.screenwriters}}</span>
              </span>
              <br>
              <span class="actor">
                <span class="pl">主演：</span>
                <span class="attrs">
                <span>{{movie.actors}}</span>
                </span>
              </span>
              <br>
              <span>
                <span class="pl">类型：</span>
                <span class="attrs">{{movie.types}}</span>
              </span>
              <br>
              <span>
                <span class="pl">制片国家/地区：</span>
                {{movie.origin_place}}
              </span>
              <br>
              <span>
                <span class="pl">语言：</span>
                {{movie.languages}}
              </span>
              <br>
              <span>
                <span class="pl">上映日期：</span>
                <span>{{movie.release_date}}</span>
              </span>
              <br>
              <span>
                <span class="pl">片长：</span>
                <span>{{movie.runtime}}</span>
              </span>
              <br>
              <span>
                <span class="pl">又名：</span>
                <span>{{movie.another_names}}</span>
              </span>
              <br>
              <span>
                <span class="pl">官方网站：</span>
                <a :href="movie.official_website | addHttp">{{movie.official_website}}</a>
              </span>
              <br>
              <span>
                <span class="pl">IMDb链接：</span>
                <a :href="movie.imdb_link | addIMDbLink">{{movie.imdb_link}}</a>
              </span>
              <br>
              <span>
                <div id="ratingPlace">
                  <span class="pl" id="ratingLeft">豆瓣评分：</span>
                  <el-rate :max=10 v-model="doubanRating" id="ratingRight"  disabled show-text text-color="#ff9900" :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                </el-rate>
                </div>
                </el-rate>
              </span>
              <br>
              <span>
                <div id="ratingPlace">
                  <span class="pl" id="ratingLeft">IMDb评分：</span>
                  <el-rate :max=10 v-model="imdbRating" id="ratingRight" disabled show-text text-color="#ff9900" :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                  </el-rate>
                </div>

              </span>
              <br>
              <span>
                <div id="ratingPlace">
                  <span class="pl" id="ratingLeft">本站评星：</span>
                  <el-rate :max=5 v-model="imdbRating" id="ratingRight" disabled  text-color="#ff9900" :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                  </el-rate>
                </div>
              </span>
              <br>
            </div>
        </section>
        <section id="header-right">
          <div id="short-comment">
              <h2>
                {{movie.movie_name}}的短评· · · · · ·
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
      <h2>{{movie.movie_name}}的剧情简介  ·  ·  ·  ·  ·  ·</h2>
      <div id="synopsis-content">
            　　{{movie.synopsis}}
      </div>
      </section>
      <section id="photo" class="section-same">
        <h2>
          {{movie.movie_name}}的图片 · · · · · ·(
        <a href="https://movie.douban.com/photos/photo/2293569209/">全部</a>
        )
        </h2>
        <ul>
          <li>
            <a href="https://movie.douban.com/photos/photo/2293569209/">
            <img src="https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p1272904657.jpg">
            </a>
          </li>
          <li>
            <img src="https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p1272904657.jpg">
          </li>
          <li>
            <img src="https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p1272904657.jpg">
          </li>
          <li>
            <img src="https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p1272904657.jpg">
          </li>
          <li>
            <img src="https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2221319641.jpg">
          </li>
          <li>
            <img src="https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2221319641.jpg">
          </li>
        </ul>
        <br><br><br><br><br><br>
        <br>
      </section>
      <section id="award" class="section-same">
        <h2>
          {{movie.movie_name}}的获奖情况 · · · · · ·(
        <a href="https://movie.douban.com/photos/photo/2293569209/">全部</a>
        )
        </h2>
        <ul>
          <li v-for="award in movie.awards ">
            {{ award}}
          </li>
          <li>
            第44届动画安妮奖 最佳导演(提名) 新海诚
          </li>
          <li>
            第第44届动画安妮奖 最佳独立动画长片(提名)
          </li>
          <li>
            第42届洛杉矶影评人协会奖 最佳动画片
          </li>
        </ul>
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
    </div>
  </div>
</template>

<script>
// import movieApi from '../../api/movieApi'
export default {
  name: 'movie-view',
  created () {
    this.getCurrentComment(1)
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
        movie_name: '你的名字。 君の名は。',
        movie_year: '2016',
        directors: '新海诚',
        screenwriters: '新海诚',
        actors: '上白石萌音/神木隆之介/成田凌/上白石萌音/神木隆之介/成田凌/上白石萌音/神木隆之介/成田凌',
        types: ' 动作 / 惊悚 / 犯罪',
        official_website: 'www.kiminona.com',
        origin_place: '日本',
        languages: '日语',
        release_date: '2016-12-02(中国大陆)/2016-08-26(日本)',
        douban_rating: '10',
        imdb_rating: '1.2',
        runtime: '106分钟',
        another_names: '你的名字 / 君之名 / Your Name',
        imdb_link: 'tt5311514',
        synopsis: '千年后再度回归的彗星造访地球的一个月前，日本深山的某个乡下小镇。女年后再度回归的彗星造访地球的一个月前，日本深山的某个乡下小镇。女高中生三叶（上白石萌音 配音）每天都过着忧郁的生活，而她烦恼的不光有担任镇长的父亲所举行的选举运动，还有家传神社的古老习俗。三叶身居这小镇之中，又处于过多在意周围人目光的年龄，因此对大都市的憧憬日益强烈。年后再度回归的彗星造访地球的一个月前，日本深山的某个乡下小镇。女高中生三叶（上白石萌音 配音）每天都过着忧郁的生活，而她烦恼的不光有担任镇长的父亲所举行的选举运动，还有家传神社的古老习俗。三叶身居这小镇之中，又处于过多在意周围人目光的年龄，因此对大都市的憧憬日益强烈。',
        short_pop_comments: [{'comment_date': '2011-06-05', 'comment_text': '黄屋子、红房顶、鸽子房、鸢尾、土豆；猪、乖孩子、窗外的天竺葵；盆景、荨麻、胡桃树下的阴凉；还有凯瑟琳，只要你愿意的话。这个清晨，在各种闹哄哄和各色滤镜下，纪念柳条', 'comment_author': '火山边缘'}, {'comment_date': '2012-01-14', 'comment_text': '又是行为艺术啊...', 'comment_author': '大宸'}, {'comment_date': '2013-04-07', 'comment_text': '重压下的集体狂欢', 'comment_author': '印尼燕窝周掌柜'}, {'comment_date': '2013-03-22', 'comment_text': '毫無才華，活該被禁', 'comment_author': '冰山李'}, {'comment_date': '2011-05-21', 'comment_text': '在我看来完全是耍宝', 'comment_author': 'iceman'}, {'comment_date': '看过2011-04-09', 'comment_text': '神经病院向左，捷克向右', 'comment_author': '丁一'}, {'comment_date': '2011-01-02', 'comment_text': '超级大飞片儿', 'comment_author': 'kurillaz'}, {'comment_date': '看过2013-01-24', 'comment_text': '6。色彩远胜题材', 'comment_author': 'Mannialanck'}, {'comment_date': '2009-11-11', 'comment_text': '啊啊。。当时就推荐看了。。', 'comment_author': '欢乐分裂'}, {'comment_date': '2013-02-11', 'comment_text': '鸡飞与狗跳——一次演出', 'comment_author': '子虚乌有亡是'}, {'comment_date': '2010-08-06', 'comment_text': '下载及中文字幕http://www.douban.com/note/61873376/', 'comment_author': '般若死火'}, {'comment_date': '2012-09-04', 'comment_text': 'http://www.56.com/w27/play_album-aid-9863085_vid-NTY2MDQ2NjU.html\r链接给大家\r可能我还没完全看懂', 'comment_author': '小嘉'}, {'comment_date': '2011-12-23', 'comment_text': '極端的瘋癲，卻又不同於吉普賽的那種瘋狂中嵌著的深深的哀婉與放逐的失落之感，是對於生活的一種極度的希望與自信吧，才能那樣的癲狂如同一群不諳悲苦的瘋子，最後的酒神之會，大雨中的舞蹈，一場大火，將情緒燒到了極致。當然，狂喜之中總潛伏著悲愁，但是，我那些細瑣悵惘在你怒放的歡愉中黯然消逝。', 'comment_author': '蘇小北'}, {'comment_date': '2014-11-13', 'comment_text': '也有不少喜欢的片段，但总体还是达不到期待值。', 'comment_author': 'vivi'}, {'comment_date': '2010-06-24', 'comment_text': '我看完了转头问我朋友说好看么，她傻笑着说，呵呵，没看懂，怎么都是群傻子？', 'comment_author': '黑大壮女神'}, {'comment_date': '2014-01-02', 'comment_text': '这种味道就对了！', 'comment_author': '枯川满'}, {'comment_date': '2011-06-30', 'comment_text': '美感十足~\r', 'comment_author': '六___'}, {'comment_date': '2010-10-11', 'comment_text': '在线看，画质太差了，必须重看！', 'comment_author': '万'}, {'comment_date': '2012-12-09', 'comment_text': '魔幻现实主义呀看不懂看不懂看不懂看不懂', 'comment_author': '王斯王'}, {'comment_date': '2010-08-31', 'comment_text': '我是标题党，但此片让人惊艳。', 'comment_author': '玛婴'}, {'comment_date': '2010-08-31', 'comment_text': '我是标题党，但此片让人惊艳。', 'comment_author': '玛婴222'}],
        awards: ['第67届奥斯卡金像奖', '最佳纪录长片(提名)', 'Jean Bach', '第67届奥斯卡金像奖', '最佳纪录长片(提名)', 'Jean Bach', '第67届奥斯卡金像奖', '最佳纪录长片(提名)', 'Jean Bach']
      }
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.getCurrentComment(val)
    },
    getCurrentComment (page) {
      var size = this.movie.short_pop_comments.length
      // var sizePerOnePage = 2
      var startComment = this.sizePerOnePage * (page - 1)
      console.log(startComment)
      var endComment = startComment + this.sizePerOnePage
      endComment = endComment < size ? endComment : size
      this.currentComments = []
      for (var i = startComment; i < endComment; i++) {
        this.currentComments.push(this.movie.short_pop_comments[i])
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

        this.movie.short_pop_comments.unshift(comment)
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
      console.log(this.valueRating)
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
  },
  computed: {
    totalCommentSize () {
      return this.movie.short_pop_comments.length
    },
    doubanRating () {
      return parseFloat(this.movie.douban_rating)
    },
    imdbRating () {
      return parseFloat(this.movie.imdb_rating)
    }
  },
  watch: {
    movie: {
      handler: function (val, oldVal) {
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
