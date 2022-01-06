<script>
  import Conf from '@/config/index.js';
	export default {
		onLaunch: function() {
			this.updateManager()
      if(Conf.debug){
        console.log("%c设备信息: ",`color: pink;`, this.$u.sys());
      }
		},
		onShow: function() {
		},
		onHide: function() {
		},
		methods: {
			/**小程序主动更新*/
			updateManager(){
				const updateManager = uni.getUpdateManager();
				updateManager.onCheckForUpdate(res => {
				  // 请求完新版本信息的回调
				  // console.log(res.hasUpdate)
				});
				updateManager.onUpdateReady(() => {
				  uni.showModal({
					title: '更新提示',
					content: '新版本已更新，即将重启应用',
					showCancel: false,
					success(res) {
					  if (res.confirm) {
						// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
						updateManager.applyUpdate()
					  }
					}
				  });
				});
				
				updateManager.onUpdateFailed(() => {
				  uni.showModal({
					title: '更新提示',
					content: '新版本下载失败',
					showCancel: false
				  })
				});
				
			},
		},
	}
</script>

<style lang="scss">
@import "uview-ui/index.scss";
@import 'lib/tuniao-ui/index.scss';
@import 'lib/tuniao-ui/iconfont.css';
// #ifdef H5
uni-page-head {
  display: none;
}

uni-toast {
  z-index: 10078 !important;
}

uni-modal {
  z-index: 10078 !important;
}
// #endif
</style>
