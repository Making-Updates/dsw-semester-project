var express = require('express');
var router = express.Router();
var db = require('../database');

/* GET register page. */
// action in the registration form is named "registration"(Front-End)
router.get('/registration', function (req, res, next) {
    res.render('register');
});

// store user input on post request
router.post('/register', function(req, res, next) {
    inputData = {
        // should be uniform in the database and ejs form
        email: req.body.email,
        password: req.body.password,
        confirm_password: req.body.confirm_password
    }
// check if the email address is different from the others
var sql = 'SELECT * FROM logins WHERE email =?';
db.query(sql, [inputData.email], function(err, data, field) {
    if(err) throw err
    if(data.length > 1) {
        var msg = inputData.email+ "already exist";
    }else if(input.Data.confirm_password != inputData.password){
        var msg = "Password and confirm password do not match";
    }else{
        // store user information into the database
        var sql = 'INSERT INTO logins SET ?';
        db.query(sql, inputData, function (err, data){
            if  (err) throw err;
                    });
    var msg = "You have successfully registered";
    //res.redirect('../views/index');
    }
    // redirect the user to the homepage after registering
    res.redirect('../views/index', {alertMsg:msg});
})
})

module.exports = router;
