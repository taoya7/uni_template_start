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
      title: {
        type: String,
        default: ' '
      },
      isBack: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        Conf,
        navbarColor: ColorsManager.navbarColor,
        navbarTextColor: ColorsManager.navbarTextColor,
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
