/**
 * @author Taoya
 * @date 2021/7/31
 * @Description: 网络请求
 * Lib: https://ext.dcloud.net.cn/plugin?id=2351
*/
import axios from '@/lib/u-ajax/js_sdk/index';
import Config from '@/config/index.js';

const systemInfo = uni.getSystemInfoSync();
const systemInfoHeaders = {
    'device-name': systemInfo.brand, // 设备名称
    'width': systemInfo.screenWidth, // 屏幕宽度
    'height': systemInfo.screenHeight, // 屏幕高度
    'os': systemInfo.platform, // 客户端平台
    'os-version': systemInfo.system // 操作系统版本
};

const http = axios.create({
    baseURL: Config.apiUrl,
    timeout: 60000,
    header: {
        ...systemInfoHeaders,
    }
});

http.interceptors.request.use((config) => { /* 请求之前拦截器 */
    let token = uni.getStorageSync('token');
    // uni.showLoading({
    //   title: '加载中',
    //   mask: true
    // })
    if(token){
        config.header['token'] =token;
    }
    return config;
}, error => {
    return Promise.reject(error)
})

/* 请求之后拦截器 */
http.interceptors.response.use(async (response) => {
    uni.hideLoading()
    let code = response.statusCode;
    if(code == 401){
      uni.showModal({
        title: '温馨提示',
        content: '此时此刻需要您登录喔~',
        confirmText: "去登录",
        cancelText: "再逛会",
        success: res => {
          if (res.confirm) {
            uni.navigateTo({
              url: "/pages/subpages/public/login"
            })
          }
          if (res.cancel) {
            uni.navigateBack()
          }
        }
      })
    }
    return response.data;
}, (error) => {
    uni.hideLoading()
    console.log(error);
    uni.showModal({
      title: '服务器异常'
    })
    return Promise.reject(error)
});

export default http;

