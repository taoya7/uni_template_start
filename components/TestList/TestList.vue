<template>
  <view>
    <view v-for="(item, index) in 20" class="item"
      :style="{
        background: colors[index%colors.length]
      }"
    >
      
    </view>
  </view>
</template>

<script>
  let colors = ['red', 'blue', 'black', 'pink', 'orange', '#787878'];
  export default {
    name:"TestList",
    data() {
      return {
        colors,
      };
    }
  }
</script>

<style lang="scss">
.item {
  height: 100px;
  margin-bottom: 20px;
}
</style>
