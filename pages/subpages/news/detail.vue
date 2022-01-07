<template>
  <SimpleScaffold title="新闻管理" class="news">
    <view class="article">
      <view class="usercard">
        <view class="l">
          <view class="cover"></view>
          <view>
            <text>张三</text>
          </view>
        </view>
        <view class="r"> </view>
      </view>
      <view class="article-title">{{ title }}</view>
      <view class="article-info">
        <view class="l">2022年1月1日</view>
        <view class="r">
          <image src="../../../static/background/view.png" mode=""></image>
          <text>100</text>
        </view>
      </view>
      <RichHtml :html="content"></RichHtml>
    </view>
  </SimpleScaffold>
</template>

<script>
export default {
  data() {
    return {
      title: '新闻标题',
      content: '<h1>新闻内容</h1>'
    }
  }
}
</script>

<style lang="scss">
.usercard {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20rpx;
  .l {
    display: flex;
    align-items: center;
    .cover {
      width: 104rpx;
      height: 104rpx;
      background-color: #eee;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 20rpx;
      image {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.article {
  background-color: #fff;
  padding: 32rpx;
  .article-title {
    font-size: 20px;
    margin-bottom: 32rpx;
    display: block;
  }
  .article-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: grey;
    margin-bottom: 20rpx;
    .r {
      display: flex;
      align-items: center;
    }
    image {
      width: 22px;
      height: 22px;
    }
  }
}
</style>
