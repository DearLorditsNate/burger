/*
================================
Dependences
================================
*/

// Connection
var connection = require("./connection.js");

// Define query methods
var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, burger_name, cb) {
        var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?, ?);";
        connection.query(queryString, [table, burger_name, false], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function() {

    }
}

module.exports = orm;