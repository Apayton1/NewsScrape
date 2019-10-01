const express = require("express");
const mongoose = require("mongoose");
const request = require("request");
var router = require("express").Router();

const axios = require("axios");
const cheerio = require("cheerio");
const db = require("../../models");


    router.get("/all", function (req, res) {
        console.log("Inside All");
        db.Article.find({}, (function (error, found) {
            if (error) {
                console.log(error);
            }

            else {
                console.log("1")
                res.json(found);
            }
        }))
    });

    // router.get("/scrape", (function (req, res) {
    //     console.log("Inside Scrape1");
    //     axios.get("https://www.forbes.com/forbeswomen/#351c98f2621e").then(function (response) {
    //         console.log("2")
    //         var $ = cheerio.load(response.data);

    //         var results = [];

    //         $("article.stream-item").each(function (i, element) {

    //             const link = $(element).attr("href");
    //             const title = $(element).attr("a.stream-item_title");
    //             const summary = $(element).find("a.stream-item_description");
    //             results.push({
    //                 link: link,
    //                 title: title,
    //                 summary: summary
    //             });


    //             db.Article.create(results).then(function (dbArticle) {

    //             }).catch(function (err) {
    //                 console.log(err)
    //                 return res.json(err);
    //             });


    //         });

    //     });

    //     res.send("Scrape Complete");
    // }));
    module.exports  = router