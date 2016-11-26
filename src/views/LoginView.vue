<template>
<div class="login-view">
  <div class="login-panel">
    <mu-text-field v-model="username" label="用户名/邮箱" hintText="请输入用户名/邮箱" :errorText="usernameError" type="text" fullWidth icon="person" labelFloat/><br/>
    <mu-text-field v-model="password" label="密码" hintText="请输入密码" :errorText="passwordError" type="password" fullWidth icon="lock" labelFloat/><br/>
    <captcha></captcha>
    <div class="button">
      <mu-raised-button @click="register" label="注册" class="register-button"/>
      <mu-raised-button @click="doLogin" label="登录" class="login-button" primary/>
    </div>
  </div>

  <div class="third-part-login">

  </div>
</div>
</template>

<script>
import userApi from '../api/userApi'
import SHA512 from 'crypto-js/sha512'
import Captcha from '../components/common/Captcha'
export default {
  name: 'login-view',
  components: { Captcha },
  beforeCreate () {
    // 使用验证码组件前，需要先清空组件的状态
    this.$store.dispatch('setCaptcha', '')
    this.$store.dispatch('setCaptchaError', '')
  },
  data () {
    return {
      username: '',
      password: '',
      usernameError: '',
      passwordError: ''
    }
  },
  methods: {
    register () {
      this.$router.push('/register')
    },
    doLogin () {
      if (this.username === '') {
        this.usernameError = '请输入用户名'
      }
      if (this.password === '') {
        this.passwordError = '请输入密码'
      }
      if (this.$store.state.captcha.captcha.length !== 4) {
        this.$store.dispatch('setCaptchaError', '请输入4位验证码')
      }
      if (this.usernameError === '' &&
          this.passwordError === '' &&
          this.$store.state.captcha.captchaError === '') {
        var data = {
          'username': this.username,
          'password': SHA512(this.password).toString(),
          'captcha': this.$store.state.captcha.captcha
        }
        var _this = this
        userApi.login(data)
        .then(function (res) {
          if (res.data['success'] === false) {
            _this.$store.dispatch('newNotice', {
              autoClose: true,
              showTime: 1000,
              backgroundColor: '#f24f4f',
              content: res.data['error']
            })
            // 刷新验证码
            _this.$store.dispatch('changeCaptcha')
            // 清空验证码
            _this.$store.dispatch('setCaptcha', '')
          } else {
            // 登录成功
            _this.password = ''
            _this.$store.dispatch('doLogin', res.data['data'])
            _this.$router.push('/')
          }
          window.console.log(res.data)
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
  },
  watch: {
    username () {
      this.usernameError = ''
    },
    password () {
      this.passwordError = ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.login-view
  margin-top 50px
  h1
    background #864
  .login-panel
    width 300px
    height 300px
    margin 0 auto
    .button
      width 300px
      margin 0 auto
      .register-button
        margin-left 24px
      .login-button
        margin-left 76px



</style>
