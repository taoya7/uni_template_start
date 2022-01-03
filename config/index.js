import Dev from './dev.js';
import Prod from './prod.js';
export default {
	/// 软件配置
	name: 'APP_Name',
	
	
	
	/// 
	debug: process.env.NODE_ENV==='development'?'true':false,
	...process.env.NODE_ENV==='development'?Dev:Prod,
}