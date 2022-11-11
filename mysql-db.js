var mysql = require('mysql');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3308,
	user: "root",
	password: "2794",
	database: "sonyo"
});

module.exports = connection;
