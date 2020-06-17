import wepy from  '@wepy/core';

/**
 * @author Kip Song
 * @param {*} url 链接地址
 * @param {*} param 参数
 */
function onLoadSocket(url, param) {
  return new Promise(function (resolve, reject) {
    if (typeof (url) === 'undefined' || url == null || url === '') {
      return ''
    }
    if (typeof (param) === 'undefined' || param == null || typeof (param) !== 'object') {
      return ''
    }
    url += (url.indexOf('?') !== -1) ? '' : '?'
    for (var k in param) {
      url += ((url.indexOf('=') !== -1) ? '&' : '') + k + '=' + encodeURI(param[k])
      console.log(url)
    }
    console.log('socket地址：' + url)
    wepy.connectSocket({
      url: url
    }).then(res => {
      wepy.onSocketOpen(function (res) {
        console.log('WebSocket连接已打开！')
        resolve(res)
      })
      wepy.onSocketError(function (err) {
        console.log('WebSocket连接打开失败，请检查！')
        reject(err)
      })
      wepy.onSocketClose(function (err) {
        console.log('WebSocket 已关闭！')
        reject(err)
      })
    })
  })
}

export default {
  onLoadSocket
}
