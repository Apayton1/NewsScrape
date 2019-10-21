// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
// var mongoConnectionString = "mongodb://user1:password1@ds151486.mlab.com:51486/heroku_sgxx9tv6";
// var mongoConnectionString = "mongodb://heroku_sgxx9tv6:lbod07pqq8e0rthvssq0jee8q0@ds151486.mlab.com:51486/heroku_sgxx9tv6";
require('dotenv').config();
var mongoose = require("mongoose");
var express = require("express");
var request = require("request");
var mongojs = require("mongojs");
var path = require("path");
var cheerio = require("cheerio");
const bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

var routes = require("./routes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, './public')));

app.use(routes)

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://heroku_lwh2rnl4:a0qf0tdu5r50eqah6loim9qfrs@ds137498.mlab.com:37498/heroku_lwh2rnl4";

mongoose.connect(MONGODB_URI);

app.listen(PORT, function(){
    console.log(
        "listening on" + PORT
    )
});

// var express = require("express");
// var mongoose = require("mongoose");
// var exphbs = require("express-handlebars");

// // Set up our port to be either the host's designated port, or 3000
// var PORT = process.env.PORT || 3001;

// // Instantiate our Express App
// var app = express();

// // Require our routes
// var routes = require("./routes");

// // Parse request body as JSON
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Make public a static folder
// app.use(express.static("public"));

// // Connect Handlebars to our Express app
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// // Have every request go through our route middleware
// app.use(routes);
// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "../public/html/main.html"))
// //   res.send("hello")
// });
// // If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// // Connect to the Mongo DB
// mongoose.connect(MONGODB_URI);

// // Listen on the port
// app.listen(PORT, function() {
//   console.log("Listening on port: " + PORT);
// });