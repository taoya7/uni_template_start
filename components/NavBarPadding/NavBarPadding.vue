<!-- 填充Nav的高度 -->
<template>
  <view :style="{ paddingTop: statusBarHeight+navHeight + 'px' }">
    
  </view>
</template>

<script>
  export default {
    name:"NavBarPadding",
    data() {
      return {
        statusBarHeight: 0, // 状态栏高度
        navHeight: 45, // 导航栏高度
      };
    },
    created() {
    	// 获取手机系统信息
    	const sysInfo = uni.getSystemInfoSync();
    	this.statusBarHeight = sysInfo.statusBarHeight;
    	this.navWidth = sysInfo.windowWidth;
    	
    	// 获取胶囊的位置
    	// #ifndef H5 || APP-PLUS || MP-ALIPAY
    	const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
    	this.navHeight = (menuButtonInfo.bottom-sysInfo.statusBarHeight)
    		+ (menuButtonInfo.top-sysInfo.statusBarHeight);
    	// #endif
      console.log("Nav", this.statusBarHeight, this.navHeight);
    }
  }
</script>

<style lang="scss">

</style>
