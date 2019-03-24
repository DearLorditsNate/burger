var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObj = {
            burgers: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create(req.body.name, function(data) {
        console.log(data);
        res.json(data);
    });
});

router.put("/api/burgers/:id", function(req, res) {
    console.log(req.params.id);
    // burger.update(req.params.id, function(data) {
    //     console.log(data);
    //     res.json(data);
    // });
    res.send("something");
});

module.exports = router;