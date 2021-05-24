var express = require('express');
var router = express.Router();

/* GET info page. */
router.get('/', function (req, res, next) {
    //if (req.session.loggedinUser != true) res.redirect('/login');
    res.render('info', { emailAddress: req.session.emailAdress });
});

module.exports = router;
