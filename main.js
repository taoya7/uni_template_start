import App from './App'
import store from '@/store/index.js';
import {router,RouterMount} from '@/router/index.js';
import './init/index.js';
import Vue from 'vue'
Vue.use(router)

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	store,
    ...App
})
// #ifdef H5
	RouterMount(app,router,'#app')
// #endif
// #ifndef H5
	app.$mount();
// #endif


