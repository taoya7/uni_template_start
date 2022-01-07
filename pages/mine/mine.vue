<template>
  <GlobalPage>
    <view class="mine-page">
      <!-- 用户卡片 -->
      <view class="mine-card">
        <NavBarPadding></NavBarPadding>
        <view class="mine-info">
          <view class="mine-l">
            <view class="cover">
              <image :src="userinfo.avatarUrl" mode="aspectFill"></image>
            </view>
            <view>
              <text class="u-name">{{ userinfo.nickName }}</text>
            </view>
          </view>
          <view class="mine-r">
            <image src="../../static/background/icon-setting.png" ></image>
          </view>
        </view>
      </view>
      <view class="mine-content">
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
      ],
      userinfo: {},
    }
  },
  methods: {
    getUserinfo(){
      let that = this;
      uni.getUserInfo({
        success(res) {
          that.userinfo = res.userInfo;
          console.log(res.userInfo);
        }
      })
    }
  },
  onShow(){
    this.getUserinfo();
  }
}
</script>

<style lang="scss" scoped>
.mine-page {
  width: 100%;
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
  }
  .mine-card {
    background: pink;
    background-color: #fff;
    border-radius: 10rpx;
    padding: 0 32rpx;
    padding-bottom: 32rpx;
    .cover {
      image {
        width: 100rpx;
        height: 100rpx;
        border-radius: 50%;
      }
      margin-right: 20rpx;
    }
    .mine-info{
      display: flex;
      align-items: center;
      justify-content: space-between;
      .u-name {
        font-size: 16px;
        font-weight: 500;
        color: #333;
      }
      .mine-l {
        display: flex;
        align-items: center;
      }
      .mine-r {
        image {
          width: 20px;
          height: 20px;
        }
      }
    }
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
