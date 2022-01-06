import Dev from './dev.js';
import Prod from './prod.js';
import Version from '@/version.js';
import Color from './color.js';
export default {
	// 软件配置
	name: 'Uni',
  // 底部导航路径列表
  bottomNav: [
    'pages/index/index',
    'pages/about/about',
  ],
  // 白名单
  whiteNavList: [
      '/',
      '/pages/index/index',
  ],
  copyright: `功勋科技提供计算服务 ${Version.version}`,
	/// 小程序环境
	debug: process.env.NODE_ENV==='development'?'true':false,
	...process.env.NODE_ENV==='development'?Dev:Prod,
  ...Color
}