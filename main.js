import App from './App'

// #ifndef VUE3
import './init/index.js';
import store from '@/store/index.js';
import {router,RouterMount} from '@/router/index.js';
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	store,
    ...App
})
app.$mount(); 
// // #ifdef H5
// 	RouterMount(app,router,'#app')
// // #endif
// // #ifndef H5
// 	app.$mount(); 
// // #endif
// #endif

// // #ifdef VUE3
// import { createSSRApp } from 'vue'
// export function createApp() {
//   const app = createSSRApp(App)
//   return {
//     app
//   }
// }
// // #endif