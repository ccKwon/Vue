//  需求：封装一个方法，给定一个读取文件的路径 方法能帮我读取文件 并把内容返回


const fs = require('fs');
const path = require('path');

// 普通读取文件的方式
// fs.readFile(path.join(__dirname, './files/1.txt'), 'uft-8', (err, dataStr) => {
//     if (err) throw err;
//     console.log(dataStr);
// })


// 给定文件路径 返回读取到的内容
function getFileByPath(fpath, callback) {
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        if (err) throw err
        callback(dataStr)
    })
}

getFileByPath('./files/1.txt', (dataStr) => {
    console.log(dataStr);
})