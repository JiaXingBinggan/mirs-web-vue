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
export default {
  name: 'captcha',
  computed: {
    captcha: {
      get () {
        return this.$store.state.captcha.captcha
      },
      set (val) {
        this.$store.dispatch('setCaptcha', val)
      }
    },
    captchaError () {
      return this.$store.state.captcha.captchaError
    },
    captchaUrl () {
      return this.$store.state.captcha.captchaUrl
    }
  },
  methods: {
    changeCaptcha () {
      this.$store.dispatch('changeCaptcha')
    }
  },
  watch: {
    captcha () {
      this.$store.dispatch('clearCaptchaError')
      this.$store.dispatch('setCaptcha', this.captcha)
      if (this.captcha.length === 4) {
        window.console.log(this.captcha)
        this.$store.dispatch('validateCaptcha')
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
img
  width 100px
  height 50px
  margin-bottom 0
  margin-top 10px
</style>
