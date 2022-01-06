<template>
  <view v-if="url">
    <web-view :src="url"></web-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      url: ''
    }
  },
  mounted() {
    this.url = this.$Route.query.url
  }
}
</script>

<style></style>
