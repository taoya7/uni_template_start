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
          <view class="mine-r" @click="$Router.push('/pages/subpages/mine/usermessage')">
            <image src="../../static/background/icon-setting.png"></image>
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
              @click="handleNav(item)"
            >
            </u-cell-item>
          </view>
          <!-- #ifdef MP-WEIXIN -->
          <view class="section">
            <button open-type="feedback">问题反馈</button>
            <u-cell-item
              title="设置"
              class="section-item"
              :arrow="false"
              hover-class=""
              @click="handleNav('设置')"
            ></u-cell-item>
          </view>
          <!-- #endif -->
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
        [`关于${Conf.name}`],
      ],
      userinfo: {}
    }
  },
  methods: {
    handleNav(item){
      if(item=='设置'){
        uni.openSetting();
      }
      if(item==`关于${Conf.name}`){
        this.$Router.push('/pages/subpages/about/about');
      }
    },
    getUserinfo() {
      let that = this
      uni.getUserInfo({
        success(res) {
          that.userinfo = res.userInfo
          console.log(res.userInfo)
        }
      })
    }
  },
  onShow() {
    this.getUserinfo()
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
    .mine-info {
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
      button {
        background-color: #fff;
        text-align: left;
        font-size: 16px;
        font-weight: 400;
        height: 114rpx;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: #333;
      }
      .section-item {
        /deep/ .u-cell {
          padding: 30rpx 30rpx;
          .u-cell_title {
            font-size: 16px;
            font-weight: 400;
          }
        }
      }
    }
  }
}
</style>
