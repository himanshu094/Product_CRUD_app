var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/productinterface', function(req, res, next) {
  res.render('productinterface.ejs', { title: 'Express' });
});

module.exports = router;
