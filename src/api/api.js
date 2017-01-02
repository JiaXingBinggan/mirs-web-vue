const host = process.env.NODE_ENV === 'production'
? 'https://www.91film.top/api'
: 'https://www.91film.top/api'

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
  loginUrl: () => host + '/authentication/token',
  // POST
  registerUrl: () => host + '/authentication/account',
  // GET
  getProfileUrl: () => host + '/accounts/profile',
  // POST
  updateProfileUrl: () => host + '/accounts/profile',
  // POST
  updatePasswordUrl: () => host + '/accounts/password',
  // POST
  resetPasswordUrl: () => host + '/accounts/reset-password'
}

export const movieApi = {
  // GET
  dailyMovieUrl: () => host + '/movies/today',
  // GET
  searchMovieUrl: () => host + '/searches/movies',
  // GET
  suggestionMovieUrl: () => host + '/searches/suggestions',
  // GET
  movieUrl: id => host + '/movies/' + id
}
