// 导入 Jquery
// improt *** from *** 是ES6中导入模块的模板
import $ from 'jQuery';

import '../css/index.css';


$(function(){
    $('li:odd').css('backgroundColor', 'red')
    $('li:even').css('backgroundColor', function(){
        return '#' + 'D97634';
    })
})

// webpack 能够处理 JS 文件的互相依赖关系
// webpack 能够处理JS的兼容问题 把高级的语法导致浏览器不识别的语法转为低级的浏览器能够识别



// 使用 webpack-dev-server 工具来实现自动打包编译
// np, i webpack-dev-server -D