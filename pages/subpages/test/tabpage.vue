<template>
  <SimpleScaffold title="Tab切换" >
    <view class="test-tabbar">
      <view class="tabbar">
        <tn-tabs :list="list" :isScroll="false" :current="current" name="tab-name" @change="changeTab"
           :activeColor="ColorManager.appColor"
           inactiveColor="#333"
        ></tn-tabs>
      </view>
      <view class="tabbar-content">
        <Size h='40'></Size>
        <TestList></TestList>
      </view>
    </view>
  </SimpleScaffold>
</template>

<script>
  import ColorManager from '@/config/color.js';
  export default {
    data(){
      return {
        ColorManager,
        current: 0,
        list: [
          {'tab-name': '我送出的'},
          {'tab-name': '我收到的'},
        ],
      }
    },
    methods: {
      changeTab(index){
        this.current = index;
      }
    },
  }
</script>

<style lang="scss" scoped>
  $tabH: 80rpx;
  .tabbar{
    background-color: #fff;
  }
  .test-tabbar{
    display: flex;
    flex-direction: column;
   .tabbar{
     height: $tabH;
     position: fixed;
     width: 100%;
   } 
   .tabbar-content{
     margin-top: $tabH;
   }
  }
</style>
