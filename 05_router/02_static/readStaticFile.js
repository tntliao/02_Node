const fs = require('fs')
const path = require('path')
const mime = require('mime')

function readFile(path) {
    return fs.readFileSync(path, (err, data) => {
        if (err) throw err
        return data
    })
}

module.exports = function (response, filePathName) {
    const extName = path.extname(filePathName)
    const fileType = mime.getType(extName)
    let filePath, file
    if (extName) {
        //进入到这里说明是请求文件
        fs.readFile(filePathName, (err, data) => {
            if (err) {
                response.writeHead(404, { 'content-type': 'text/html' })
                filePath = path.join(__dirname, './public/404.html')
                file = readFile(filePath)
                response.end(file)

            } else {
                response.writeHead(200, { "Content-Type": fileType })
                response.end(data)
            }
        })
    } else {
        //进入到这里请求的是文件夹，统一返回首页
        filePath = path.join(__dirname, './public/index.html')
        file = readFile(filePath)
        response.writeHead(200, { "content-type": 'text/html' })
        response.end(file)
    }
}