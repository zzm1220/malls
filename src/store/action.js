/*
 * @Author: zhimin
 * @Date: 2021-02-01 16:08:14
 * @LastEditors: zhimin
 * @LastEditTime: 2021-02-01 17:14:52
 * @FilePath: \malls\src\store\action.js
 */
export default {
    saveUsername (context, payload) {
        const { commit } = context
        const { username } = payload
        commit('saveUsername', {
            username
        })
    },
    saveCartCount (context, payload) {
        const { commit } = context
        const { cartCount } = payload
        commit('saveCartCount', {
            cartCount
        })
    }
}