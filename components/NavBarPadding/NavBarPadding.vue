<!-- 填充Nav的高度 -->
<template>
  <view :style="{ paddingTop: vuex_custom_bar_height+20 + 'px' }">
    
  </view>
</template>

<script>
  import template_page_mixin from '@/mixin/template_page_mixin.js'
  export default {
    name:"NavBarPadding",
    mixins: [template_page_mixin],
    data() {
      return {
        
      };
    }
  }
</script>

<style lang="scss">

</style>
