const fs = require('fs')
const fsPromise = require('fs/promises')
// 1.创建文件夹
/* fs.mkdir('./logs', (err) => {
    if (err) throw err
    console.log('文件夹创建成功')
})
 */
// 2.修改文件夹
/* fs.rename('./logs', './log', (err) => {
    if (err) throw err
    console.log('重命名成功')
}) */

// 3.删除文件夹
/* setTimeout(() => {
    fs.rmdir('./logs', (err) => {
        if (err) throw err
        console.log('文件夹删除成功')
    })
}, 3000) */

// 4.读取文件夹
/* fs.readdir('./logs', (err, data) => {
    if (err) throw err
    console.log(data)
}) */

// 5.创建文件
/* fs.writeFile('./logs/01_log.log', 'hello\nliaojiajia', (err) => {
    console.log('done.')
}) */

// 6.追加文件
/* fs.appendFile('./logs/01_log.log', '2021-11-30', (err) => {
    console.log('done')
}) */

// 7.删除文件
/* fs.unlink('./logs/01_log.log', (err) => {
    console.log('done')
}) */

// 8.读取文件
/* fs.readFile('./logs/01_log.log', 'utf-8', (err, data) => {
    console.log(data)
}) */
/* fs.readFile('./logs/01_log.log', (err, data) => {
    console.log(data.toString())
}) */

// 9.批量写文件
/* for (let i = 0 i < 10 i++) {
    fs.writeFile(`./logs/${i + 1}_log.log`, `${i + 1}_log.log`, (err) => {
        console.log('done.')
    })
} */

// 10.批量读取文件
function readDir(path) {
    fs.readdir(path, (err, data) => {
        data.forEach((val, index) => {
            let dir = path + '/' + val
            fs.stat(dir, (err, stats) => {
                if (stats.isDirectory()) {
                    readDir(dir)
                } else {
                    fs.readFile(dir, 'utf-8', (err, data) => {
                        console.log(data)
                    })
                }
            })
        })
    })
}

// readDir('./')

// 11.监视文件
/* fs.watch('./logs/1_log.log', () => {
    console.log('文件已经发生改变')
}) */

fs.watchFile('./logs/1_log.log', (current, previous) => {
    console.log(current.isDirectory());
})