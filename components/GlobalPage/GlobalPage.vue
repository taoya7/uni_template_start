<template>
  <view>
    <view class="u-page">
      <slot></slot>
    </view>
    <u-tabbar :value='$store.state.tabCurrent' :list="list"  :icon-size='36' @change='changeTab' ></u-tabbar>
  </view>
</template>

<script>
  import Config from '@/config/color.js';
  export default {
    name:"GlobalPage",
    data() {
      return {
        list: [],
      };
    },
    methods: {
      changeTab(e){
      	this.$store.commit('changetabBar', e);
      },
    },
    mounted() {
      this.list = this.$store.state.tabbar_list;
    }
  }
</script>

<style lang="scss">

</style>
