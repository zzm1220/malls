/*
 * @Author: zhimin
 * @Date: 2021-01-27 15:18:58
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-27 15:37:23
 * @FilePath: \malls\env.js
 */
let baseUrl = "";

const NODE_ENV = process.env.NODE_ENV
console.log(NODE_ENV)
switch (NODE_ENV) {
    case 'development':
        baseUrl = "http://dev-mall-pre.springboot.cn/api"
        break
    case 'production':
        baseUrl = "http://mall-pre.springboot.cn/api"
        break
    default:
        baseUrl = "http://mall-pre.springboot.cn/api"
        break
}

export default baseUrl