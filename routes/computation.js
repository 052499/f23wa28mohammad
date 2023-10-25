var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  x=0
if(req.query.x === undefined){
  x = Math.random(7);
}else{
  x = req.query.x;
  }
exp = math.exp(x);
   

  // Prepare the response string
 

  res.send("expression applied to " + x + "is" + exp);
});``

module.exports = router;
