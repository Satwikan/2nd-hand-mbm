var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/sell", function (req, res, next) {
  res.render("./index", { title: "Express" });
});

module.exports = router;
