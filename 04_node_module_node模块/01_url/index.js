// 旧版url很多api已无法使用，需要参考node官网文档 http://nodejs.cn/api/url.html
const log4js = require("log4js")
log4js.configure({
    appenders: { cheese: { type: "file", filename: "cheese.log" } },
    categories: { default: { appenders: ["cheese"], level: "error" } }
})
const logger = log4js.getLogger("cheese")
logger.level = "debug";



// 1.解析网站链接
let result = new URL('https://www.hihonor.com/cn/products/laptops/magicbook-v-14-exclusive/')
logger.debug(result);
