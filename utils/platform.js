/**
 * 获取当前运行环境
 */

export const getPlatform = () => {
  // #ifdef APP-PLUS
  const platform = 'App'
  // #endif
  // #ifdef APP-PLUS-NVUE
  const platform = 'App'
  // #endif
  // #ifdef H5
  const platform = 'H5'
  // #endif
  // #ifdef MP-WEIXIN
  const platform = 'MP-WEIXIN'
  // #endif
  // #ifdef MP-ALIPAY
  const platform = 'MP-ALIPAY'
  // #endif
  // #ifdef MP-BAIDU
  const platform = 'MP-BAIDU'
  // #endif
  // #ifdef MP-TOUTIAO
  const platform = 'MP-TOUTIAO'
  // #endif
  // #ifdef MP-QQ
  const platform = 'MP-QQ'
  // #endif
  // #ifdef MP-360
  const platform = 'MP-360'
  // #endif
  return platform
}
const platfrom = getPlatform()

// 是否为微信公众号端
const weixinOfficial = () => {
  // #ifdef H5
  const ua = window.navigator.userAgent.toLowerCase()
  return String(ua.match(/MicroMessenger/i)) === 'micromessenger'
  // #endif
  return false
}

export const isH5 = platfrom === 'H5'
export const isApp = platfrom === 'APP'
export const isMpWeixin = platfrom === 'MP-WEIXIN'

// 是否为微信公众号端
// 相当于H5端运行在微信内置浏览器, 但是需要使用微信的jssdk所以要单独区分
export const isWeixinOfficial = platfrom === 'H5-WEIXIN'

export default platfrom
