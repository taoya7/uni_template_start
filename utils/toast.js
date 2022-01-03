/**
 * 显示成功提示框
 */
export const showSuccess = (msg, callback) => {
  uni.showToast({
    title: msg,
    icon: 'success',
    mask: true,
    duration: 1500,
    success() {
      callback && callback()
    }
  })
}


/**
 * 显示失败提示框
 */
export const showError = (msg, callback) => {
  uni.showModal({
    title: '友情提示',
    content: msg,
    showCancel: false,
    success(res) {
      callback && callback()
    }
  })
}


/**
 * 显示纯文字提示框
 */
export const showToast = msg => {
  uni.showToast({
    title: msg,
    icon: 'none'
  })
}

