var express = require('express');
var router = express.Router();

/* GET home page. */
router.all('/*', function(req, res, next) {
  console.log("Request query parameters:");
  console.log(req.query);
  console.log("Request headers:");
  console.log(req.headers);
  console.log("Request body:");
  console.log(req.body);
  res.render('index', { title: 'Express' });
});

module.exports = router;
