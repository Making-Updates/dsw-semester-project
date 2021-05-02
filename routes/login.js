var express = require('express');
var router = express.Router();
var db = require('../database');

/* GET login page. */
//assign action the value of login in the login.ejs file
router.get('/login', function (req, res, next) {
    res.render('login');
});

router.post('/login', function(req, res) {
    var emailAdress = req.body.email;
    var password = req.body.password;

    //check if the user input match the values in the database
    var sql = 'SELECT * FROM logins WHERE email =? AND password =?';
    db.query(sql, [emailAdress, password], function (err, data, fields) {
        if(err) throw err 
        if(data.length > 0){
            req.session.loggedinUser = true;
            req.session.emailAdress = emailAdress;
            res.redirect('../views/index')
        }else{
            res.render('../views/login',{alertMsg:"Invalid login detail"})
        }
    })
})

module.exports = router;
