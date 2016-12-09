<template>
  <div id="form">
    <div class="face-area">
      <h3>你的帅脸</h3>
      <img class="face" height="200" width="200" src="https://avatars0.githubusercontent.com/u/17798805?v=3&u=a85ecf41aa0ef94009bfd4dcea7f3208069dcf16&s=400">
      <input type="button" class="upload-face input-button" value="爆照">
    </div>
    <h3>你的信息</h3>
    <span>用户名</span><br><input class="input-line" v-model="user.username">
    <br><br>
    <!-- <input type="radio" name="radio" id="male" value="male" v-model="user.sex">
    <label for="male">帅哥</label>
    <input type="radio" name="radio" id="female" value="female" v-model="user.sex">
    <label for="female">美女</label>
    <br><br> -->
    <span>邮箱</span><br><input class="input-line" v-model="user.email">
    <br><br>
    <span>所在地</span><br><input class="input-line" v-model="user.location">
    <br><br>
    <span>大学</span><br><input class="input-line" v-model="user.university">
    <br><br>
    <span>专业</span><br><input class="input-line" v-model="user.major">
    <br><br>
    <span>座右铭</span><br><textarea class="input-text" v-model="user.bio"></textarea>
    <br><br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="button" class="input-button" @click="submit()" value="保存">
  </div>
</template>

<script>
import userApi from 'src/api/userApi'

export default {
  name: 'user-info',
  created () {
    this.user = JSON.parse(JSON.stringify(this.$store.state.user.user))
  },
  data () {
    return {
      user: {}
    }
  },
  methods: {
    submit () {
      var _this = this
      userApi.updateProfile(this.user)
      .then(function (res) {
        if (res.data['success'] === false) {
          _this.$message({
            message: res.data['error'],
            type: 'error'
          })
        } else {
          // 更新成功
          _this.$store.dispatch('doLogin', _this.user)
          _this.user = JSON.parse(JSON.stringify(_this.$store.state.user.user))
          _this.$message({
            message: '更新成功！',
            type: 'success'
          })
        }
      })
      .catch(function (res) {
        if (res instanceof Error) {
          window.console.log(res.message)
        } else {
          window.console.log(res.data)
        }
      })
    }
  }
  // watch: {
  //   user: {
  //     handler: function (val, oldVal) {
  //
  //     },
  //     deep: true
  //   }
  // }
}
</script>

<style lang="stylus" scroped>
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
