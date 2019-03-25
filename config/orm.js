// Dependencies
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
        var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?);";
        connection.query(queryString, [table, "burger_name", "devoured", burger_name, false], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (table, id, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?;";
        connection.query(queryString, [table, "devoured", true, "id", id], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;