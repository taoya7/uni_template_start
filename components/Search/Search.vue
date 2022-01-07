<template>
	<view class="search">
		<view class="search-input">
			<image src="@/static/background/search.png" mode=""></image>
			<input type="text" :placeholder="placeholder" v-model="key" @confirm='submit'>
		</view>
	</view>
</template>

<script>
	export default{
		props: {
			placeholder: {
				type: String,
				default: '搜索'
			}
		},
		methods: {
			submit(){
				this.$emit('search', this.key);
			}
		},
		data(){
			return {
				key: '',
			}
		}
	}
</script>

<style lang="scss">
	.search{
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #fff;
		.search-input{
			background-color: #eee;
			border-radius: 46px;
			width: 686rpx;
			height: 72rpx;
			display: flex;
			align-items: center;
			padding: 0 20px;
			image {
				margin-right: 10rpx;
				width: 48rpx;
				height: 48rpx;
			}
			input {
				flex: auto;
			}
		}
	}
</style>
