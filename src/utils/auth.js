const Token = "token"

export function getToken() {
  return wx.getStorageSync(Token) || null
}

export function setToken(data) {
  wx.setStorageSync(Token, data)
}

export function removeToken() {
  wx.removeStorageSync(Token)
}
