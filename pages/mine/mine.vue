<template>
  <GlobalPage>
  <view class="mine-page">
    <!-- 导航 -->
    <view class="mine-cover">
      <image
        src="http://alicdn.taoya.art/img/20220105105902.png"
        mode="widthFix"
      ></image>
    </view>
    <view class="mine-content">
      <!-- 用户卡片 -->
      <view class="mine-card"></view>
      <!-- 导航 -->
      <view class="nav">
        <view class="section" v-for="nav in navs">
          <u-cell-item
            :title="item"
            v-for="(item, index) in nav"
            :key="index"
            class="section-item"
            :arrow="false"
            hover-class=""
          >
          </u-cell-item>
        </view>
      </view>
    </view>
  </view>
  </GlobalPage>
</template>

<script>
import Conf from '@/config/index.js'
export default {
  data() {
    return {
      navs: [
        ['我的消息', '我的动态'],
        ['问题反馈', `关于${Conf.name}`],
        ['消息设置']
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.mine-page {
  width: 100%;
  min-height: 100vh;
  .mine-cover {
    width: 100%;
    height: 40vh;
    background-color: #eee;
    overflow: hidden;
    image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .mine-content {
    transform: translateY(-100rpx);
  }
  .mine-card {
    background: pink;
    height: 300rpx;
    background-color: #fff;
    margin: 0 32rpx;
    border-radius: 10rpx;
  }
  .nav {
    margin: 0 32rpx;
    margin-top: 20rpx;
    .section {
      margin-bottom: 20rpx;
      background-color: #fff;
      border-radius: 10rpx;
      .section-item {
        /deep/ .u-cell {
          padding: 30rpx 30rpx;
          .u-cell_title {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
