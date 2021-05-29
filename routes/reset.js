var express = require('express');
var router = express.Router();
var db = require('../database');

/* GET reset password page. */
//label form action "reset_page"
router.get('/', function (req, res) {
    var msg = req.query.msg;
    if (msg) {
        res.render('reset', { alertMsg: msg });
    }
    else {
        res.render('reset', { alertMsg: "" });
    }
});

router.post('/', function (req, res) {
    if (req.body.password !== req.body.confirm_password) {
        res.render('reset', { alertMsg: "Passwords do not match. Please try again." });
    } else {
        // store user information into the database
        var sql = 'UPDATE user_login SET password = ?, confirm_password = ? where email=?';
        db.query(sql, [req.body.password, req.body.confirm_password, req.session.forgotEmail], function (err, data) {
            if (err) throw err;
            req.session.forgotEmail = '';
        });
        var msg = "You have successfully changed your password, please login";
        res.redirect('/login?msg=' + msg);
    }
})

module.exports = router;