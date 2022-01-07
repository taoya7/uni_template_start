<template>
  <view v-if="state">
    <u-popup v-model="state" mode="bottom" border-radius="28"
      :mask-close-able='false'
    >
      <view class="share-content">
        <view class="slide-nav">
          <view class="item" @tap="shareWX">
            <image src="@/static/background/wx.png" mode="aspectFill"></image>
            <text>发送给成员</text>
          </view>
          <view class="item">
            <image src="@/static/background/save_pic.png" mode="aspectFill"></image>
            <text>保存分享卡片</text>
          </view>
        </view>
        <Size h="40"></Size>
        <u-divider></u-divider>
        <view class="calcel" @click="cancel">取消</view>
        <Size h="40"></Size>
      </view>
    </u-popup>
  </view>
</template>

<script>
  export default {
    name:"ShareDialog",
    props: ['state'],
    data() {
      return {
        
      };
    },
    methods: {
      shareWX(){
        console.log('wx');
      },
      cancel(){
        this.$emit('cancel');
      }
    },
  }
</script>

<style lang="scss">
.share-content{
  background-color: #fff;
  padding: 32rpx;
  .slide-nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      image {
        width: 100rpx;
        height: 100rpx;
        display: block;
        margin-bottom: 20rpx;
      }
      text {
        font-size: 11px;
        color: #333;
      }
    }
  }
  .calcel{
    width: 100%;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: grey;
    font-weight: 400;
  }
}
</style>
