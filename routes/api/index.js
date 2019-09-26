const express = require("express");
const mongoose = require("mongoose");

const axios = require("axios");
const cheerio = require("cheerio");
const db = require("../../models");


module.exports = function(app){

app.get("/scrape", function(req, res){
    axios.get("https://www.forbes.com/forbeswomen/#746ad66621ee").then(function(response){
        
    var $ = cheerio.load(response.data);

    $("article h2").each(function(i, element){

        var result = {};

        result.title = $(this)
            .children("a")
            .text();

        result.link = $(this)
            .children("a")
            .attr("href");

        db.Article.create(result).then(function(dbArticle){
            console.log(dbArticle);
        }).catch(function(err){
            console.log
            (err);
        });

        
    });


    });
});

};
