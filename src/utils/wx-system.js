

/**
 * @description 获取当前（可用）屏幕高度
 * @author Kip Song
 */
function getSysHeight() {
  return wx.getSystemInfoSync().windowHeight
}

/**
 * @description 获取当前（可用）屏幕宽度
 * @author Kip Song
 */
function getSysWidth() {
  return wx.getSystemInfoSync().windowWidth
}

/**
 * @description 获取设备
 * @author Kip Song
 */
function getClientType() {
  let model = wx.getSystemInfoSync().model
  return model
}

/**
 * @description px转化rpx
 * @returns String
 * @author Kip Song
 */
function changePXToRPX(px) {
  let rpx = px * (750 / getSysWidth())
  return rpx
}

/**
 * @description rpx转化px
 * @returns String
 * @author Kip Song
 */
function changeRPXToPX(rpx) {
  let px = rpx * (getSysWidth() / 750)
  return px
}

export {
  getSysHeight,
  getSysWidth,
  getClientType,
  changePXToRPX,
  changeRPXToPX
}
