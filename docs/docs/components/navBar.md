
### 基本使用

```js
<tn-nav-bar :fixed="true"  backgroundColor="pink" >我的</tn-nav-bar>
```


### 自定义返回按钮

```vue
<tn-nav-bar v-if="mode === 'customBack'" :fixed="false" :customBack="true" :height="height" :backgroundColor="backgroundColor" :alpha="alpha">
  <view slot="back" class='tn-custom-nav-bar__back'>
    <view><text class='tn-icon-left'></text></view>
      <view><text class='tn-icon-home-capsule-fill'></text></view>
          </view>
  <view class="custom-nav-content">
    <view class="search-content">
      <tn-input class="search-input" v-model="searchValue" placeholder="请输入要搜索的内容" :border="true" :height="50" :showLeftIcon="true" leftIcon="search"></tn-input>
  	</view>
  </view>
</tn-nav-bar>
```



### API

| 参数            | 说明       | 类型    |      |
| --------------- | ---------- | ------- | ---- |
| height          | 导航栏高度 | Number  |      |
| fixed           | 是否置顶   | Boolean |      |
| backgroundColor | 背景颜色   | String  |      |
| alpha           |            |         |      |

