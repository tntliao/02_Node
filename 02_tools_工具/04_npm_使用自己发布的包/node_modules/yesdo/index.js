const axios = require('axios')

const reqLiao = function () {
    const result = axios.get('http://tntliao.3vdo.net/#/login')
        .then(response => {
            return response
        })
        .catch(err => {
            return err
        })
    return result
}

const reqBaidu = function () {
    const result = axios.get('https://fanyi.baidu.com/#en/zh/cath')
        .then(response => {
            return response
        })
        .catch(err => {
            return err
        })
    return result
}

/* async function fn1() {
    const result = await reqBaidu()
    console.log(result)
}
fn1() */

exports.reqLiao = reqLiao
exports.reqLiao = reqBaidu