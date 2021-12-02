const http = require('http')
const path = require('path')
const readStaticFile = require('./readStaticFile')

const server = http.createServer((request, response) => {
    const url = request.url
    let filePathName = path.join(__dirname, './public', url)
    readStaticFile(response, filePathName)

})

server.listen(9000)