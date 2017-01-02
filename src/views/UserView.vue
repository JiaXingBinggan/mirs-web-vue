<template>
  <div class="user-view">
    <div id="form">
      <div class="face-area">
        <h3>他的帅脸</h3>
        <img class="face" src="https://avatars0.githubusercontent.com/u/17798805?v=3&u=a85ecf41aa0ef94009bfd4dcea7f3208069dcf16&s=400">
        <input type="button" class="focus input-button" @click="focus()" :value="focused === false ? '关 注' : '取消关注'">
      </div>
      <div class="user-info">
        <h2>基础信息</h2>
        <span class="info-title">用户名：</span><span class="info-detail">{{user.username}}</span><br>
        <span class="info-title">邮箱：</span><span class="info-detail">{{user.email}}</span><br>
        <span class="info-title">所在地：</span><span class="info-detail">{{user.location}}</span><br>
        <span class="info-title">学校：</span><span class="info-detail">{{user.university}}</span><br>
        <span class="info-title">专业：</span><span class="info-detail">{{user.major}}</span><br>
        <span class="info-title">座右铭：</span><span class="info-detail bio">{{user.bio}}</span><br>
      </div>
    <!-- <template v-if="user">
      <h1>User : {{ user.id }}</h1>
      <ul class="meta">
        <li><span class="label">Created:</span> {{ user.created | timeAgo }} ago</li>
        <li><span class="label">Karma:</span> {{user.karma}}</li>
        <li v-if="user.about" v-html="user.about" class="about"></li>
      </ul>
    </template> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-view',
  data () {
    return {
      user: {
        // paramId: 'user id from params:' + this.$route.params.id,
        username: 'Jack',
        email: '1140746804@qq.com',
        location: '成都市',
        university: '电子科技大学',
        major: '软件技术',
        bio: '“你的名字。”非常好看！“你的名字。”非常好看！“你的名字。”非常好看！“你的名字。”非常好看！“你的名字。”非常好看！'
      },
      focused: false
    }
  },
  method: {
    focus () {

    }
  }
  // preFetch: fetchUser,
  // beforeMount () {
  //   fetchUser(this.$store)
  // }
}
</script>

<style lang="stylus" scoped>
.user-view
  width 720px
  margin-top 50px
  margin-left auto
  margin-right auto
  padding 0
  padding-bottom 60px
  #form
    .face-area
      width 100px
      margin auto
      text-align center
      font 12px/1.3 'Arial','Microsoft YaHei'
      img
        width 100px
        height 100px
        display block
        margin-bottom 20px
        border-radius 100%
      .focus
        width 92px
        height 32px
        display inline-block
        text-align center
        font 12px/1.3 'Arial','Microsoft YaHei'
        font-size 14px
        word-spacing 2px
        color #fff
        box-shadow 0px 1px 2px rgba(0, 0, 0, 0.3)
        border-radius 3px
        background-color #f4722e
        border 1px solid #f4722e
        cursor pointer
    .user-info
      margin-top 50px
      margin-left 110px
      padding-right 60px
      font 12px/1.3 'Arial','Microsoft YaHei'
      h2
        padding-bottom 8px
        border-bottom 1px solid #d1d1d1
        font 18px/1.3 'Arial','Microsoft YaHei'
        font-weight 600
      span
        line-height 36px
      .info-title
        width 80px
        float left
        text-align right
        font-size 20px
        color #808080
      .info-detail
        display block
        margin-left 80px
        font-size 18px
        color #333
</style>
