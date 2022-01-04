import Dev from './dev.js';
import Prod from './prod.js';
export default {
	/// 软件配置
	name: 'APP_Name',
  /// 底部导航路径列表
  bottomNav: [
    'pages/index/index',
    'pages/about/about',
  ],
	/// 小程序环境
	debug: process.env.NODE_ENV==='development'?'true':false,
	...process.env.NODE_ENV==='development'?Dev:Prod,
}