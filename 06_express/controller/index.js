const template = require('art-template')
const fs = require('fs')
const path = require('path')
const listData = require('../model')

function list(req, res, next) {
    // 1.不使用模板
    /* const data = {
        code: 0,
        list: []
    }
    for (let i = 0; i < 100; i++) {
        data.list.push('list' + i)
    }
    res.send(data) */

    // 2.使用模板
    /* let dataArr = []
    for (let i = 0; i < 100; i++) {
        dataArr.push(`line${i}`)
    }
    res.header('content-type', 'application/json')
    // console.log(dataArr);
    res.render('list.art', {
        data: JSON.stringify(dataArr)
    }) */

    // 3.后端渲染前端模板
    /* let dataArr = []
    for (let i = 0; i < 100; i++) {
        dataArr.push(`line${i}`)
    } */
    /*res.render('list_html', {
        data: dataArr
    }) */

    const html = template(path.resolve(__dirname, '../view/list_html.art'), {
        data: listData
    })
    fs.writeFile(path.resolve(__dirname, '../public/list.html'), html, (err) => {
        if (err) throw err
    })
    res.send('ok.')
}
exports.list = list