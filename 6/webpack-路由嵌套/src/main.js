import Vue from 'vue'

// 导入自定义路由模块
import router from './router.js'

// 导入 vue-router 包
import VueRouter from 'vue-router'

// 通过 Vue.use() 明确地安装路由功能
Vue.use(VueRouter)

import app from './APP.vue'

var vm = new Vue({
    el: '#app',
    render: function (createElement) {
        return createElement(app)
    },

    router: router,
})