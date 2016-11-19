import api from './api'
import axios from 'axios'

export default {
  login (info) {
    return axios.post(api.loginUrl(), info)
  }
}
