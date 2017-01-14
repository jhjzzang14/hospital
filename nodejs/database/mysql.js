var mysql = require('promise-mysql');

var dbConnection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  port : 3306,
  password: 'ghwns89',
  database: 'hospital'
});

module.exports = dbConnection;
