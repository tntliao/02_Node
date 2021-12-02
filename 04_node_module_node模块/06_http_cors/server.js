const http = require('http')

const server = http.createServer((request, response) => {
    const url = request.url
    switch (url) {
        case "/api/data":
            response.writeHead(200, {
                'content-type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
            response.write('{"name":"ljj","age":18}')
            break;
        default:
            response.write('page not found')
    }
    response.end()
})

server.listen(9000, () => {
    console.log('http://localhost:9000');
})