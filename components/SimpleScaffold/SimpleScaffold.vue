<template>
  <view>
    <u-navbar 
      :is-back="isBack" 
      back-text=" " 
      :title="title" 
      :background="{
        background: navbarColor,
      }"
      :title-color='navbarTextColor'
      :is-fixed='true'
      
      >
    </u-navbar>
    <view class="scaffold-content">
      <slot></slot>
    </view>
  </view>
</template>

<script>
  import Conf from '@/config/index.js';
  import template_page_mixin from '@/mixin/template_page_mixin.js'
  import ColorsManager from '@/config/color.js';
  export default {
    name:"SimpleScaffold",
    mixins: [template_page_mixin],
    props: {
      // 标题文字
      title: {
        type: String,
        default: ' '
      },
      // 是否显示返回按钮
      isBack: {
        type: Boolean,
        default: true,
      },
      // 导航背景颜色
      navbarColor: {
        type: String,
        default: ColorsManager.navbarColor
      },
      // 导航文字颜色
      navbarTextColor: {
        type: String,
        default: ColorsManager.navbarTextColor
      },
    },
    data() {
      return {
        Conf,
      };
    },
    methods: {
    },
    mounted() {
      uni.setNavigationBarTitle({
        title: this.title,
      })
    }
  }
</script>

<style lang="scss">
  .scaffold-content{
    
  }
</style>
