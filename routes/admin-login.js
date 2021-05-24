var express = require('express');
var router = express.Router();
var db = require('../database');

/* GET login page. */
//assign action the value of admin-login in the admin-login.ejs file
router.get('/', function (req, res, next) {
    res.render('admin-login', { alertMsg: "" });
});

router.post('/', function (req, res) {
    var emailAdress = req.body.email;
    var password = req.body.password;

    //check if the user input match the values in the database
    var sql = 'SELECT * FROM admin WHERE email =? AND password =?';
    db.query(sql, [emailAdress, password], function (err, data, fields) {
        if (err) throw err
        if (data.length > 0) {
            req.session.loggedinUser = true;
            req.session.admin = true;
            req.session.emailAdress = emailAdress;
            res.redirect('/admin')
        } else {
            res.render('admin-login', { alertMsg: "Invalid login detail" })
        }
    })
})

module.exports = router;
