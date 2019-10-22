const path = require("path");
var router = require("express").Router();
var db = require("../../models")
const axios = require("axios");
const cheerio = require("cheerio");

router.get("/", function (req, res) {
    console.log("inside home")
    res.sendFile(path.join(__dirname, "../../public/html/main.html"))
    // res.send("hello")
});

router.get("/main.html", function (req, res) {
    console.log("inside home2")
    res.sendFile(path.join(__dirname, "../../public/html/main.html"))
    // res.send("hello")
});


// router.get("/scrape", function (req, res) {
//     console.log("inside scrape2")
    // res.sendFile(path.join(__dirname, "../../public/html/scrape.html"))
    router.get("/scrape", (function (req, res) {
        console.log("Inside Scrape1");
        axios.get("https://www.forbes.com/forbeswomen/#351c98f2621e").then(function (response, err) {
            console.log("SCRAPED ARTICLES HERE ------------------" + response.data);
            // console.log(response.data);
            if(err){
                console.log(err);
                
            }
            var $ = cheerio.load(response.data);
            console.log("LOADED")

            var results = [];

            $("article.stream-item").each(function (i, element) {

                // const link = $(element).attr("href");
                const link = $($(element).find("a.href")[0]);
                console.log("HREF FOUND");
                const title = $($(element).find("a.stream-item_title")[0]);
                console.log("TITLE FOUND");
                const summary = $($(element).attr("stream-item_description"));
                console.log("SUMMARY FOUND")
                
                .then(function(results){
                    
                    results.push({
                    link: link,
                    title: title,
                    summary: summary
                });
            })
                console.log(results);

                db.Article.create(results).then(function (dbArticle) {

                }).catch(function (err) {
                    console.log(err)
                    return res.json(err);
                });


            });

        });

        res.json(dbArticle);
    }))


router.get("/saved.html", function (req, res) {
    console.log("inside saved")
    res.sendFile(path.join(__dirname, "../../public/html/saved.html"))
});


module.exports = router
