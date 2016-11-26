<template>
  <div class="captcha">
    <div class="captcha-input">
      <mu-text-field v-model="captcha" label="验证码" hintText="请输入验证码" :errorText="captchaError" type="text" :maxLength="4" fullWidth icon="sms" labelFloat/><br/>
    </div>
    <div class="captcha-img">
      <img :src="captchaUrl"  @click="changeCaptcha" alt="点击刷新" />
    </div>
  </div>
</template>

<script>
import commonApi from '../../api/commonApi'
export default {
  name: 'captcha',
  data () {
    return {
      captcha: '',
      captchaUrl: commonApi.captchaUrl()
    }
  },
  computed: {
    captchaError () {
      return this.$store.state.captcha.captchaError
    }
  },
  methods: {
    changeCaptcha () {
      this.captchaUrl = commonApi.captchaUrl() + '?' + Math.floor(Math.random() * 100)
    },
    validateCaptcha () {
      // 绑定作用域
      var _this = this
      commonApi.checkCaptcha(this.captcha)
      .then(function (res) {
        if (res.data['success'] === false) {
          _this.$store.dispatch('setCaptchaError', '验证码错误!')
          // 自动刷新验证码
          _this.changeCaptcha()
          // _this.captcha = ''
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
    captcha () {
      this.$store.dispatch('clearCaptchaError')
      if (this.captcha.length === 4) {
        window.console.log(this.captcha)
        this.validateCaptcha()
      }
      if (this.captcha.length > 4) {
        this.$store.dispatch('setCaptchaError', '超过了!!!')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.captcha
  .captcha-input
    float left
    width 200px
  .captcha-img
    float left
    width 100px
    height 80px
</style>
