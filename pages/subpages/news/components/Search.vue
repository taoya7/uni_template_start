<template>
  <view class="search">
    <view class="search-input">
      <image src="@/static/background/search.png" mode=""></image>
      <input
        type="text"
        :placeholder="placeholder"
        @confirm="submit"
        v-model="key"
      />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      key: ''
    }
  },
  props: {
    placeholder: {
      type: String,
      default: '请输入搜索内容'
    }
  },
  methods: {
    submit() {
      this.$emit('search', this.key)
    }
  }
}
</script>

<style lang="scss">
.search {
  height: 100rpx;
  background-color: $app-color;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 100;
  .search-input {
    background-color: #fff;
    border-radius: 46px;
    width: 686rpx;
    height: 72rpx;
    display: flex;
    align-items: center;
    padding: 0 20px;
    image {
      margin-right: 10rpx;
      width: 48rpx;
      height: 48rpx;
    }
    input {
      flex: auto;
    }
  }
}
</style>
