let express = require('express');
let router = express.Router();
let db = require('../database');

router.get('/', async function (req, res, next) {
    let sqlPerson = 'SELECT * FROM persons';
    let sqlShelter = 'SELECT * FROM shelters';

    db.query(sqlPerson + ';' + sqlShelter, function (err, results) {
        if (err) throw err;
        res.render('map', { people: results[0], shelter: results[1] })
    });
});

router.post('/', function (req, res) {

    if (req.body.formType == "people") {
        let splitLatLng = req.body.latlngInputHP.split(',')
        let inputData = {
            longitude: splitLatLng[1],
            latitude: splitLatLng[0],
            peopleCount: req.body.peopleCountHP,
        }

        let sql = 'INSERT INTO persons SET ?';
        db.query(sql, inputData, function (err, data) {
            if (err) throw err;
        });

    } else {
        let splitLatLng = req.body.latlngInputHS.split(',')
        let inputData = {
            longitude: splitLatLng[1],
            latitude: splitLatLng[0],
            shelterName: req.body.shelterNameHS,
        }

        let sql = 'INSERT INTO shelters SET ?';
        db.query(sql, inputData, function (err, data) {
            if (err) throw err;
        });
    }
    res.redirect('map');
})


module.exports = router;
