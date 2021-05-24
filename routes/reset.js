var express = require('express');
var router = express.Router();
var db = require('../database');

/* GET reset password page. */
//label form action "reset_page"
router.get('/', function (req, res) {
    res.render('reset', { alertMsg: "" });
});

router.post('/', function (req, res) {
    if (req.body.password !== req.body.confirm_password) {
        res.render('reset', { alertMsg: "Passwords do not match. Please try again." });
    } else {
        // store user information into the database
        var sql = 'UPDATE logins SET password = ? where email= req.body.email';
        db.query(sql, req.body.password, function (err, data) {
            if (err) throw err;
        });
        var msg = "You have successfully changed your password, please login";
        res.redirect('/login', { alertMsg: msg });
    }
})

module.exports = router;