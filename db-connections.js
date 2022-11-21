var mysql = require('mysql2');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'cdev',
    database: 'projectdb'
});

connection.connect(err => {
    if(err) throw err;
    console.log('Connected To DB');
});

module.exports = connection;