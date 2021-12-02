const logger = require('../debug')
const http = require('http')
const https = require('https')
const querystring = require('querystring')

const server = http.createServer((request, response) => {

    /* 
        // 1.获取请求路径
        logger.debug(request.url)
        response.writeHead(200, {
            // https://www.runoob.com/http/http-content-type.html
            'content-type': "application/json"  // 设置返回的数据类型
        })
        response.end() // 结束，否则浏览器会一直在转
     */

    response.writeHead(200, {
        'content-type': "application/json"
    })
    https.get('https://www.xiaomiyoupin.com/mtop/mf/resource/data/list', result => {
        let data = ''
        result.on('data', chunk => {
            data += chunk
        })
        result.on('end', () => {
            response.end(data)
        })
    })
})

server.listen(9000, () => {
    console.log('http://localhost:9000');
})
