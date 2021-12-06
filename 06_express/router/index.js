const express = require('express')
const router = express.Router()
const { list } = require('../controller')

router.get('/api/list', list)
/* //1.get获取数据
router.get('/index', list)
//2.post添加数据
router.post('/index', (req, res, next) => {
    const data = req.body //需要在server.js 使用body-parser才能接受到参数
    res.send(data)
})
//3.put修改数据-覆盖式修改
router.put('/index', (req, res, next) => {
    res.send('put response')
})
//4.patch修改数据-增量修改
router.patch('/index', (req, res, next) => {
    res.send('patch response')
})
//5.delete删除数据
router.delete('/index', (req, res, next) => {
    res.send('delete response')
}) */
module.exports = router