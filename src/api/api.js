const host = process.env.NODE_ENV === 'production'
? 'http://www.91film.com'
: 'http://localhost:8080'

export const commonApi = {
  // GET
  oAuthUrl: type => host + '/oauth/' + type,
  // GET
  captchaUrl: () => host + '/captcha',
  // POST
  checkCaptchaUrl: captcha => host + '/captcha?captcha=' + captcha,
  // POST
  checkUsernameUrl: username => host + '/instpection/username?username=' + username,
  // POST
  checkUserEmailUrl: userEamil => host + '/instpection/userEamil?userEamil=' + userEamil,
  // POST
  checkVerificationUrl: verification => host + '/instpection/verification?verification=' + verification
}

export const userApi = {
  // POST
  loginUrl: () => host + '/authorization/token',
  // POST
  registerUrl: () => host + '/authorization/account',
  // GET
  getProfileUrl: () => host + '/accounts/profile',
  // POST
  updateProfileUrl: () => host + '/accounts/profile',
  // POST
  updatePasswordUrl: () => host + '/password',
  // POST
  resetPasswordUrl: () => host + '/reset-password'
}

export const movieApi = {
  // GET
  dailyMovieUrl: () => host + '/movies/today',
  // GET
  searchMovieUrl: () => host + '/searches/movies'
}
