/*
 * @Author: zhimin
 * @Date: 2021-01-27 10:04:53
 * @LastEditors: zhimin
 * @LastEditTime: 2021-01-27 15:25:43
 * @FilePath: \malls\src\storage\index.js
 */
const STORAGE_KEY = "mall"

const myStorage = {
    setItem (key, val, module_name) {
        if (module_name) {
            const moduleVal = this.getItem(module_name)
            moduleVal[key] = val
            this.setItem(module_name, moduleVal)
        } else {
            const storage = this.getStorage()
            storage[key] = val;
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(storage))
        }
    },
    getItem (key, module_name) {
        if (module_name) {
            const val = this.getItem(module_name)
            if (val) return val[key]
        }
        return this.getStorage()[key]
    },
    getStorage () {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || "{}")
    },
    clear (key, module) {
        const myStorage = this.getStorage()
        if (module) {
            if (!myStorage[module]) return
            delete myStorage[module][key]
        } else {
            delete myStorage[key]
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(myStorage))
    }
}
export default myStorage