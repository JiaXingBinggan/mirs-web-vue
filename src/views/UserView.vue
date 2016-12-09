<template>
  <div class="user-view">
    <!-- <el-row :gutter="20">
      <el-col :span="6">
        <div class="menu">
          <h2>用户信息</h2>
          <a class="menu-item" href="#">基础信息</a>
          <a class="menu-item" href="#">他的电影</a>
        </div>
      </el-col>
      <el-col :span="18"> -->
        <div id="form">
          <div class="face-area">
            <h3>他的帅脸</h3>
            <img class="face" height="200" width="200" src="https://avatars0.githubusercontent.com/u/17798805?v=3&u=a85ecf41aa0ef94009bfd4dcea7f3208069dcf16&s=400">
            <input type="button" class="upload-face input-button" @click="uploadFace" value="爆照">
          </div>
          <h3>{{title}}</h3>
          <span class="info-title">用户名：</span><span class="info-detail">{{userName}}</span><br>
          <span class="info-title">邮箱：</span><span class="info-detail">{{email}}</span><br>
          <span class="info-title">所在地：</span><span class="info-detail">{{address}}</span><br>
          <span class="info-title">学校：</span><span class="info-detail">{{college}}</span><br>
          <span class="info-title">专业：</span><span class="info-detail">{{major}}</span><br>
          <span class="info-title">座右铭：</span><span class="info-detail">{{motto}}</span><br>
      <!-- </el-col>
    </el-row> -->
    <template v-if="user">
      <h1>User : {{ user.id }}</h1>
      <ul class="meta">
        <li><span class="label">Created:</span> {{ user.created | timeAgo }} ago</li>
        <li><span class="label">Karma:</span> {{user.karma}}</li>
        <li v-if="user.about" v-html="user.about" class="about"></li>
      </ul>
    </template>
  </div>
</template>

<script>
export default {
  name: 'user-view',
  data () {
    return {
      paramId: 'user id from params:' + this.$route.params.id,
      userName: 'Jack',
      email: '1140746804@qq.com',
      address: '成都市',
      college: '电子科技大学',
      major: '软件技术',
      motto: '“你的名字。”非常好看！',
      title: '基础信息'
    }
  },
  computed: {
    user () {
      return ''
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
  .menu
    border 1px solid #d8d8d8
    border-radius 3px
    h2
      margin-top 0
      margin-bottom 0
      padding 8px 10px 8px 10px
      border-bottom 1px solid #eee
      border-top-radius 2px
      background-color #f7f7f7
    .menu-item
      display block
      padding 8px 10px 8px 10px
      border-bottom 1px solid #eee
  background-color #fff
  box-sizing border-box
  padding 2em 3em
  .face-area
    float right
    margin-right 40px
    img
      display block
      margin-bottom 20px
      border-radius 6px
    .upload-face
      width 100%
</style>
