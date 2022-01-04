<!--
分页效果演示
-->
<template>
  <view class="content">
      <z-paging ref="paging" v-model="dataList" @query="queryList">
          <!-- 设置自己的emptyView组件，非必须。空数据时会自动展示空数据组件，不需要自己处理 -->
          <empty-view slot="empty">
            暂无数据
          </empty-view>
          <view class="item" v-for="(item,index) in dataList">
              <view class="item-title">{{item.title}}</view>
          </view>
      </z-paging>
  </view>
</template>

<script>
  export default {
    data(){
      return {
        dataList: [],
      }
    },
    methods: {
      queryList(pageNo, pageSize){
        //这里的pageNo和pageSize会自动计算好，直接传给服务器即可
        //这里的请求只是演示，请替换成自己的项目的网络请求，请在网络请求回调中
        //通过this.$refs.paging.complete(请求回来的数组);将请求结果传给z-paging
        this.$requests.get(`/blog/post/?page=${pageNo}&size=${pageSize}&type=10`).then(data=>{
          this.$refs.paging.complete(data.results);
        });
      }
    },
  }
</script>
<style lang="scss">
  .item{
    width: 100vw;
    height: 50px;
    margin-top: 20px;
    background: pink;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
