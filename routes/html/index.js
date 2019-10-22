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
        // console.log("SCRAPED ARTICLES HERE ------------------" + response.data);
        // console.log(response.data);
        if (err) {
            console.log(err);
            // return;
        }

        var $ = cheerio.load(response.data);
        console.log("LOADED")

        $("div.stream-item__text").each(function (i, element) {
            const myData = [];

            const link = $(element).find("a").attr("href");
            // console.log(myData.link);
            const title = $(element).find("a").text();
            // console.log(myData.title);
            // console.log("TITLE FOUND");
            const summary = $(element).find(".stream-item__description").text();
            // console.log($(element).find("stream-item__description"))

            myData.push({
                link: link,
                title: title,
                summary: summary
            });

            console.log(myData);

            console.log("this is my data", myData);
            db.Article.create(myData)
            .then(function( dbArticle ) {


                $("#articleTable").append(
                    '<tr>' + 
                      '<td>' + title + '</td>' + 
                      '<td>' + summary + '</td>' + 
                      '<td>' + link + '</td>' + 
                     
                    '</tr>'
                  );
                
            })
            .catch(function( err ) {
                console.log( err );
                // return res.json( err );
            });
            
            return myData;
        });
    });

    res.send("Scrape Complete2");
}))


router.get( "/all", function( req, res ) {
    console.log("Inside All");
    db.Article.find({}, (function (error, found) {
        if ( error ) {
            console.log( error );
        }

        else {
            console.log("inside all");
            
            // var foundObject = res.json( found );
            // console.log( "Found: " + found );
        }
    }))
});


router.get("/saved.html", function (req, res) {
    console.log("inside saved")
    res.sendFile(path.join(__dirname, "../../public/html/saved.html"))
});



module.exports = router;
