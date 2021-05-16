const express = require("express");
const sell = express.Router();
const Ads = require("../models/Ads");

sell.use(express.json());

sell.post("/", async (req, res, next) => {
  try {
    console.log("Received Body:\n", req.body);
    const ad = await Ads.create(req.body);
    console.log("Ad Created:", ad);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(ad);
  } catch (err) {
    next(err);
    console.log("Error:\n", err);
  }
});

module.exports = sell;
