const http = require('http')
const logger = require('../debug')

const server = http.createServer((request, response) => {
    logger.debug(request)

    const url = new URL(request.url, "http://localhost:9000")
    switch (url.pathname) {
        case '/api/data':
            response.write(`${url.searchParams.get("cb")}('2021-11-29')`)
            break;
        default:
            response.write('page not found')
    }

    response.end()
})

server.listen(9000, () => {
    console.log('http://localhost:9000')
})