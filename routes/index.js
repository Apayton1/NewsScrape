var router = require("express").Router();

var apiRoutes = require("./scrape");
var htmlRoutes = require("./html");

router.use("/scrape", apiRoutes);
router.use("/", htmlRoutes);

module.exports = router