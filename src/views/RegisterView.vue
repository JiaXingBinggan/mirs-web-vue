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
            <mu-text-field v-model="email" :errorText="emailError" label="邮箱" hintText="请输入你的邮箱" type="email" fullWidth icon="emial" labelFloat/><br/>
          </div>
          <div v-if="activeStep === 1" class="register-step-two">
            <mu-text-field v-model="email" label="您的邮箱" type="email" fullWidth icon="email" labelFloat disabled/><br/>
            <mu-text-field v-model="username" :errorText="usernameError" label="用户名" hintText="请输入你的用户名" errorText="" type="text" fullWidth icon="person" labelFloat/><br/>
            <mu-text-field v-model="password" :errorText="passwordError" label="密码" hintText="请输入密码" type="password" fullWidth icon="lock" labelFloat/><br/>
            <mu-text-field v-model="passwordAgain" :errorText="passwordAgainError" label="确认密码" hintText="请再次输入密码" type="password" fullWidth icon="lock" labelFloat/><br/>
            <mu-text-field v-model="verification" :errorText="verificationError" label="验证码" hintText="请输入邮箱中收到的验证码" @textOverflow="handleVerificationOverflow" type="text" :maxLength="6" fullWidth icon="sms" labelFloat/><br/>
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
    }
  },
  methods: {
    handleVerificationOverflow (isOverflow) {
      this.verificationError = isOverflow ? '超过啦！！！！' : ''
    },
    handleNext () {
      this.activeStep++
    },
    handlePrev () {
      this.activeStep--
    },
    reset () {
      this.activeStep = 0
    },
    checkUsername () {
      window.console.log(this.username)
      var _this = this
      var valid
      if (this.username.indexOf('@') > 0) {
        valid = commonApi.checkUserEmail(this.username)
      } else {
        valid = commonApi.checkUsername(this.username)
      }
      valid
      .then(function (res) {
        if (res.data['success'] === false) {
          _this.usernameError = '用户名已被注册啦!'
        }
      })
      .catch(function (res) {
        if (res instanceof Error) {
          console.log(res.message)
        } else {
          console.log(res.data)
        }
      })
    },
    checkEmail: _.debounce(
      function () {
        window.console.log(this.email)
        // var _this = this
        // 首先验证邮箱的格式
        /* eslint no-useless-escape: "off" */
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(this.email)) {
          this.emailError = '邮箱格式不正确'
        }
        // 然后验证邮箱是否被注册
      },
      // 等待时间
      500
    )
  },
  watch: {
    email () {
      this.emailError = ''
      this.checkEmail()
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
