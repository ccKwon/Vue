const fs = require('fs')

function getFileByPath(fpath) {
    return new Promise(function (resolve, reject) {
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


// 先读取文件1 再读取2 最后读取3
// 通过 .then 指定回调函数的时候 成功的 回调函数 必须传  但是 失败的回调函数 可以省略
// 如果 前面的 promise 执行失败 又希望后续的 promise 继续执行 可以为每一个 promise 指定 失败的 回调函数
getFileByPath('./files/1.txt')
    .then(function (dataStr) {

        console.log(dataStr);

        return getFileByPath('./files/22.txt')
    })
    .then(function (dataStr) {

        console.log(dataStr);

        return getFileByPath('./files/3.txt')
    })
    .then(function (dataStr) {

        console.log(dataStr);

    })
    .catch(function(err) {  //  cath 的作用 如果前面有任何 promise 执行失败 则立即终止所有 promise 的执行
        console.log(err.message);
    })