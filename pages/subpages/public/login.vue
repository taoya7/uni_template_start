<template>
  <view class="login-page">
    <u-navbar back-text=" " :is-back="false">
      <view class="leader" @click="toHome">
        <image
          src="@/static/background/login-home.png"
          mode="aspectFit"
        ></image>
      </view>
    </u-navbar>
    <view class="login-wrapper">
      <NavBarPadding></NavBarPadding>
      <view class="logo">
        <image src="@/static/logo.png" mode=""></image>
      </view>
      <view class="logo-text">{{ $config.name }}</view>
      <Size h="64"></Size>
      <u-divider></u-divider>
      <view class="notice">
        <text class="title">登陆后将获得以下权限</text>
        <view class="ul">
          <view class="li"><span></span>获得你的公开信息(昵称、头像等)</view>
        </view>
      </view>
      <Size h="64"></Size>
      <view class="form">
        <view class="form-button">
          <u-button type="primary" shape="circle" @click="handleWxLogin"
            >微信一键登陆</u-button
          >
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import requests from '@/utils/request.js'
export default {
  data() {
    return {}
  },
  methods: {
    handleWxLogin() {
      this.$wx.login().then((code) => {
        // 此处处理业务逻辑
        uni.showModal({
          title: code
        })
      })
    },
    wxlogin() {
      this.$wx.login()
    },
    toHome() {
      this.$Router.replaceAll('/pages/index/index')
    }
  }
}
</script>

<style lang="scss">
.login-page {
  background-color: #fff;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  .leader {
    width: 18px;
    height: 18px;
    margin-left: 32rpx;
    image {
      width: 100%;
      height: 100%;
    }
  }
  .login-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .logo {
    width: 100px;
    height: 100px;
    image {
      width: 100%;
      height: 100%;
    }
  }
  .logo-text {
    display: block;
    margin: 20rpx 0;
    font-size: 18px;
  }
  .notice {
    padding: 32rpx 0;
    width: 100%;
    .title {
      font-size: 15px;
      font-weight: bold;
      margin-bottom: 32rpx;
      display: block;
    }
    .ul {
      .li {
        color: grey;
        position: relative;
        display: flex;
        align-items: center;
        font-size: 11px;
        span {
          width: 3px;
          height: 3px;
          background-color: grey;
          display: inline-block;
          margin-right: 32rpx;
        }
      }
    }
  }
}
.form-button {
  width: 600rpx;
}
</style>
