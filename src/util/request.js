/*
 * @Author: zhimin
 * @Date: 2021-01-27 14:03:30
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-27 15:39:09
 * @FilePath: \malls\src\util\request.js
 */
import axios from 'axios'
import baseURL from '../../env'
const instance = axios.create({
    baseURL,
    timeout: 8000
})
// 接口返回统一处理
instance.interceptors.response.use(response => {
    const res = response.data
    if (res.status === 0) {
        return res.data
    } else if (res.status === 10) {
        window.location.href = "/#login"
    } else {
        alert(res.msg)
    }
}, error => {
    alert(error)
})

export const get = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        instance.get(url, { params }).then(response => {
            resolve(response.data)
        }, err => {
            reject(err)
        })
    })
}

export const post = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        instance.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            resolve(response.data)
        }, err => {
            reject(err)
        })
    })
}