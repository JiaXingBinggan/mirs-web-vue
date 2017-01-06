<template>
  <div class="system-messages">
    <h3>系统通知</h3>
    <div class="message-container">
    	<el-tooltip :content="message.message_more" placement="right" effect="light" v-for="message in messages">
	    <div class="message-block">
	    	<div class="system-block"><h4><i class="el-icon-message"> {{message.user}} </i><span> |</span></h4></div>
	    	<div class="message-dialog">
		    	<p>{{message.message}}</p>
		    	<!-- <div class="demo-flat-button">
		    		<el-tooltip :content="message.message" placement="bottom" effect="light">
					  Light
					</el-tooltip>
		    	</div> -->
			</div>
			<!-- <mu-dialog :open="dialog" title="系统消息" @close="close(message)">
			    {{message.message}}
			    <mu-flat-button slot="actions" primary @click="close(message)" label="已读"/>
			  </mu-dialog> -->
	    </div>
	    </el-tooltip>
	   </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialog: false,
      disabled: false,
      current_message: '',
      messages: [{
        user: 'system',
        message: '有人关注你了哦~有人关注你了哦~',
        message_more: '有人关注你了哦~有人关注你了哦~有人关注你了哦~有人关注你了哦~'
      }, {
        user: 'system',
        message: '有人关注你了哦~有人关注你了哦~',
        message_more: '有人关注你了哦~有人关注你了哦~有人关注你了哦~有人关注你了哦~'
      }, {
        user: 'system',
        message: '有人关注你了哦~有人关注你了哦~',
        message_more: '有人关注你了哦~有人关注你了哦~有人关注你了哦~有人关注你了哦~'
      }, {
        user: 'system',
        message: '有新电影上线了哦~',
        message_more: '有人关注你了哦~有人关注你了哦~有人关注你了哦~有人关注你了哦~'
      }, {
        user: 'system',
        message: '欢迎来到电影推荐平台~',
        message_more: '有人关注你了哦~有人关注你了哦~有人关注你了哦~有人关注你了哦~'
      }]
    }
  },
  methods: {
    open () {
      this.dialog = true
    },
    close () {
      this.dialog = false
      this.disabled = true
    }
  }
}
</script>
<style lang="stylus" scoped>
.message-container
	width 360px 
	border 1px solid #E0E0E0
	-webkit-border-radius 8px
	-moz-border-radius 8px
	border-radius 8px
	-webkit-box-shadow #666 0px 0px 10px
	-moz-box-shadow #666 0px 0px 10px
.message-block
	width 100%
	height 50px
	border-bottom 1px solid #E0E0E0
	margin 0px auto
	padding-left 10px
.message-block:hover
	background 	#F0F0F0
.system-block
	float left
.system-block span
	margin-left 10px
.message-dialog
	width 330px
	height 100%
.message-dialog p
	padding 20px 0px 0px 100px
	font-size 12px
.demo-flat-button
	margin -40px 20px 0px 0px
	float right
	font-size 12px
</style>