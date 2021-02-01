<!--
 * @Author: zhimin
 * @Date: 2021-01-27 10:04:53
 * @LastEditors: zhimin
 * @LastEditTime: 2021-02-01 15:34:27
 * @FilePath: \malls\README.md
-->
# malls

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
### cookie localStorage sessionStorage 区别
1. 存储大小：cookie:4k storage 5M
2. 有效期：cookie:有有效期 localstorage；永久存储，sessionStorage: 会话存储
3. cookie会发送到服务器端，storage存储在浏览器端
4. 路径：cookie有路径限制，storage只存在域名下
5. api: cookie没有特定的api;storage有对应的api
### storage
1. storage本身的api,只是简单的key/value
2. 只存储字符串，需要人工转化成json对象
3. 只能一次性清空，不能单个清空
### 开发环境设置
1. process.env.NODE_ENV：来获取环境信息
### Mock数据
1. 本地创建json
2. mock数据平台
3. 集成Mock Api
### vuex
