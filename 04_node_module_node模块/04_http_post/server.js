const http = require('http')
const postDate = new URLSearchParams({
    username: 'ljj',
    passowrd: 'admin',
    age: 18,
    gender: '男',
})

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        'content-type': 'application/json'
    })
    response.write(postDate.toString())
    response.end()
})

server.listen(9000, () => {
    console.log('http://localhost:9000');
})