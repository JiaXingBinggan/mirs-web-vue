import { commonApi } from './api'
import axios from 'axios'

export default {
  oAuthUrl () {
    return commonApi.oAuthUrl()
  },
  captchaUrl () {
    return commonApi.captchaUrl()
  },
  checkCaptcha (captcha) {
    return axios({
      method: 'post',
      url: commonApi.checkCaptchaUrl(captcha),
      withCredentials: true
    }
    )
  },
  checkUsername (username) {
    return axios({
      method: 'post',
      url: commonApi.checkUsernameUrl(username),
      withCredentials: true
    }
    )
  },
  checkUserEmail (email) {
    return axios({
      method: 'post',
      url: commonApi.checkUserEmailUrl(email),
      withCredentials: true
    }
    )
  },
  checkVerification (verification) {
    return axios({
      method: 'post',
      url: commonApi.checkVerificationUrl(verification),
      withCredentials: true
    }
    )
  },
  sendEmail (email) {
    return axios({
      method: 'post',
      url: commonApi.sendEmailUrl(email),
      withCredentials: true
    }
    )
  }
}
