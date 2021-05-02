var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dsw-semester-project',
    multipleStatements: true
});
connection.connect(function (err) {
    if (err) throw err;
    console.log('Database connected successfully !');
});
module.exports = connection;