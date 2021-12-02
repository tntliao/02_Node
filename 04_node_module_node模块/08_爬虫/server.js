const http = require('http')
const https = require('https')
const cheerio = require('cheerio')
const logger = require('../debug')

function filterData(data) {
    const $ = cheerio.load(data)
    const imgNode = $('.section-box-adv .box-adv-ad .lazy-img')[0]
    const imgLink = $(imgNode).attr('data-src')
    logger.debug(imgLink)
}

http.createServer((request, response) => {
    let data = ''
    https.get('https://www.meizu.com/', result => {
        result.on('data', (chunk) => {
            data += chunk
        })

        result.on('end', () => {
            filterData(data)
        })
    })
    response.end()
}).listen(9000)