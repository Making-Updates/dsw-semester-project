var express = require('express');
var router = express.Router();

/* GET donate page. */
router.get('/', function (req, res, next) {
    res.render('donate');
});

module.exports = router;
