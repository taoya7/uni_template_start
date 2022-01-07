import setting from '../../config/index.js';

// 上传图片
export function uploadImageFile(){
  return new Promise(function(resolve, reject){
	  uni.chooseImage({
	    count: 1,
	    sizeType: ['original', 'compressed'],
	    sourceType: ['album', 'camera'], //从相册选择和拍照
	    success(res){
	      var tempFilePaths = res.tempFilePaths;
	      let path = tempFilePaths[0];
	      uni.uploadFile({
	        url: setting.baseUrl+'/common/upload',
	        filePath: path,
	        name: 'file',
	        header: {
	          token: uni.getStorageSync('token'),
	        },
	        success(res){
				let data = JSON.parse(res.data);
            if(data.code === 1){
              return resolve(data.data);
            }else{
              uni.showToast({
                title: '上传失败',
                icon: 'error'
              });
            }
          }
        })
	    },
	  });
  })
}


export function uploadVideoFile(){
	return new Promise(function(resolve, reject){
		uni.chooseVideo({
			sourceType: ['album', 'camera'], //从相册选择和拍照
			success: (res)=>{
			  let path = res.tempFilePath;
			  uni.uploadFile({
			    url: setting.baseUrl+'/common/upload',
			    filePath: path,
			    name: 'file',
			    header: {
			      token: uni.getStorageSync('token'),
			    },
			    success(res){
					let data = JSON.parse(res.data);
					if(data.code === 1){
						return resolve(data.data);
					}else{
						uni.showToast({
							title: '上传失败',
							icon: 'error'
						})
					}
			    },
				fail() {
					console.log('失败');
				}
			  })
			}
		})
	})
}
