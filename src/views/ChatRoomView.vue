<template>
  <div class="chat-room-view">
    <div class="main-contant">
      <div v-for="message in systemMessages">
        <div v-if="message.from === username" class="ownMessage">
          <div class="ownblock">
           <mu-list-item :title="message.from" disabled><mu-avatar slot="right" :src="logo" :size="30"/></mu-list-item>
           <mu-chip class="demo-chip" style="margin-right:10px;font-size:16px">{{message.content}}</mu-chip>
          </div>
        </div>
        <div v-else class="othersMessage">
          <div class="otherblock">
           <mu-list-item :title="message.from" disabled><mu-avatar slot="left" :src="logo" :size="30"/></mu-list-item>
           <mu-chip class="demo-chip" style="margin-left:10px;font-size:16px">{{message.content}}</mu-chip>
          </div>
        </div>
      </div>
    </div>
    <div class="post_block" v-on:keyup.enter="sendMessage">
      <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 5}" v-on:keyup.enter="sendMessage" v-model="content" placeholder="请输入内容" class="send_input"></el-input>
      <el-button type="primary" icon="edit" v-on:keyup.enter="sendMessage" @click="sendMessage" class="send_button"></el-button>
    </div>
  </div>
</template>

<script>
import logo from '../../public/logo.png'
export default {
  name: 'chat-room-view',
  beforeCreate () {
    // 如果没有登录，跳转到登录页面
    if (!this.$store.state.user.login) {
      this.$router.replace('/login')
    }
  },
  data () {
    return {
      content: '',
      logo
    }
  },
  computed: {
    systemMessages () {
      return this.$store.state.user.messages['sMessages']
    },
    username () {
      return this.$store.state.user.user.username
    }
  },
  methods: {
    sendMessage () {
      if (this.content !== '') {
        var simpleMessage = {
          'from': this.username,
          'to': '0',
          'type': '0',
          'content': this.content
        }
        this.content = ''
        this.$store.dispatch('sendSimpleMessage', simpleMessage)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.chat-room-view
    width 1000px
    margin 50px auto
    text-align left
    overflow hidden
  .main-contant
    width 90%
    height 450px
    overflow-x hidden
    font-size 10px
    text-align left
    border 1px solid #000000
    border-radius 10px
    border-bottom-left-radius 0px
    border-bottom-right-radius 0px
    background #FCFCFC
    .ownMessage
      width 100%
      text-align right
      float right
      .ownblock
        float right
        margin 5px
        h2
        margin-left 10px
        margin-top 20px
        h2 i
          margin-left 10px
      .owntextarea
        width 300px
        margin-top 10px
        margin-left 10px
    .message
      width 100%
      display inline-block
  .othersMessage
    margin-top 20px
  .otherblock
    margin 5px
    .otherblock h2
      margin-right 10px
      margin-top 20px
        h2 i
          margin-left 10px
    .othertextarea
      width 300px
      margin-top 10px
  .post_block
    border 1px solid #000000
    border-top 0px
    padding-top 20px
    width 90%
    height 76px
    border-bottom-left-radius 10px
    border-bottom-right-radius 10px
  .send_input
    width 90%
    float left
    margin-top -20px
    border-right 0px
  .send_button
    margin-left 10px
    width 50px
    height 50px
    border-radius 50%
    background  #0080FF
</style>
