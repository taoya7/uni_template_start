<template>
  <view v-if="true">
    <tn-nav-bar :fixed="true"  backgroundColor="white" ></tn-nav-bar>
    <Size h="200"></Size>
    <u-button @click="$Router.push('/pages/subpages/public/login')">登陆页</u-button>
    <u-button @click="$Router.push('/pages/subpages/public/webview?url=http://www.baidu.com')">WebView</u-button>
    
    <!-- 
        富文本测试
     -->
    <!-- <RichHtml html="<h1 style='color: red;'>富文本使用: Hello</h1> <img src='http://alicdn.taoya.art/img/20220102235248.png'>"></RichHtml> -->
    
    <u-button @click="$Router.push('/pages/subpages/test/zpadding')">分页</u-button>
    <tn-button @click="$wx.call('18735673472')">微信打电话</tn-button>
    <tn-button @click="$wx.login()">微信登陆</tn-button>
    <tn-button @getphonenumber='phoneLogin' open-type="getPhoneNumber">微信电话登陆</tn-button>
    <tn-button @click="$wx.location()">微信定位</tn-button>
    <view></view>
    <tn-button @click="$Router.push('/pages/subpages/notice/notice')">通知页面</tn-button>
    <tn-button @click="$Router.push('/pages/subpages/news/news')">新闻管理</tn-button>
    <tn-button @click="$Router.push('/pages/subpages/test/tabpage')">Tab切换页面</tn-button>
    <tn-button @click="$Router.push('/pages/subpages/search/search')">APP搜索</tn-button>
    
  </view>
</template>

<script>
  import template_page_mixin from '@/mixin/template_page_mixin.js'
  export default {
    mixins: [template_page_mixin],
    mounted() {
    },
    methods: {
      phoneLogin(e){
        let that = this;
        return ;
        //#ifdef MP-WEIXIN
        this.$wx.phoneLogin(e).then(res=>{
          console.log(res);
        });
        //#endif
      }
    }
  }
</script>

<style lang="scss" scoped>
  
  .title{
    display: block;
    height: 100rpx;
    display: flex;
    align-items: center;
    padding: 20rpx;
    margin: 20rpx 32rpx;
    background-color: #fff;
    border-left: 5px solid $app-color;
  }
</style>



