
# 使用uni-simple-router 作为默认路由管理

官网

https://hhyang.cn/v2/

### 编程式导航


进入

```js
// 字符串
this.$Router.push('/pages/router/router1')

// 对象
this.$Router.push({path:'/pages/router/router1'})

// 命名的路由
this.$Router.push({ name: 'router1', params: { userId: '123' }})

// 带查询参数，变成 /router1?plan=private
this.$Router.push({ path: 'router1', query: { plan: 'private' }})
```

退出

```js
// 后退 2 步记录
this.$Router.back(2,{
    success:(...arg)=>{
        console.log(arg)
    }
})

// 如果 history 记录不够用，那就默默地失败呗
this.$Router.back(100,{
    success:(...arg)=>{
        console.log(arg)
    }
})
```