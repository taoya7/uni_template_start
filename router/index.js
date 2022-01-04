import { RouterMount, createRouter } from 'uni-simple-router'
import Config from '@/config/index.js';
/**
 * @author Taoya
 * @date 2021/7/31
 * @Description: Router Pro
 *
 * Plugin Doc: https://hhyang.cn/v2/start/quickstart.html
 * npm install uni-read-pages
 */

const router = createRouter({
  h5: { vueRouterDev: false },
  platform: process.env.VUE_APP_PLATFORM,
  routes: [...ROUTES]
})

if(Config.debug){
	console.log("路由配置: ", ROUTES);
}

//全局路由前置守卫
router.beforeEach((to, from, next) => {
  console.log('路由跳转', from.path, to.path)
  if(Config.bottomNav.includes(to.path)){
    uni.switchTab({
      url: from.path,
    })
  }
  next()
})

// 全局路由后置守卫
router.afterEach((to, from) => {})

export { router, RouterMount }
