var express = require('express');
var router = express.Router();
let db = require('../database');

/* GET admin page. */
router.get('/', function (req, res, next) {
    if (req.session.admin == undefined) res.redirect('/admin-login');
    if (req.session.loggedinUser != true && req.session.admin != true) res.redirect('/admin-login');
    var table = req.query.table;
    var id = req.query.id;
    if (table && id) {
        var query = 'DELETE FROM ' + table + ' WHERE id= ' + id + ';';
        db.query(query, function (err, results) {
            if (err) throw err;
        });
    }

    let sqlPerson = 'SELECT * FROM homeless_people';
    let sqlShelter = 'SELECT * FROM homeless_shelter';
    let sqlLogins = 'SELECT * FROM user_login';

    db.query(sqlPerson + ';' + sqlShelter + ';' + sqlLogins + ';', function (err, results) {
        if (err) throw err;
        res.render('admin', { people: results[0], shelter: results[1], logins: results[2], emailAddress: req.session.emailAddress })
    });
});

module.exports = router;
