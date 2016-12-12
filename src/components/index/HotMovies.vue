<template>
  <div class="hot-movies">
    <h3> {{msg}} </h3>
    <slider>
      <slider-item>
        <div>
          <img width="1000" height="300" src="http://img5.mtime.cn/mg/2016/11/29/090307.59995664.jpg">
          <div class="hot_movie_context">
            <label>哈尔的移动城堡&nbsp;<span>1999</span></label>
            <el-rate v-model="value5" disabled show-text text-color="#ff9900">
            </el-rate>
            <div class="hot_movie_introduce">
              <label>导演&nbsp;&nbsp;宫崎骏</label><br>
              <label>演员&nbsp;&nbsp;宫崎骏</label>
            </div>
            <div class="hot_movie_comment">
              <label>推荐理由</label><br>
              <p>上帝在第七天创造了人类，赋予了他们善良、感恩、勤劳、快乐、谦虚、克制与无私。</p>
            </div>
          </div>
        </div>
      </slider-item>
      <slider-item>
        <div>
          <img width="1000" height="300" src="http://img5.mtime.cn/mg/2016/11/26/090325.11034692.jpg">
          <div class="hot_movie_context">
            <label>你的名字&nbsp;<span>2016</span></label>
            <el-rate v-model="value5" disabled show-text text-color="#ff9900">
            </el-rate>
            <div class="hot_movie_introduce">
              <label>导演&nbsp;&nbsp;宫崎骏</label><br>
              <label>演员&nbsp;&nbsp;宫崎骏</label>
            </div>
            <div class="hot_movie_comment">
              <label>推荐理由</label><br>
              <p>上帝在第七天创造了人类，赋予了他们善良、感恩、勤劳、快乐、谦虚、克制与无私。</p>
            </div>
          </div>
        </div>
      </slider-item>
      <slider-item>
        <div>
          <img width="1000" height="300" src="http://img5.mtime.cn/mg/2016/11/28/155750.78638707.jpg">
          <div class="hot_movie_context">
            <label>昨夜秋风凋碧树&nbsp;<span>1999</span></label>
            <el-rate v-model="value5" disabled show-text text-color="#ff9900">
            </el-rate>
            <div class="hot_movie_introduce">
              <label>导演&nbsp;&nbsp;宫崎骏</label><br>
              <label>演员&nbsp;&nbsp;宫崎骏</label>
            </div>
            <div class="hot_movie_comment">
              <label>推荐理由</label><br>
              <p>上帝在第七天创造了人类，赋予了他们善良、感恩、勤劳、快乐、谦虚、克制与无私。</p>
            </div>
          </div>
        </div>
      </slider-item>
    </slider>
  </div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider'
export default {
  name: 'hot-movies',
  data () {
    return {
      msg: '正在热映的电影',
      value5: 4.7
    }
  },
  components: {
    Slider,
    SliderItem
  }
}
</script>


<style lang="stylus" scoped>
.hot-movies
  height 350px
.hot-movies h3
  border-bottom 1px solid #d0d0d0
  padding-bottom 15px
.hot_movie_context
  background #F0F0F0
  height 300px
  width 280px
  padding-top 30px
  padding-left 25px
  padding-right 20px
  margin-top -305px
  margin-left 1000px
.hot_movie_context label
  font-size 20px
  color #004B97
.hot_movie_context label span
  font-size 16px
  color #000000
.hot_movie_context .hot_movie_introduce
  margin-top 20px
.hot_movie_context .hot_movie_introduce label
  font-size 16px
  color #000000
.hot_movie_context .hot_movie_comment
  margin-top 30px
.hot_movie_context .hot_movie_comment label
  font-size 18px
  color #0066CC
.hot_movie_context .hot_movie_comment p
  font-size 12px
  color #ADADAD
</style>
