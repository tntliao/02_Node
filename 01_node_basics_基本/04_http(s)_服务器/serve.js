const http = require('http')

//1.开启一个服务
const server = http.createServer((request, response) => {
    let url = request.url
    response.write(url)
    response.end()
})

server.listen(8888, () => {
    console.log('http://localhost:8888');
})