const http = require('http')
const { createProxyMiddleware } = require('http-proxy-middleware')

http.createServer((req, res) => {
    let url = req.url

    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*'
    })

    if (/^\/api/.test(url)) {
        let apiProxy = createProxyMiddleware('/api', {
            target: 'http://www.pdoro.com/wp-json/b2/v1/getOauthLink',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        })

        // http-proy-middleware 在Node.js中使用的方法
        apiProxy(req, res)
    } else {
        switch (url) {
            case '/index.html':
                res.end('index.html')
                break
            case '/search.html':
                res.end('search.html')
                break
            default:
                res.end('[404]page not found.')
        }
    }
}).listen(8080)