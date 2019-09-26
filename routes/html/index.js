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


router.get("/new", function(req, res){
    db.Note.create({body:"test", article:2}).then(function(data){
        console.log(data)
        res.json(data);
    })
})

module.exports = router
