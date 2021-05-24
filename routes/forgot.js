var express = require('express');
var router = express.Router();
var db = require('../database');

//Flow
//User clicks Forgot password button in the Login page
//The user is presented with an email input form
//We check if user email exists in the database
//If it does not send an error message
//ELSE
//Present the user with new password input field
//If the new password input field is submitted empty, send an error
//ELSE store the new password in the DB
//Login the user

/* GET forgot password page. */
router.get('/', function (req, res, next) {
    res.render('forgot', { alertMsg: "" });
});
router.post('/', function (req, res) {
    //initiate the user email
    var emailAdress = req.body.email;
    //check if it exists in the DB
    var sql = 'SELECT * FROM logins WHERE email =?';
    db.query(sql, [emailAdress], function (err, data, fields) {
        if (err) throw err
        if (data.length > 0) {
            //redirect the user to the new password input field in the route reset password
            res.redirect('/reset')
        } else {
            res.render('forgot', { alertMsg: "Invalid email" })
        }
    })
})

module.exports = router;
