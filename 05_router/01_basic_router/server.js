const http = require('http')
const fs = require('fs')
const mime = require('mime')

const server = http.createServer((request, response) => {
    const url = request.url

    /*  switch (url) {
         case '/':
             response.end('<h1>welcome</h1>')
             break
         case '/home':
             fs.readFile('./home.html', (err, data) => {
                 if (err) throw err
                 response.end(data)
             })
             break
         case '/1.jpg':
             fs.readFile('./1.jpg', (err, data) => {
                 if (err) throw err
                 response.end(data)
             })
             break
         default:
             response.end('<h1>page not found</h1>')
     } */

    const file = fs.readFileSync('.' + url)
    const type = mime.getType(url.split('.')[1])
    response.writeHead(200, {
        'content-type': type
    })
    response.end(file)
})

server.listen(9000)