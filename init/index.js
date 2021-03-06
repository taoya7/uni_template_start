import './print.js'; // 定制Banner
import './uview.js'; // UView
import Vue from 'vue';
import requests from '@/utils/request.js';
import config from '@/config/index.js';
import platform from '@/utils/platform.js'
import WxUtils from '@/utils/wx/index.js';
import TuniaoUI from '@/lib/tuniao-ui'


Vue.prototype.$requests = requests;
Vue.prototype.$config = config;   
Vue.prototype.$platform = platform; // 当前环境
// #ifdef MP-WEIXIN
Vue.prototype.$wx = WxUtils;
// #endif
Vue.use(TuniaoUI)


if(config.debug){
	console.log("项目配置: ", config);
	console.log("当前环境: ", platform);
}
