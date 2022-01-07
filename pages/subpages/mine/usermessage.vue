<template>
  <SimpleScaffold title="编辑资料" class="edit-user">
    <u-cell-item  title="头像" :arrow="false">
      <view class="form-value">
        <view class="u-cover" @click="uploadCover">
          
        </view>
      </view>
    </u-cell-item>
    <u-cell-item  title="昵称" :arrow="false">
      <view class="form-value">
        <input v-model='userinfo.nickname' @blur="changeInput('nickname', $event)"></input>
      </view>
    </u-cell-item>
    <u-cell-item  title="简介" :arrow="false">
      <view class="form-value">
        <input v-model='userinfo.description' @blur="changeInput('description', $event)"></input>
      </view>
    </u-cell-item>
    <u-cell-item  title="手机" :arrow="false">
      <text>187****3472</text>
    </u-cell-item>
  </SimpleScaffold>
</template>

<script>
  import { uploadImageFile,uploadVideoFile }  from '@/utils/app/uploadFile.js';
  export default {
    data(){
      return {
        userinfo: {
          nickname: '测试账号',
          description: '',
        },
      }
    },
    methods: {
      uploadCover(){
        uploadImageFile().then(res=>{
          console.log(res);
        });
      },
      changeInput(key, e){
        /// key： 更新的user字段 keyword: 即将更新的值
        let keyword = e.detail.value;
        console.log(key, keyword);
        uni.showLoading({
          title: '更新中',
          mask: true
        });
        setTimeout(()=>{
          uni.hideLoading();
        }, 300)
      }
    },
  }
</script>

<style lang="scss" scoped>
  $cellBg: #fff;
  .edit-user{
    .form-value{
      display: flex;
      justify-content: flex-end;
    }
    .u-cover{
      width: 100rpx;
      height: 100rpx;
      background-color: #eee;
      border-radius: 50%;
      display: flex;
      justify-content: flex-end;
    }
    /deep/ .u-cell {
      background-color: $cellBg !important;
      padding: 40rpx  32rpx !important;
    }
  }
</style>
