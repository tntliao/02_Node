const express = require('express')
const app = express()

// 回调函数又称中间件，把回头函数放入数组一样可以使用
const middleWare =
    [
        (res, req, next) => {
            console.log(0, new Date())
            next()

        },
        (res, req, next) => {
            console.log(1, new Date())
            next()
        },
        (res, req, next) => {
            console.log(2, new Date())
            next()
        },
    ]

app.use('/', middleWare)
app.use('/api', (req, res, next) => {
    res.send('<h1>Hello</h1>')
})

app.listen(9000, () => {
    console.log('http://localhost:9000')
})