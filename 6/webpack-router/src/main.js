import Vue from 'vue'

// 导入 vue-router 包
import VueRouter from 'vue-router'

// 通过 Vue.use() 明确地安装路由功能
Vue.use(VueRouter)

import app from './APP.vue'
import account from './Account.vue'
import goodslist from './GoodsList.vue'

var router = new VueRouter({
    routes: [
        { path: '/account', component: account },
        { path: '/goodslist', component: goodslist }
    ]
})

var vm = new Vue({
    el: '#app',
    render: function (createElement) {
        return createElement(app)
    },

    router: router,
})