export default {
  login (sid, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    this.token(sid)
    if (cb) cb(true)
    this.onChange(true)
  },
  logout (cb) {
    localStorage.removeItem('token')
    if (cb) cb(false)
    this.onChange(false)
  },
  token (sid) {
    if (sid) {
      localStorage.setItem('token', sid)
    }
    return localStorage.getItem('token')
  },
  loggedIn () {
    const token = this.token()
    return !!token
  },
  onChange () {}
}
