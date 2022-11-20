var mysql = require('mysql2');
var connection = mysql.createConnection({
    host: 'dbrds1.cjb5vrcyxql7.ap-southeast-1.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'tG078568',
    database: 'projectdb'
});

connection.connect(err => {
    if(err) throw err;
    console.log('Connected To AWS DB');
});

module.exports = connection;