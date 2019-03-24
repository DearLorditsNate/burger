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
    insertOne: function() {
    },
    updateOne: function() {

    }
}

module.exports = orm;