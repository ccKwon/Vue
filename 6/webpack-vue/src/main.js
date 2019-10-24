
// 在webpack中 使用 这种方式导入的 vue 构造函数 是功能不完整的 只提供了 runtime-only 的方式
import Vue from 'vue'
// import Vue from '../node_modules/vue/dist/vue.js'


// var login = {
//     template: '<h1>这是login组件</h1>'
// }

// 导入login组件
import login from './login.vue'
// 默认 webpack 无法打包 vue文件 需要安装 相关的loader

var vm = new Vue({
    el: '#app',
    data: {
        msg : 111,
    },

    methods: {
        
    },

    // components: {
    //     login
    // },

    render: function (createElement) {
        return createElement(login)
    }
})