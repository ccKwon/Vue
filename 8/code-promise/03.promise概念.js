// 1. Promise 是一个构造函数 可以 new Promise()得到一个 Promise 的实例
// 2. 在 promise 上 有两个函数 resolve(成功后的回调函数) 和 reject(失败之后的回调函数)
// 3. Promise 的构造函数的 prototype 属性上 有一个 .then 方法
// 4. Promise 表示一个异步操作；每当我们 new 一个 promise 的实例 这个实例 就表示一个具体的异步操作
// 5. 既然 promise 创建的 实例 是一个异步操作 那么 这个异步操作的结果 只能由两种状态
//  5.1 状态1：异步执行成功了 需要在内部调用 成功的回调函数 resolve 把结果返回给调用者
//  5.2 状态2：异步执行失败了 需要在内部调用 失败的回调函数 reject 把结果返回给调用者
//  5.3 由于 Promise 的实例 是一个异步操作 所以 内部拿到 操作的结果后 无法使用 return 把操作的结果返回给调用者；
//  这时候只能使用回调函数的形式 把 成功 或 失败的结果 返回调用者
//  6. 可在 new 出来的 promise 实例上 调用 .then()方法 预先 为 这个promise 异步操作 指定成功(resolve) 和 失败 (reject) 回调函数



// 这里 new 出来的 promise 只是代表 形式上的一个异步操作
// 就是说 我们只知道它是一个异步操作 但是具体做什么异步事情 不清楚
// var promise = new Promise()

// var promise = new Promise(function(){
//     // 这个function 内部写的就是具体的异步操作
// })

const fs = require('fs')



// 每当 new 一个 promise 实例的时候 就会立即执行这个 异步操作 中的代码
// var promise = new Promise(function(){
//     fs.readFile('./files/2.txt', 'utf-8', (err, dataStr) => {
//         if(err) throw err
//         console.log(dataStr);
//     })
// })


// function getFileByPath(fpath) {
//     var promise = new Promise(function(){
//         fs.readFile(fpath, 'utf-8', (err, dataStr) => {
//             if(err) throw err
//             console.log(dataStr);
//         })
//     })
// }



function getFileByPath(fpath) {
    return new Promise(function( resolve, reject){
        fs.readFile(fpath, 'utf-8', (err, dataStr) => {
            // if(err) throw err
            // console.log(dataStr);
            if (err) {
                return reject(err)
            }

            resolve(dataStr)
        })
    })

}



getFileByPath('./files/2.txt')
.then(function(dataStr) {
    console.log(dataStr);
}, function(err) {
    console.log(err.message);
})
