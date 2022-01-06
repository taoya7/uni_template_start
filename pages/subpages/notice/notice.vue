<template>
  <SimpleScaffold title="消息通知" class="notice">
    <view class="content">
      <z-paging v-if="true" ref="paging" v-model="dataList" @query="queryList">
        <Size h="200"></Size>
        <view
          class="notice-item"
          v-for="message in dataList"
          :key="message.id"
          style="margin-bottom: 32rpx"
          @click="
            $Router.push(`/pages/subpages/notice/detail?id=${message.id}`)
          "
        >
          <LineBox title="消息标题">
            <view>
              <view class="content" style="padding: 20rpx 0"> 消息内容 </view>
            </view>
            <u-divider></u-divider>
            <view
              class="footer"
              style="
                padding-top: 10rpx;
                display: flex;
                justify-content: flex-end;
              "
            >
              2022年1月1日 12:00
            </view>
          </LineBox>
        </view>
      </z-paging>
    </view>
  </SimpleScaffold>
</template>

<script>
import LineBox from './components/LineBox.vue'
export default {
  components: {
    LineBox
  },
  data() {
    return {
      dataList: []
    }
  },
  methods: {
    queryList(pageNo, pageSize) {
      this.$requests
        .get(`/blog/post/?page=${pageNo}&size=${pageSize}&type=1`)
        .then((data) => {
          this.$refs.paging.complete(data.results)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.notice-item {
  margin: 0 32rpx;
  &:first-child {
    margin-top: 32rpx;
  }
}
</style>
