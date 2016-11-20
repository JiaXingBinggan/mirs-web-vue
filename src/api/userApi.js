import { userApi } from './api'
import axios from 'axios'

export default {
  login (data) {
    return axios({
      method: 'post',
      url: userApi.loginUrl(),
      data: data,
      withCredentials: true
    }
    )
  },
  register (data) {
    return axios({
      method: 'post',
      url: userApi.registerUrl(),
      data: data,
      withCredentials: true
    }
    )
  }
}
