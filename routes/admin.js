var express = require('express');
var router = express.Router();

/* GET admin page. */
router.get('/', function (req, res, next) {
    //if (req.session.loggedinUser != true $$ req.session.admin != true) res.redirect('/login');
    res.render('admin', { emailAddress: req.session.emailAdress });
});

module.exports = router;
