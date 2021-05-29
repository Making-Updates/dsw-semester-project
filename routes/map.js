let express = require('express');
let router = express.Router();
let db = require('../database');

router.get('/', async function (req, res, next) {
    let sqlPerson = 'SELECT * FROM homeless_people';
    let sqlShelter = 'SELECT * FROM homeless_shelter';

    db.query(sqlPerson + ';' + sqlShelter, function (err, results) {
        if (err) throw err;
        if (req.session.loggedinUser != true) res.redirect('/login');
        res.render('map', { people: results[0], shelter: results[1], emailAddress: req.session.emailAddress })
    });
});

router.post('/', function (req, res) {

    if (req.body.formType == "people") {
        let splitLatLng = req.body.latlngInputHP.split(',')
        let inputData = {
            longitude: splitLatLng[1],
            latitude: splitLatLng[0],
            count: req.body.peopleCountHP,
        }

        let sql = 'INSERT INTO homeless_people SET ?';
        db.query(sql, inputData, function (err, data) {
            if (err) throw err;
        });

    } else {
        let splitLatLng = req.body.latlngInputHS.split(',')
        let inputData = {
            longitude: splitLatLng[1],
            latitude: splitLatLng[0],
            name: req.body.shelterNameHS,
        }

        let sql = 'INSERT INTO homeless_shelter SET ?';
        db.query(sql, inputData, function (err, data) {
            if (err) throw err;
        });
    }
    res.redirect('map');
})


module.exports = router;
