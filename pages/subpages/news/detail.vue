<template>
  <SimpleScaffold title='新闻管理' class="news">
    <view class="article">
      <RichHtml :html="content"></RichHtml>
    </view>
  </SimpleScaffold>
</template>

<script>
  export default {
    data(){
      return {
        content: '<h1>HHH</h1>',
      }
    }
  }
</script>

<style>
</style>
