const host = process.env.HOST

const api = {
  oAuthUrl: type => host + '/oauth/' + type,
  loginUrl: () => host + '/accounts/login',
  registerUrl: () => host + '/accounts/register',
  getCaptchaUrl: () => host + '/captcha/get',
  checkCaptchaUrl: captcha => host + '/captcha/check/' + captcha,
  checkUserEmailUrl: email => host + '/instpection/userEamil?email=' + email,
  checkVerificationUrl: verification => host + '/instpection/verification?verification=' + verification,
  dailyMovieUrl: () => host + '/movie/daily',
  searchMovieUrl: keyword => host + '/search/movie/' + keyword
}

export default api
