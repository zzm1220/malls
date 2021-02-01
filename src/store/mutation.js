/*
 * @Author: zhimin
 * @Date: 2021-02-01 16:08:24
 * @LastEditors: zhimin
 * @LastEditTime: 2021-02-01 17:18:49
 * @FilePath: \malls\src\store\mutation.js
 */
export default {
    saveUsername (state, payload) {
        const { username } = payload
        state.username = username
    },
    saveCartCount (state, payload) {
        const { cartCount } = payload
        state.cartCount = cartCount
    }
}