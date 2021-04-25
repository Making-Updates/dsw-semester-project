var express = require('express');
var router = express.Router();

/* GET login page. */
//label form action "logout"
router.get('/logout', function (req, res) {
    req.session.destroy();
    res.send('logout');
});

module.exports = router;
