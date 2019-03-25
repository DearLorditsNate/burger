// Dependencies
var mysql = require("mysql");
require("dotenv").config();
var keys = require("../keys.js");

// Define connection
var connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: keys.mysql.password,
        database: "burgers_db"
    });
}

// Create connection
connection.connect(function (err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;