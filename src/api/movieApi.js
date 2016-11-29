import { movieApi } from './api'
import axios from 'axios'

export default {
  getDailyMovie (data) {
    return axios({
      method: 'get',
      url: movieApi.dailyMovieUrl(),
      withCredentials: true
    }
    )
  },
  searchMovie (keyword, limit = 6) {
    // TODO 使用方法构造querystring,暂时手工书写
    let url = movieApi.searchMovieUrl() + '?keyword=' + keyword + '&limit=' + limit
    return axios({
      method: 'get',
      url: url,
      withCredentials: true
    }
    )
  }
}
