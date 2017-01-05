<template>
  <div class="chat-room-view">
    <div class="main-contant">
      <div v-for="message in systemMessages">
        <div v-if="message.from === username" class="ownMessage">
          {{message.content}}:{{message.from}}
        </div>
        <div v-else class="othersMessage">
          {{message.from}}:{{message.content}}
        </div>
      </div>
    </div>
    <div class="post_block">
      <input v-on:keyup.enter="sendMessage" v-model="content" >
      <button v-on:keyup.enter="sendMessage" @click="sendMessage">发送</button>
    </div>
  </div>
</template>

<script>
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
      content: ''
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
    width 720px
    margin 50px auto
    text-align left
  .main-contant
    width 100%
    height 400px
    overflow scroll
    font-size 10px
    text-align left
    background-color #f2f2f2
    .ownMessage
      width 100%
      text-align right
      float right
    .message
      width 100%
      display inline-block
  .post_block
    float right
    width 250px
    height 100px

</style>
