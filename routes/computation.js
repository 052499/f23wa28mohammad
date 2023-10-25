var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.query.x === undefined){
    x = Math.random().toFixed(3);
  }
  else{
    x = req.query.x;
  }
  var exp = Math.exp(x).toFixed(3);
  res.send(`expression applied to ${x} is ${exp}`);
});

module.exports = router;