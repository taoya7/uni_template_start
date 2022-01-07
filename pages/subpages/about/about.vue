<template>
  <SimpleScaffold title="关于我们" class="about-us">
    <view class="content">
      <image src="@/static/logo.png" mode="aspectFill" ></image>
      <Size h="64"></Size>
      <text class="logo">
        {{ Conf.name }}
      </text>
      <Size h="20"></Size>
      <text class="description">
        {{ Conf.description }}
      </text>
    </view>
  </SimpleScaffold>
</template>

<script>
  import Conf from '@/config/index.js';
  export default {
    data(){
      return {
        Conf,
      }
    }
  }
</script>

<style lang="scss" scoped>
  .about-us{
    background-color: #fff;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .content{
      display: flex;
      flex-direction: column;
      align-items: center;
      image {
        width: 240rpx;
        height: 240rpx;
      }
      .logo {
        font-size: 20px;
      }
      .description{
        color: grey;
      }
    }
  }
</style>
