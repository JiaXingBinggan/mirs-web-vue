const types = {
  id: '1',
  doubanRating: '4',
  imdbRating: '5',
  releaseYear: '6',
  types: '10',
  originPlace: '12',
  languages: '14'
}

const movieIndex = {
  button_index: [{
    button_option: '热门',
    keywords: '9.0-9.9',
    type: types['doubanRating']
  }, {
    button_option: '最新',
    keywords: '2016',
    type: types['releaseYear']
  }, {
    button_option: '经典',
    keywords: '9.5-9.9',
    type: types['doubanRating']
  }, {
    button_option: '可播放',
    keywords: '8.0-9.9',
    type: types['doubanRating']
  }, {
    button_option: '豆瓣高分',
    keywords: '9.6-9.9',
    type: types['doubanRating']
  }, {
    button_option: '冷门佳片',
    keywords: '9.0-9.9',
    type: types['doubanRating']
  }, {
    button_option: '犯罪',
    keywords: '犯罪',
    type: types['types']
  }, {
    button_option: '古装',
    keywords: '古装',
    type: types['types']
  }, {
    button_option: '纪录片',
    keywords: '纪录片',
    type: types['types']
  }, {
    button_option: '科幻',
    keywords: '科幻',
    type: types['types']
  }, {
    button_option: '奇幻',
    keywords: '奇幻',
    type: types['types']
  }, {
    button_option: '冒险',
    keywords: '冒险',
    type: types['types']
  }, {
    button_option: '音乐',
    keywords: '音乐',
    type: types['types']
  }, {
    button_option: '真人秀',
    keywords: '真人秀',
    type: types['types']
  }, {
    button_option: '惊悚',
    keywords: '惊悚',
    type: types['types']
  }, {
    button_option: '历史',
    keywords: '历史',
    type: types['types']
  }, {
    button_option: '战争',
    keywords: '战争',
    type: types['types']
  }, {
    button_option: '传记',
    keywords: '传记',
    type: types['types']
  }, {
    button_option: '恐怖',
    keywords: '恐怖',
    type: types['types']
  }, {
    button_option: '武侠',
    keywords: '武侠',
    type: types['types']
  }, {
    button_option: '脱口秀',
    keywords: '脱口秀',
    type: types['types']
  }, {
    button_option: '运动',
    keywords: '运动',
    type: types['types']
  }, {
    button_option: '儿童',
    keywords: '儿童',
    type: types['types']
  }, {
    button_option: '戏曲',
    keywords: '戏曲',
    type: types['types']
  }, {
    button_option: '喜剧',
    keywords: '喜剧',
    type: types['types']
  }, {
    button_option: '综艺',
    keywords: '脱口秀',
    type: types['types']
  }, {
    button_option: '歌舞',
    keywords: '歌舞',
    type: types['types']
  }],
  year_options: [{
    year: '2016',
    keywords: '2016',
    type: types['releaseYear']
  }, {
    year: '2015',
    keywords: '2015',
    type: types['releaseYear']
  }, {
    year: '2014',
    keywords: '2014',
    type: types['releaseYear']
  }, {
    year: '2013',
    keywords: '2013',
    type: types['releaseYear']
  }, {
    year: '2012',
    keywords: '2012',
    type: types['releaseYear']
  }, {
    year: '2011',
    keywords: '2011',
    type: types['releaseYear']
  }, {
    year: '2010',
    keywords: '2010',
    type: types['releaseYear']
  }, {
    year: '2009',
    keywords: '2009',
    type: types['releaseYear']
  }, {
    year: '2008',
    keywords: '2008',
    type: types['releaseYear']
  }, {
    year: '2007',
    keywords: '2007',
    type: types['releaseYear']
  }, {
    year: '2006',
    keywords: '2006',
    type: types['releaseYear']
  }, {
    year: '2005',
    keywords: '2005',
    type: types['releaseYear']
  }, {
    year: '2004',
    keywords: '2004',
    type: types['releaseYear']
  }, {
    year: '2003',
    keywords: '2003',
    type: types['releaseYear']
  }, {
    year: '2002',
    keywords: '2002',
    type: types['releaseYear']
  }, {
    year: '2001',
    keywords: '2001',
    type: types['releaseYear']
  }, {
    year: '2000',
    keywords: '2000',
    type: types['releaseYear']
  }, {
    year: '1999',
    keywords: '1999',
    type: types['releaseYear']
  }, {
    year: '1998',
    keywords: '1998',
    type: types['releaseYear']
  }, {
    year: '1997',
    keywords: '1997',
    type: types['releaseYear']
  }, {
    year: '1996',
    keywords: '1996',
    type: types['releaseYear']
  }, {
    year: '1995',
    keywords: '1995',
    type: types['releaseYear']
  }, {
    year: '1994',
    keywords: '1994',
    type: types['releaseYear']
  }, {
    year: '1993',
    keywords: '1993',
    type: types['releaseYear']
  }, {
    year: '1992',
    keywords: '1992',
    type: types['releaseYear']
  }, {
    year: '1991',
    keywords: '1991',
    type: types['releaseYear']
  }, {
    year: '1990',
    keywords: '1990',
    type: types['releaseYear']
  }],
  // }, {
  //   year: '80年代',
  //   keywords: '80年代',
  //   type: types['releaseYear']
  // }, {
  //   year: '70年代',
  //   keywords: '70年代',
  //   type: types['releaseYear']
  // }, {
  //   year: '60年代',
  //   keywords: '60年代',
  //   type: types['releaseYear']
  // }, {
  //   year: '50年代',
  //   keywords: '50年代',
  //   type: types['releaseYear']
  // }, {
  //   year: '40年代',
  //   keywords: '40年代',
  //   type: types['releaseYear']
  // }, {
  //   year: '30年代',
  //   keywords: '30年代',
  //   type: types['releaseYear']
  // }, {
  //   year: '20年代',
  //   keywords: '20年代',
  //   type: types['releaseYear']
  // }],
  place_options: [{
    place: '中国',
    keywords: '中国',
    type: types['originPlace']
  }, {
    place: '台湾',
    keywords: '台湾',
    type: types['originPlace']
  }, {
    place: '香港',
    keywords: '香港',
    type: types['originPlace']
  }, {
    place: '日本',
    keywords: '日本',
    type: types['originPlace']
  }, {
    place: '英国',
    keywords: '英国',
    type: types['originPlace']
  }, {
    place: '韩国',
    keywords: '韩国',
    type: types['originPlace']
  }],
  type_options: [{
    keywords: '剧情',
    type: types['types']
  }, {
    keywords: '喜剧',
    type: types['types']
  }, {
    keywords: '爱情',
    type: types['types']
  }, {
    keywords: '家庭',
    type: types['types']
  }, {
    keywords: '悬疑',
    type: types['types']
  }, {
    keywords: '动作',
    type: types['types']
  }, {
    keywords: '犯罪',
    type: types['types']
  }, {
    keywords: '古装',
    type: types['types']
  }, {
    keywords: '纪录片',
    type: types['types']
  }, {
    keywords: '科幻',
    type: types['types']
  }, {
    keywords: '奇幻',
    type: types['types']
  }, {
    keywords: '冒险',
    type: types['types']
  }, {
    keywords: '音乐',
    type: types['types']
  }, {
    keywords: '真人秀',
    type: types['types']
  }, {
    keywords: '惊悚',
    type: types['types']
  }, {
    keywords: '历史',
    type: types['types']
  }, {
    keywords: '战争',
    type: types['types']
  }, {
    keywords: '传记',
    type: types['types']
  }, {
    keywords: '恐怖',
    type: types['types']
  }, {
    keywords: '武侠',
    type: types['types']
  }, {
    keywords: '脱口秀',
    type: types['types']
  }, {
    keywords: '运动',
    type: types['types']
  }, {
    keywords: '儿童',
    type: types['types']
  }, {
    keywords: '戏曲',
    type: types['types']
  }, {
    keywords: '歌舞',
    type: types['types']
  }],
  sort_options: [{
    sorting: '默认排序',
    keywords: '默认排序',
    type: types['id']
  }, {
    sorting: '豆瓣评分排序',
    keywords: '豆瓣评分排序',
    type: types['doubanRating']
  }, {
    sorting: 'IMDB评分排序',
    keywords: 'IMDB评分排序',
    type: types['imdbRating']
  }, {
    sorting: '影片年份排序',
    keywords: '影片年份排序',
    type: types['releaseYear']
  }]
}

export default {
  movieIndex
}
