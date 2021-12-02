const http = require('http')
const { createProxyMiddleware } = require('http-proxy-middleware')
http.createServer((request, response) => {

    const url = request.url
    if (/^\/dy/.test(url)) {
        createProxyMiddleware('/dy', {
            target: 'http://www.pdoro.com/wp-json/b2/v1/getOauthLink',
            changeOrigin: true,
            /* pathRewrite: {
                '^/api': ''
            } */
        })
    } else {
        response.write('<h1>page not found.</h1>')
    }
    response.end()
}).listen(9000)