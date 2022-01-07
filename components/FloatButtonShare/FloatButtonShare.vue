<!-- 分享 -->
<template>
  <view class="float-button-share">
    <image src="@/static/background/app-share.png" mode="aspectFill"></image>
    <text>分享</text>
  </view>
</template>

<script>
  export default {
    name:"FloatButtonShare",
    data() {
      return {
        visible: true,
      };
    }
  }
</script>

<style lang="scss">
.float-button-share{
  
  position: fixed;
  right: 32rpx;
  bottom: 200rpx;
  width: 130rpx;
  height: 130rpx;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.01);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  >image {
    width: 26px;
    height: 26px;
  }
  >text {
    font-size: 10px;
    color: #333;
    font-weight: bold;
    display: block;
    margin-top: 10rpx;
  }
}
</style>
