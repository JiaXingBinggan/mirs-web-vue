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
            注册成功
          </mu-step-label>
        </mu-step>
      </mu-stepper>
      <div class="register-step-content">
        <p v-if="finished">
          都完成啦!<a href="javascript:;" @click="reset">点这里</a>可以重置
        </p>
        <template v-if="!finished">
          <div v-if="activeStep === 0" class="register-step-one">
            <mu-text-field v-model.trim="email" :errorText="emailError" label="邮箱" hintText="请输入你的邮箱" type="email" fullWidth icon="emial" labelFloat/><br/>
          </div>
          <div v-if="activeStep === 1" class="register-step-two">
            <mu-text-field v-model.trim="email" label="您的邮箱" type="email" fullWidth icon="email" labelFloat disabled/><br/>
            <mu-text-field v-model.trim="username" :errorText="usernameError" label="用户名" hintText="请输入你的用户名" type="text" fullWidth icon="person" labelFloat/><br/>
            <mu-text-field v-model.trim="password" :errorText="passwordError" label="密码" hintText="请输入密码" type="password" fullWidth icon="lock" labelFloat/><br/>
            <mu-text-field v-model.trim="passwordAgain" :errorText="passwordAgainError" label="确认密码" hintText="请再次输入密码" type="password" fullWidth icon="lock" labelFloat/><br/>
            <mu-text-field v-model.trim="verification" :errorText="verificationError" label="验证码" hintText="请输入邮箱中收到的验证码" @textOverflow="handleVerificationOverflow" type="text" :maxLength="6" fullWidth icon="sms" labelFloat/><br/>
          </div>
          <div v-if="activeStep === 2" class="register-step-three">
            3
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
// import userApi from '../api/userApi'
import _ from 'lodash'
export default {
  name: 'register-view',
  data () {
    return {
      activeStep: 0,
      username: '',
      email: '',
      password: '',
      passwordAgain: '',
      verification: '',
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
    }
  },
  methods: {
    handleVerificationOverflow (isOverflow) {
      this.verificationError = isOverflow ? '超过啦！！！！' : ''
    },
    handleNext () {
      if (this.activeStep === 0 && this.email !== '') {
        if (this.emailError === '') {
          this.activeStep++
        }
      } else if (this.activeStep === 1) {
        if (this.usernameError === '' &&
            this.passwordAgainError === '' &&
            this.verificationError === '' &&
            this.username !== '' &&
            this.password !== '' &&
            this.verification.length === 6
          ) {
          // 清空密码信息
          this.password = ''
          this.passwordAgain = ''

          this.activeStep++
        }
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
      500
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
        if (this.password.length <= 8) {
          this.passwordError = '密码强度太弱!请修改'
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
      500
    ),
    doRegister () {
      //
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
        .captcha
          .captcha-input
            float left
            width 200px
          .captcha-img
            float left
            width 100px
            height 80px
      .register-step-three

      .register-button
        /*background-color rgb(58, 223, 65)*/
        padding 10px
        .register-back-button
          margin-left 0
        .register-forward-button
          margin-left 100px
</style>
