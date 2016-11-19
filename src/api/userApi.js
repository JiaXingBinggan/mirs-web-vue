import api from './api'
import axios from 'axios'

export default {
  login (info) {
    return axios.post(api.loginUrl(), info)
  },
  checkCaptcha (captcha) {
    window.console.log(axios)
    return axios({
      method: 'get',
      url: api.checkCaptchaUrl(captcha),
      withCredentials: true
    }
    )
  }
}
