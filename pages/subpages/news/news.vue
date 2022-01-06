<template>
  <SimpleScaffold title="新闻管理" class="news">
    <Search placeholder="请输入标题" @search="handleSearch"></Search>
    <Size h='100'></Size>
    <view class="news-wrap">
      <view
        class="news-item"
        @click="$Router.push('/pages/subpages/news/detail?id=1')"
        v-for="item in 80"
      >
        <view class="info">
          <text class="title">新闻标题</text>
          <view class="bt">
            <view class="time">2022年1月1日</view>
            <view class="read">10 阅读</view>
          </view>
        </view>
        <view class="cover">
          <image
            src="http://alicdn.taoya.art/img/20211229233607.png"
            mode="heightFix"
          ></image>
        </view>
      </view>
    </view>
  </SimpleScaffold>
</template>

<script>
import Search from './components/Search.vue'
export default {
  components: {
    Search
  },
  methods: {
    handleSearch(key) {
      console.log(key)
    }
  },
  onLoad() {}
}
</script>

<style lang="scss" scoped>
.news {
  /deep/ .search {

  }
  .news-wrap{
   
  }
}
.item {
  width: 100%;
  height: 100px;
  background-color: blue;
  margin-bottom: 20px;
}

.news-item {
  padding: 32rpx 32rpx;
  border-bottom: 1px solid #d2d2d2;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  .info {
    flex: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      color: #333333;
      font-weight: 500;
    }
    .bt {
      display: flex;
      justify-content: space-between;
      font-size: 10px;
      color: #999999;
    }
  }
  .cover {
    margin-left: 16rpx;
    flex-shrink: 0;
    width: 192rpx;
    height: 140rpx;
    background-color: #eee;
    border-radius: 3px;
    image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
