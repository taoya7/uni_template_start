<template>
	<view :style="{
		width: w+'rpx',
		height: h+'rpx',
	}">
		
	</view>
</template>

<script>
	export default {
		name:"H",
		props: {
			w: {
				type: String,
				default:'0'
			},
			h: {
				type: String,
				default:'0'
			},
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>
