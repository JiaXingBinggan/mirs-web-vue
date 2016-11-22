<template>
<div class="login-view">
  <div class="login-panel">
    <mu-text-field v-model="username" label="用户名" hintText="请输入用户名" :errorText="usernameError" type="text" fullWidth icon="person" labelFloat/><br/>
    <mu-text-field v-model="password" label="密码" hintText="请输入密码" :errorText="passwordError" type="password" fullWidth icon="lock" labelFloat/><br/>
    <div class="captcha">
      <div class="captcha-input">
        <mu-text-field v-model="captcha" label="验证码" hintText="请输入验证码" :errorText="captchaError" @textOverflow="handleInputOverflow" type="text" :maxLength="4" fullWidth icon="sms" labelFloat/><br/>
      </div>
      <div class="captcha-img">
        <img :src="captchaUrl"  @click="changeCaptcha" alt="点击刷新" />
      </div>
    </div>
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
import commonApi from '../api/commonApi'
import userApi from '../api/userApi'
import SHA512 from 'crypto-js/sha512'
export default {
  name: 'login-view',
  data () {
    return {
      username: '',
      password: '',
      captcha: '',
      usernameError: '',
      passwordError: '',
      captchaError: '',
      captchaUrl: commonApi.captchaUrl()
    }
  },
  methods: {
    changeCaptcha () {
      this.captchaUrl = commonApi.captchaUrl() + '?' + Math.floor(Math.random() * 100)
    },
    handleInputOverflow (isOverflow) {
      this.captchaError = isOverflow ? '超过啦！！！！' : ''
    },
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
      if (this.captcha.length !== 4) {
        this.captchaError = '请输入完整的4位验证码'
      }
      if (this.usernameError === '' &&
          this.passwordError === '' &&
          this.captchaError === '') {
        var data = {
          'username': this.username,
          'password': SHA512(this.password).toString(),
          'captcha': this.captcha
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
            _this.changeCaptcha()
            _this.captcha = ''
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
    },
    validateCaptcha () {
      // 绑定作用域
      var _this = this
      commonApi.checkCaptcha(this.captcha)
      .then(function (res) {
        if (res.data['success'] === false) {
          _this.$store.dispatch('newNotice', {
            autoClose: true,
            showTime: 1000,
            backgroundColor: '#f24f4f',
            content: res.data['error']
          })
          // 自动刷新验证码
          _this.changeCaptcha()
          _this.captcha = ''
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
  },
  watch: {
    username () {
      this.usernameError = ''
    },
    password () {
      this.passwordError = ''
    },
    captcha () {
      this.captchaError = ''
      if (this.captcha.length === 4) {
        window.console.log(this.captcha)
        this.validateCaptcha()
      }
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
