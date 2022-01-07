<template>
  <SimpleScaffold :title="Conf.name" navbarColor='#fff' navbarTextColor="#333">
    <view class="search-input">
      <Search @search="handleSearch"></Search>
    </view>
    <view class="search-content">
      <TestList></TestList>
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
    },
    methods: {
      handleSearch(){
        uni.showModal({
          title: '处理搜索业务'
        })
      },
    },
  }
</script>

<style lang="scss">
  $searchH: 100rpx;
  .search-input{
    width: 100%;
    position: fixed;
    width: 100%;
  }
  .search-content{
    padding-top: $searchH;
  }
</style>
