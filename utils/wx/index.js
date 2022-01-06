import { isPhone, isMobile } from '@/utils/verify.js';
import requests from '@/utils/request.js';
var amap = require('@/lib/amap/amap-wx.130.js');
import Config from '@/config/index.js';

class WxUtils {
  /// 拨打电话
  call(phoneNumber){
    if(!isPhone(phoneNumber)){
      uni.showModal({
        title: '请输入正确的手机号码'
      })
      return ;
    }
    uni.makePhoneCall({
      phoneNumber: phoneNumber,
    })
  }
  
  /// 微信登陆
  login(params){
    //#ifdef MP-WEIXIN
    return new Promise(function(resolve, reject){
      uni.getUserProfile({
        desc: '登陆注册',
        success(rres){
          uni.login({
            provider: 'weixin',
            success (res) {
              if ('login:ok' === res['errMsg']) {
                resolve(res.code);
              }
            }
          });
        },
        fail(e) {
        	uni.showToast({
        		title: '请授权登陆',
            icon: 'error',
            success() {
               reject(e);
            }
        	})
        }
      });
    })
    //#endif
  }
  
  /// 手机号登陆
  phoneLogin(e){
    let _msg = e.errMsg;
    return new Promise(function(resolve, reject){
      if (_msg == "getPhoneNumber:ok") {
        var iv = e.iv;
        var encryptedData = e.encryptedData;
        var code = e.code;
        resolve({
          code, 
          iv,
          encryptedData
        });
      }else{
        uni.showModal({
          title: _msg,
        })
      }
    })
  }

  /// 定位
  location(){
    return new Promise(function(resolve, reject){
    	uni.getLocation({
    	  type: 'gcj02',
    	  geocode: true,
    	  success: (res) => {
          console.log(res);
          if(res.errMsg !== "getLocation:ok"){
            uni.showModal({
              title: '定位出错'
            })
          }else{
            resolve(res);
          }
    	},
        fail(e) {
          uni.showModal({
            title: '定位出错'
          })
          reject(e);
        }
    	});
    });
  }
}

export default new WxUtils();