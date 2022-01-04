<template>
  <view>
    <u-button @click="$Router.push('/pages/subpages/public/login')">登陆页</u-button>
    <u-button @click="$Router.push('/pages/subpages/public/webview?url=http://www.baidu.com')">WebView</u-button>
    <RichHtml html="<h1 style='color: red;'>富文本使用: Hello</h1> <img src='http://alicdn.taoya.art/img/20220102235248.png'>"></RichHtml>
    <u-button @click="$Router.push('/pages/subpages/test/zpadding')">分页</u-button>
  </view>
</template>

<script>
  export default {
    mounted() {
      console.log(this.$Route);
    }
  }
</script>

<style>
</style>
