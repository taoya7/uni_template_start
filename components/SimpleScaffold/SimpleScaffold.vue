<template>
  <view>
    <view class="scaffold-content">
      <slot></slot>
    </view>
  </view>
</template>

<script>
  import Conf from '@/config/index.js';
  import template_page_mixin from '@/mixin/template_page_mixin.js'
  export default {
    name:"SimpleScaffold",
    mixins: [template_page_mixin],
    props: {
      title: {
        type: String,
        default: ' '
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
