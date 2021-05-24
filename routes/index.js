var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  //if (req.session.loggedinUser != true) res.redirect('/login');
  res.render('index', { emailAddress: req.session.emailAddress });
});

module.exports = router;
