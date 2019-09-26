const path = require("path");
var router = require("express").Router();
var db = require("../../models")

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/html/main.html"))
    // res.send("hello")
});

router.get("/saved", function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/html/saved.html"))
});


module.exports = router
