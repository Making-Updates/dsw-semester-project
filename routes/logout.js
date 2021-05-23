var express = require('express');
var router = express.Router();

/* GET logout page. */
// destroy the session and redirect the users to the login page
router.get('/logout', function (req, res) {
    req.session.destroy();
    res.redirect('/login');
});

module.exports = router;
