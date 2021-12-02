var express = require('express');
var router = express.Router();
const logger = require('../../debug')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/data', function (request, response, next) {
  logger.debug(request.body)
  response.send('ok')
})
module.exports = router;
