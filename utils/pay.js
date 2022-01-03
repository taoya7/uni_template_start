/**
 * 发起支付请求
 * @param {Object} 参数
 */
export const wxPayment = (option) => {
  const options = {
    timeStamp: '',
    nonceStr: '',
    prepay_id: '',
    paySign: '',
    ...option
  }
  return new Promise((resolve, reject) => {
    uni.requestPayment({
      provider: 'wxpay',
      timeStamp: options.timeStamp,
      nonceStr: options.nonceStr,
      'package': `prepay_id=${options.prepay_id}`,
      signType: 'MD5',
      paySign: options.paySign,
      success: res => resolve(res),
      fail: res => reject(res)
    })
  })
}


