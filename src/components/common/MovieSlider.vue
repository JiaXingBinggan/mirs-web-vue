<template>
  <div class="movie-slider">
    <slider height="360px">
      <slider-item>
        <div>
          <img src="http://img5.mtime.cn/mg/2016/11/29/090307.59995664.jpg">
        </div>
      </slider-item>
      <slider-item>
        <div>
          <img src="http://img5.mtime.cn/mg/2016/11/26/090325.11034692.jpg">
        </div>
      </slider-item>
      <slider-item>
        <div>
          <img src="http://img5.mtime.cn/mg/2016/11/28/155750.78638707.jpg">
        </div>
      </slider-item>
    </slider>
  </div>
</template>

<script>
// 项目地址：https://github.com/shhdgit/vue-easy-slider
import { Slider, SliderItem } from 'vue-easy-slider'
export default {
  name: 'movie-slider',
  components: {
    Slider,
    SliderItem
  }
}
</script>

<style lang="stylus" scoped>
/*.movie-slider*/
</style>
