var express = require("express");
var sell = express.Router();

sell.use(express.json());
/* GET users listing. */
sell.post("/", (req, res, next) => {
  console.log(req.body)
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(req.body);
});

module.exports = sell;
