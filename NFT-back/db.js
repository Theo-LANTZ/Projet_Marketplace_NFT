var mysql = require('mysql');

var connection = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password: '',
    database: 'nftmp'
});
module.exports = connection;