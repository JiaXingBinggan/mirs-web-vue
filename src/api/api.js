const host = process.env.NODE_ENV === 'production'
? 'http://www.91film.top/api'
: 'http://www.91film.top/api'

export const commonApi = {
  // GET
  oAuthUrl: type => host + '/oauth/' + type,
  // GET
  captchaUrl: () => host + '/captcha',
  // POST
  checkCaptchaUrl: captcha => host + '/captcha?captcha=' + captcha,
  // POST
  checkUsernameUrl: username => host + '/inspection/username?name=' + username,
  // POST
  checkUserEmailUrl: userEmail => host + '/inspection/userEmail?email=' + userEmail,
  // POST
  checkVerificationUrl: verification => host + '/inspection/verification?verification=' + verification,
  // POST
  sendEmailUrl: email => host + '/email?email=' + email
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
