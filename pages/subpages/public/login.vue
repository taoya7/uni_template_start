<template>
  <view class="login-page">
    <tn-nav-bar fixed  backTitle=" "></tn-nav-bar>
    <view >
      <NavBarPadding></NavBarPadding>
      <view class="form">
        <view class="form-button">
          <u-button type="primary" shape='circle'>微信登陆</u-button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import requests from '@/utils/request.js'
export default {
  methods: {
    wxlogin() {
      this.$wx.login()
    }
  }
}
</script>

<style lang="scss">
  .login-page{
    background-color: #fff;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  .form-button{
    width: 600rpx;
  }
</style>
