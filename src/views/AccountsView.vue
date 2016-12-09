<template>
  <div class="accounts-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="menu">
          <h2>信息设置</h2>
          <a class="menu-item" href="#">你的信息</a>
          <a class="menu-item" href="#">更改密码</a>
        </div>
      </el-col>
      <el-col :span="18">
        <div id="form">
          <div class="face-area">
            <h3>你的帅脸</h3>
            <img class="face" height="200" width="200" src="https://avatars0.githubusercontent.com/u/17798805?v=3&u=a85ecf41aa0ef94009bfd4dcea7f3208069dcf16&s=400">
            <input type="button" class="upload-face input-button" @click="uploadFace" value="爆照">
          </div>
          <h3>{{title}}</h3>
          <span>用户名</span><br><input class="input-line" v-modle="userName" v-bind:value="userName">
          <br><br>
          <input type="radio" id="male" value="male" v-model="sex">
          <label for="male">帅哥</label>
          <input type="radio" id="female" value="female" v-model="sex">
          <label for="female">美女</label>
          <br><br>
          <span>邮箱</span><br><input class="input-line" v-modle="email" v-bind:value="email">
          <br><br>
          <span>所在地</span><br><input class="input-line" v-modle="address" v-bind:value="address">
          <br><br>
          <span>大学</span><br><input class="input-line" v-modle="college" v-bind:value="college">
          <br><br>
          <span>专业</span><br><input class="input-line" v-modle="major" v-bind:value="major">
          <br><br>
          <span>座右铭</span><br><textarea class="input-text" v-modle="motto" v-bind:value="motto"></textarea>
          <br><br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" class="input-button" @click="submit()" value="保存">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="button" class="input-button" @click="exit()" value="退出">
        </div>
      </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'accounts-view',
  beforeCreate () {
    // 如果没有登录，跳转到登录页面
    if (!this.$store.state.user.login) {
      this.$router.replace('/login')
    }
  },
  data () {
    return {
      title: '你的信息',
      userName: 'Jack',
      sex: 'male',
      email: '1140746804@qq.com',
      address: '成都市',
      college: '电子科技大学',
      major: '软件技术',
      motto: '“你的名字。”很好看！'
    }
  },
  methods: {
    submit () {

    },
    exit () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
.accounts-view
  width 980px
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
    a
      color #111
  .input-button
    border-radius 3px
    width 80px
    background-color #eee
    border 1px solid #ddd
  #form
    margin-left auto
    margin-right auto
    padding-left 20px
    .input-line, .input-text
      width 360px
      margin-top 6px
      padding 6px 8px
      border 1px solid #ddd
      border-radius 3px
      background-color #fafafa
      box-shadow inset 0 1px 2px rgba(0, 0, 0, 0.075)
    .input-text
      height 90px
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
