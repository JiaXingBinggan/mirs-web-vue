<template>
  <div class="index-movies" @dblclick="button_restore()">
    <h2>{{msg}}</h2>
    <div class="button_index">
      <mu-flat-button v-for="button in button_index" :label="button.button_option" class="demo-flat-button" @click="button_change(button)" :backgroundColor="button===current_button?'#0066CC':''" :color="button===current_button?'#FFFFFF':''"/>
    </div>
    <div class="select_index">
      <div class="select_title"><label>详细搜索</label></div>
      <el-select v-model="relase_year" placeholder="请选择年份" class="select_input">
        <el-option v-for="year in year_options" :value="year.year">
        </el-option>
      </el-select>
      <el-select v-model="origin_place" placeholder="选择地区" class="select_input">
        <el-option v-for="place in place_options" :value="place.place">
        </el-option>
      </el-select>
      <el-select v-model="movie_type" placeholder="选择类型" class="select_input">
        <el-option v-for="type in type_options" :value="type.type">
        </el-option>
      </el-select>
      <el-select v-model="sorting" placeholder="选择排序方式" class="select_input">
        <el-option v-for="sort in sort_options" :value="sort.sorting">
        </el-option>
      </el-select>
    </div>
</template>

<script>
import movieCatagory from '../../utils/movieCatagory'
export default {
  name: 'index-movies',
  data () {
    return {
      current_button: '',
      msg: '电影导航',
      button_index: movieCatagory.movieIndex.button_index,
      year_options: movieCatagory.movieIndex.year_options,
      relase_year: '',
      place_options: movieCatagory.movieIndex.place_options,
      origin_place: '',
      type_options: movieCatagory.movieIndex.type_options,
      movie_type: '',
      sort_options: movieCatagory.movieIndex.sort_options,
      sorting: ''
    }
  },
  methods: {
    button_change: function (arg) {
      this.current_button = arg
    },
    button_restore: function () {
      this.current_button = ''
    }
  }
}
</script>


<style lang="stylus" scoped>
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
</style>
