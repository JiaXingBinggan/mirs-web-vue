<template>
  <div id="form">
    <h3>更改密码</h3>
    <span>密码：</span><br><input type="password" class="input-line" v-model="oldPassword"><br>
    <span class="errorStyle">{{oldPasswordError}}</span>
    <br>
    <span>新密码：</span><br><input type="password" class="input-line" v-model="newPassword"><br>
    <span class="errorStyle">{{passwordError}}</span>
    <br>
    <span>确认密码：</span><br><input type="password" class="input-line" v-model="confirmedPassword">
    <br>
    <span class="errorStyle" v-if="confirmedPassword !== ''">{{passwordConfirmError}}</span>
    <br><br><br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="button" class="input-button changePassword" :disabled="passwordError !== '' || passwordConfirmError !== '' || oldPasswordError !== '' || oldPassword === '' || newPassword === '' || confirmedPassword === ''" @click="submit()" value="保 存">
  </div>
</template>

<script>
import userApi from 'src/api/userApi'
import SHA512 from 'crypto-js/sha512'
import _ from 'lodash'

export default {
  name: 'user-password',
  data () {
    return {
      oldPassword: '',
      newPassword: '',
      confirmedPassword: '',
      oldPasswordError: '',
      passwordError: '',
      passwordConfirmError: ''
    }
  },
  methods: {
    submit () {
      var _this = this
      var oldPassword = SHA512(this.oldPassword).toString()
      var newPassword = SHA512(this.newPassword).toString()
      userApi.updatePassword(oldPassword, newPassword)
      .then(function (res) {
        if (res.data['success'] === false) {
          _this.$message({
            message: res.data['error'],
            type: 'error'
          })
        } else {
          // 更新成功
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
    },
    checkOldPassword: _.debounce(
      function () {
        if (this.oldPassword.indexOf(' ') > 0) {
          this.oldPasswordError = '密码不能包含空格哟!'
        }
        if (this.oldPassword.length <= 8) {
          this.oldPasswordError = '密码也太短了!'
        }
      },
      500
    ),
    checkPassword: _.debounce(
      function () {
        if (this.newPassword.indexOf(' ') > 0) {
          this.passwordError = '密码不能包含空格哟!'
        }
        if (this.newPassword.length <= 8) {
          this.passwordError = '密码也太短了!'
        }
      },
      500
    ),
    checkConfirmedPassword: _.debounce(
      function () {
        this.passwordConfirmError = ''
        if (this.newPassword !== this.confirmedPassword) {
          this.passwordConfirmError = '两次输入的密码不一致!'
        }
      },
      500
    )
  },
  watch: {
    oldPassword () {
      this.oldPasswordError = ''
      this.checkOldPassword()
    },
    newPassword () {
      this.passwordError = ''
      this.checkPassword()
      this.checkConfirmedPassword()
    },
    confirmedPassword () {
      this.passwordAgainError = ''
      this.checkConfirmedPassword()
    }
  }
}
</script>

<style lang="stylus" scroped>
.accounts-view
  #form
    height 600px
    padding-left 20px
    .errorStyle
      color #ff4949
      font-size 0.8em
    .input-line, .input-text
      width 360px
      margin-top 6px
      padding 6px 8px
      border 1px solid #ddd
      border-radius 3px
      background-color #fafafa
      box-shadow inset 0 1px 2px rgba(0, 0, 0, 0.075)
    .changePassword
      &:disabled
        color #aaa
        border 1px solid #e9e9e9
</style>
