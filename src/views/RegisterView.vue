<template>
  <div class="register-view">
    <div class="register-step">
      <mu-stepper :activeStep="activeStep">
        <mu-step>
          <mu-step-label>
            输入您的邮箱
          </mu-step-label>
        </mu-step>
        <mu-step>
          <mu-step-label>
            设置密码
          </mu-step-label>
        </mu-step>
        <mu-step>
          <mu-step-label>
            {{status}}
          </mu-step-label>
        </mu-step>
      </mu-stepper>
      <div class="register-step-content">
        <p v-if="finished && registerSuccess">
          都完成啦!<a @click="goToIndexPage">点这里</a>去首页逛逛吧
        </p>
        <p v-if="finished && !registerSuccess">
          诶呀!<a href="/register">点这里</a>重新来过
        </p>
        <template v-if="!finished">
          <div v-if="activeStep === 0" class="register-step-one">
            <mu-text-field v-model.trim="email" :errorText="emailError" label="邮箱" hintText="请输入你的邮箱" type="email" fullWidth icon="emial" labelFloat/><br/>
          </div>
          <div v-if="activeStep === 1" class="register-step-two">
            <mu-text-field v-model.trim="email" :errorText="emailError" label="请确认您的邮箱" type="email" fullWidth icon="email" labelFloat disabled/><br/>
            <mu-text-field v-model.trim="username" :errorText="usernameError" label="用户名" hintText="请输入你的用户名" type="text" fullWidth icon="person" labelFloat/><br/>
            <mu-text-field v-model.trim="password" :errorText="passwordError" label="密码" hintText="请输入密码" type="password" fullWidth icon="lock" labelFloat/><br/>
            <div v-if="password" class="password-score">
              <div v-if="scorePassword <= 60" class="password-weak"></div>
              <div v-if="scorePassword > 60 && scorePassword <= 80" v-text=""class="password-medium"></div>
              <div v-if="scorePassword > 80" class="password-strong"></div>
            </div>
            <mu-text-field v-model.trim="passwordAgain" :errorText="passwordAgainError" label="确认密码" hintText="请再次输入密码" type="password" fullWidth icon="lock" labelFloat/><br/>
            <div class="verification-area">
              <div class="verification-input">
                <mu-text-field v-model.trim="verification" :errorText="verificationError" label="验证码" hintText="请输入邮箱中收到的验证码" @textOverflow="handleVerificationOverflow" type="text" :maxLength="6" icon="sms" fullWidth labelFloat/><br/>
              </div>
              <div class="verification-button-div">
                <mu-flat-button :label="sendEmailStatus" @click="sendEmail" class="verification-button" :disabled="sentEmailTimeout !== 0">
              </div>
            </div>
          </div>
          <div v-if="activeStep === 2" class="register-step-three">
            <div v-if="registerSuccess" class="register-success">
              用户：{{username}}已成功注册 <br/>
              邮箱是：{{email}} <br/>
              注册时间是: {{registerTime}} <br/>
              IP地址为: {{registerIp}} <br/>
            </div>
            <div v-if="!registerSuccess" class="register-failed">
              ┗|｀O′|┛ 嗷~~应该是某种神秘力量让注册失败了!
            </div>
          </div>
          <div class="register-button">
            <mu-flat-button class="register-back-button" label="上一步" :disabled="activeStep === 0" @click="handlePrev"/>
            <mu-raised-button class="register-forward-button" :label="activeStep === 2 ? '完成' : '下一步'" primary @click="handleNext"/>
          </div>
        </template>
      </div>
    </div>
</template>

<script>
import commonApi from '../api/commonApi'
import userApi from '../api/userApi'
import _ from 'lodash'
import SHA512 from 'crypto-js/sha512'
export default {
  name: 'register-view',
  data () {
    return {
      activeStep: 0,
      status: '注册成功',
      sendEmailStatus: '发送验证码',
      sentEmailTimeout: 0,
      username: '',
      email: '',
      password: '',
      passwordAgain: '',
      verification: '',
      registerTime: '',
      registerIp: '',
      emailError: '',
      usernameError: '',
      passwordError: '',
      passwordAgainError: '',
      verificationError: ''
    }
  },
  computed: {
    finished () {
      return this.activeStep > 2
    },
    passwordEqual () {
      return this.password === this.passwordAgain || !(this.password !== '' && this.passwordAgain !== '')
    },
    registerSuccess () {
      return this.$store.state.user.login
    },
    scorePassword () {
      var score = 0
      var letters = {}
      for (var i = 0; i < this.password.length; i++) {
        letters[this.password[i]] = (letters[this.password[i]] || 0) + 1
        score += 5.0 / letters[this.password[i]]
      }
      var variations = {
        digits: /\d/.test(this.password),
        lower: /[a-z]/.test(this.password),
        upper: /[A-Z]/.test(this.password),
        nonWords: /\W/.test(this.password)
      }
      var variationCount = 0
      for (var check in variations) {
        variationCount += (variations[check] === true) ? 1 : 0
      }
      score += (variationCount - 1) * 10
      return parseInt(score)
    }
  },
  methods: {
    goToIndexPage () {
      this.$router.push('/')
    },
    countDown () {
      var _this = this
      this.sentEmailTimeout--
      this.sendEmailStatus = '剩余' + this.sentEmailTimeout + '秒'
      if (this.sentEmailTimeout > 0) {
        setTimeout(_this.countDown, 1000)
      } else {
        this.sendEmailStatus = '点击重发'
      }
    },
    sendEmail () {
      // 倒计时秒数
      this.sentEmailTimeout = 90
      this.countDown()
      // 向后台请求
      commonApi.sendEmail(this.email)
      .then(function (res) {
        if (res.data['success'] === false) {
          window.console.log(res.data)
        }
      })
      .catch(function (res) {
        if (res instanceof Error) {
          window.console.log(res.message)
        } else {
          window.console.log(res.data)
        }
      })
    },
    handleVerificationOverflow (isOverflow) {
      this.verificationError = isOverflow ? '超过啦！！！！' : ''
    },
    handleNext () {
      if (this.activeStep === 0) {
        if (this.email === '') {
          this.emailError = '请先输入邮箱'
        }
        if (this.emailError === '') {
          this.activeStep++
        }
      } else if (this.activeStep === 1) {
        if (this.username === '') {
          this.usernameError = '请输入用户名'
        }
        if (this.password === '') {
          this.passwordError = '请输入密码'
        }
        if (this.passwordAgain === '') {
          this.passwordAgainError = '请确认密码'
        }
        if (this.verification.length !== 6) {
          this.verificationError = '请输入6位验证码'
        }

        if (this.usernameError === '' &&
            this.passwordError === '' &&
            this.emailError === '' &&
            this.passwordAgainError === '' &&
            this.verificationError === ''
          ) {
          // 上传用户提交的信息，进行注册操作
          this.doRegister()
          // 清空密码信息
          this.password = ''
          this.passwordAgain = ''
          this.activeStep++
        }
      } else {
        this.activeStep++
      }
    },
    handlePrev () {
      // 清空密码信息
      this.password = ''
      this.passwordAgain = ''
      this.activeStep--
    },
    reset () {
      this.activeStep = 0
      this.username = ''
      this.email = ''
      this.password = ''
      this.passwordAgain = ''
      this.verification = ''
      this.emailError = ''
      this.usernameError = ''
      this.passwordError = ''
      this.passwordAgainError = ''
      this.verificationError = ''
    },
    checkUsername: _.debounce(
      function () {
        window.console.log(this.username)
        var _this = this
        commonApi.checkUsername(this.username)
        .then(function (res) {
          if (res.data['success'] === false) {
            window.console.log(res.data)
            _this.usernameError = res.data['error']
          }
        })
        .catch(function (res) {
          if (res instanceof Error) {
            window.console.log(res.message)
          } else {
            window.console.log(res.data)
          }
        })
      },
      // 这是我们为用户停止输入等待的毫秒数
      1000
    ),
    checkEmail: _.debounce(
      function () {
        window.console.log(this.email)
        var _this = this
        // 首先验证邮箱的格式
        /* eslint no-useless-escape: "off" */
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(this.email)) {
          this.emailError = '邮箱格式不正确'
          return
        }
        // 然后验证邮箱是否被注册
        commonApi.checkUserEmail(this.email)
        .then(function (res) {
          if (res.data['success'] === false) {
            window.console.log(res.data)
            _this.emailError = res.data['error']
          }
        })
        .catch(function (res) {
          if (res instanceof Error) {
            window.console.log(res.message)
          } else {
            window.console.log(res.data)
          }
        })
      },
      // 等待时间
      500
    ),
    checkPassword: _.debounce(
      function () {
        if (this.password.indexOf(' ') > 0) {
          this.passwordError = '密码不能包含空格哟!'
        }
        if (this.password.length <= 8) {
          this.passwordError = '密码也太短了!'
        }
      },
      500
    ),
    checkPasswordAgain: _.debounce(
      function () {
        this.passwordAgainError = ''
        if (!this.passwordEqual) {
          this.passwordAgainError = '两次输入的密码不一致!'
        }
      },
      500
    ),
    checkVerification: _.debounce(
      function () {
        window.console.log(this.verification)
        var _this = this
        commonApi.checkVerification(this.verification)
        .then(function (res) {
          if (res.data['success'] === false) {
            window.console.log(res.data)
            _this.verificationError = res.data['error']
          }
        })
        .catch(function (res) {
          if (res instanceof Error) {
            window.console.log(res.message)
          } else {
            window.console.log(res.data)
          }
        })
      },
      50
    ),
    doRegister () {
      var data = {
        'username': this.username,
        'email': this.email,
        'password': SHA512(this.password).toString(),
        'verification': this.verification
      }
      var _this = this
      userApi.register(data)
      .then(function (res) {
        if (res.data['success'] === false) {
          _this.$store.dispatch('newNotice', {
            autoClose: true,
            showTime: 5000,
            backgroundColor: '#f24f4f',
            content: res.data['error']
          })
        } else {
          // 注册成功
          _this.$store.dispatch('doLogin', {
            'username': res.data['data']['username'],
            'token': res.data['data']['token']
          })
          // 继续第三步的提示信息
          _this.registerTime = res.data['data']['registerTime']
          _this.registerIp = res.data['data']['registerIp']
        }
        window.console.log(res.data)
      })
      .catch(function (res) {
        _this.status = '注册失败(lll￢ω￢)'
        if (res instanceof Error) {
          window.console.log(res.message)
        } else {
          window.console.log(res.data)
        }
      })
    }
  },
  watch: {
    email () {
      this.emailError = ''
      this.checkEmail()
    },
    username () {
      this.usernameError = ''
      this.checkUsername()
    },
    password () {
      this.passwordError = ''
      this.checkPassword()
      this.checkPasswordAgain()
    },
    passwordAgain () {
      this.passwordAgainError = ''
      this.checkPasswordAgain()
    },
    verification () {
      this.verificationError = ''
      if (this.verification.length === 6) {
        this.checkVerification()
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.register-view
  margin-top 50px
  .register-step
    margin 0 300px
    /*background-color rgb(51, 31, 149)*/
    .register-step-content
      width 300px
      margin 0 auto
      /*background-color rgb(137, 25, 176)*/
      .register-step-one

      .register-step-two
        .password-score
          height 10px
          width 245px
          border 1px solid #ccc
          margin-left 55px
          .password-weak
            height 8px
            width 82px
            background-color red
          .password-medium
            height 8px
            width 165px
            background-color orange
          .password-strong
            height 8px
            background-color green
        .verification-area
          .verification-input
            float left
            width 200px
          .verification-button-div
            float left
            width 100px
            height 80px
            display table
            .verification-button
              float left
              margin-top 25%
              display table-cell
              vertical-align middle
      .register-step-three

      .register-button
        /*background-color rgb(58, 223, 65)*/
        padding 10px
        .register-back-button
          margin-left 0
        .register-forward-button
          margin-left 100px
</style>
