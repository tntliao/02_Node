const crypto = require('crypto')

const password = 'admin12#sda0-;;7w1`/[=,12SAD00LOSAD274320241SADASsad-ASWE9KKWQrr345'

const hash = crypto
    .createHash('SHA224') //加密算法
    .update(password) //数据
    .digest('hex') // 以16进制方式
console.log(hash)

