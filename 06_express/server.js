const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const router = require('./router')

// view engine setup
app.engine('art', require('express-art-template'))
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production',
    escape: false
})
app.set('views', path.join(__dirname, 'view'))
app.set('view engine', 'art')


app.use(bodyParser.urlencoded({ extended: false })) //接收表单格式的post请求
app.use(bodyParser.json()) //接收json格式的post请求
app.use(express.static('./public'))
app.use('/', router)

app.listen(9000)
