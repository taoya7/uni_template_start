# Swiper 轮播图

![](http://alicdn.taoya.art/img/20220105142009.png)

### 基本使用

```vue
<tn-swiper
    :list="banner"
    :height="350"
    :effect3d="false"
    mode="dot"
></tn-swiper>


banner: [
    {
        image: 'http://alicdn.taoya.art/img/20220105101314.png'
    },
    {
        image: 'http://alicdn.taoya.art/img/20220105101341.png'
    },
    {
        image: 'http://alicdn.taoya.art/img/20220105101356.png'
    }
],
```

### API

- mode 指示器模式
```js
mode
// 指示器模式
// rect -> 方形 round -> 圆角方形 dot -> 点 number -> 轮播图下标
```

- 指示器位置
```js
indicatorPosition
// 指示器位置
// topLeft \ topCenter \ topRight \ bottomLeft \ bottomCenter \ bottomRight
```

- 圆角的值
```shell
radius: {
    type: Number,
    default: 8
},
```

