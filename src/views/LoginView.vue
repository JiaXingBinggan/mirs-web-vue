<template>
<div class="login-view">
  <h1>{{msg}}</h1>
  <div class="login-panel">
    <mu-text-field v-model="username" label="用户名" hintText="请输入用户名" type="text" fullWidth icon="person" labelFloat/><br/>
    <mu-text-field v-model="password" label="密码" hintText="请输入密码" type="password" fullWidth icon="lock" labelFloat/><br/>
    <div class="captcha">
      <div class="captcha-input">
        <mu-text-field v-model="captcha" label="验证码" hintText="请输入验证码" type="text" :maxLength="4" fullWidth icon="sms" labelFloat/><br/>
      </div>
      <div class="captcha-img">
        <img :src="captchaUrl" alt="点击刷新" />
      </div>
    </div>
    <div class="button">
      <mu-raised-button label="注册" class="register-button"/>
      <mu-raised-button label="登录" class="login-button" primary/>
    </div>
  </div>

  <div class="third-part-login">

  </div>
</div>
</template>

<script>
import api from '../api/api'
export default {
  name: 'login-view',
  data () {
    return {
      msg: 'This is login view!',
      username: '',
      password: '',
      captcha: '',
      captchaUrl: api.getCaptchaUrl()
    }
  }
}
</script>

<style lang="stylus" scoped>
h1
  background #864
.login-panel
  width 300px
  height 300px
  margin 0 auto
  .captcha
    .captcha-input
      float left
      width 200px
    .captcha-img
      float left
      width 100px
      height 80px
  .button
    width 300px
    margin 0 auto
    .register-button
      margin-left 24px
    .login-button
      margin-left 76px
img
  width 100px
  height 50px
  margin-bottom 0
  margin-top 10px



</style>
