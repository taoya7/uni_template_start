<template>
	<view class="line-box">
		<view class="header">
			{{ title }}
		</view>
		<u-divider></u-divider>
		<view class="content">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name:"LineBox",
		props: ['title'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.line-box{
	background-color: #fff;
	box-shadow: 0px 4px 4px rgba(230, 230, 230, 0.4);
	border-radius: 4px;
	// padding: ;
	.header{
		padding: 24rpx 32rpx;
		font-weight: bold;
	}
	.content{
		padding: 24rpx 32rpx;
	}
}
</style>
