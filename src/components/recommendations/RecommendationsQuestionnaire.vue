<template>
  <div class="recommendations-questionnaire">
    <h3>调查问卷</h3>
    <div class="question-container">
    	<h3>1.你多久看一次电影（单选）<span>*</span></h3>
    	<div class="questionbox">
    		<div v-for="watch in movie_time">
	    		<mu-radio :label="watch.watch_time" name="time_group" nativeValue="simple1" class="demo-radio"/>
	    		</mu-radio><br/>
	    	</div>
    	</div>
    	<h3>2.你喜欢看什么电影 <span>*</span></h3>
    	<div class="questionbox">
			<mu-select-field v-model="movietype" :labelFocusClass="['label-foucs']" label="选择你喜欢的类型">
			   <mu-menu-item v-for="movietype in movie_type" ccc="dddd" ttt="ddd" :value="movietype.type" :title="movietype.type" />
			</mu-select-field>
    	</div>
    	<h3>3.你的年龄（单选）<span>*</span></h3>
    	<div class="questionbox">
    		<div v-for="age in ages">
	    		<mu-radio :label="age.age" name="age_group" nativeValue="simple2" class="demo-radio"/>
	    		</mu-radio><br/>
	    	</div>
    	</div>
    	<h3>4.你的观影方式（单选）<span>*</span></h3>
    	<div class="questionbox">
	    	<div v-for="movieprocess in watch_process">
	    		<mu-radio :label="movieprocess.process" name="process_group" nativeValue="simple3" class="demo-radio"/><br/>
	    		</mu-radio>
	    	</div>
    	</div>
    	<h3>请留下你的联系方式，我们将根据你的选择推荐电影 <span>*</span></h3>
    	<div class="questionbox">
	    	<span>姓名: </span><mu-text-field hintText="姓名"/><br/>
	    	<span>Tel: </span><mu-text-field hintText="Tel"/><br/>
	    	<span>Email: </span><mu-text-field hintText="Email"/><br/>
	    	<span>详细地址: </span><mu-text-field hintText="详细地址"/><br/>
    	</div>
    	<mu-raised-button label="提交" class="demo-raised-button" primary/>
  </div>
</template>
<script>
export default {
  name: 'recommendations-questionnaire',
  record: {
    time: '',
    movie: ''
  },
  data () {
    return {
      msg: '调查问卷',
      list: [],
      movietype: '',
      movie_time: [{
        watch_time: '几乎每天',
        watch_value: 'everyday'
      }, {
        watch_time: '几乎每周',
        watch_value: 'everyweek'
      }, {
        watch_time: '几乎每月',
        watch_value: 'everymonth'
      }, {
        watch_time: '更长时间看一次',
        watch_value: 'moretime'
      }],
      movie_type: [{
        type: '喜剧'
      }, {
        type: '剧情'
      }, {
        type: '爱情'
      }, {
        type: '家庭'
      }, {
        type: '犯罪'
      }, {
        type: '动作'
      }, {
        type: '悬疑'
      }, {
        type: '古装'
      }, {
        type: '纪录片'
      }, {
        type: '科幻'
      }, {
        type: '奇幻'
      }],
      ages: [{
        age: '20岁以下'
      }, {
        age: '20-25岁'
      }, {
        age: '26-30岁'
      }, {
        age: '30岁以上'
      }],
      watch_process: [{
        process: '电影院'
      }, {
        process: '电脑'
      }, {
        process: '两者兼有，在影院看偏多'
      }, {
        process: '两者兼有，用电脑看偏多'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
.question-container
	width 500px
	margin 0px auto
.questionbox
	width 500px
	border-bottom 1px solid #DCDCDC
	padding-bottom 10px
.questionbox span
	font-size 16px
	margin-right 20px
h3 span
	color red
.demo-raised-button
	margin  30px 0px 0px 180px
</style>