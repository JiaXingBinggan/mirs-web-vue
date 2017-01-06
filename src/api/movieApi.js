import { movieApi } from './api'
import axios from 'axios'

export default {
  getDailyMovie () {
    return axios({
      method: 'get',
      url: movieApi.dailyMovieUrl(),
      withCredentials: true
    }
    )
  },
  getSuggestionMovie (keyword, limit = 6) {
    // TODO 使用方法构造querystring,暂时手工书写
    let url = movieApi.suggestionMovieUrl() + '?keyword=' + keyword + '&limit=' + limit
    return axios({
      method: 'get',
      url: url,
      withCredentials: true
    }
    )
  },
  searchMovie (keywords, type, sort, limit = 10, offset = 0) {
    let url = movieApi.searchMovieUrl() + '?keywords=' + keywords + '&type=' + type + '&sort=' + sort + '&limit=' + limit + '&offset=' + offset
    return axios({
      method: 'get',
      url: url,
      withCredentials: true
    }
    )
  },
  getMovieByMovieId (id) {
    let url = movieApi.movieUrl(id)
    return axios({
      method: 'get',
      url: url,
      withCredentials: true
    }
    )
  },
  getMovieByDoubanId (id) {
    let url = movieApi.doubanMovieUrl(id)
    return axios({
      method: 'get',
      url: url,
      withCredentials: true
    }
    )
  }
}
