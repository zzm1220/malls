/*
 * @Author: zhimin
 * @Date: 2021-01-27 14:03:30
 * @LastEditors: zhimin
 * @LastEditTime: 2021-02-10 15:01:18
 * @FilePath: \malls\src\util\request.js
 */
import axios from 'axios'
const instance = axios.create({
    baseURL: '/api',
    timeout: 8000
})
// 接口返回统一处理
instance.interceptors.response.use(response => {
    const res = response.data
    const path = location.hash
    if (res.status === 0) {
        return res.data
    } else if (res.status === 10) {
        if (path !== '#/home') {
            window.location.href = "/#login"
        }
        // return Promise.rejesct(res)
    } else {
        alert(res.msg)
        return Promise.reject(res)
    }
}, error => {
    alert(error)
})

export const get = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        instance.get(url, { params }).then(response => {
            console.log(response)
            resolve(response)
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
            resolve(response)
        }, err => {
            reject(err)
        })
    })
}

export const put = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        instance.put(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(response)
            resolve(response)
        }, err => {
            reject(err)
        })
    })
}

export const del = url => {
    return new Promise((resolve, reject) => {
        instance.delete(url).then(response => {
            resolve(response)
        }, err => {
            reject(err)
        })
    })
}