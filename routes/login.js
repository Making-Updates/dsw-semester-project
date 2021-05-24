var express = require('express');
var router = express.Router();
var db = require('../database');

/* GET login page. */
//assign action the value of login in the login.ejs file
router.get('/', function (req, res, next) {
    var msg = req.query.msg;
    if (msg) {
        res.render('login', { alertMsg: msg });
    }
    else {
        res.render('login', { alertMsg: "" });
    }

});

router.post('/', function (req, res) {
    var emailAddress = req.body.email;
    var password = req.body.password;

    //check if the user input match the values in the database
    var sql = 'SELECT * FROM logins WHERE email =? AND password =?';
    db.query(sql, [emailAddress, password], function (err, data, fields) {
        if (err) throw err
        if (data.length > 0) {
            req.session.loggedinUser = true;
            req.session.emailAddress = emailAddress;
            res.redirect('/')
        } else {
            res.render('login', { alertMsg: "Invalid login detail" })
        }
    })
})

module.exports = router;
