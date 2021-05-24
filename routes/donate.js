var express = require('express');
var router = express.Router();

/* GET donate page. */
router.get('/', function (req, res, next) {
    //if (req.session.loggedinUser != true) res.redirect('/login');
    res.render('donate', { emailAddress: req.session.emailAdress });
});

module.exports = router;
