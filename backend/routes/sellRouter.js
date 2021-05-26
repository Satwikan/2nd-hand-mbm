const express = require("express");
const sell = express.Router();
const Ads = require("../models/Ads");
const fs = require("fs");
const authenticate = require("../authenticate");
const path = require("path");

var multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.images + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });

sell.use(express.json());

sell.post(
  "/",
  authenticate.verifyUser,
  // upload.single("image"),
  async (req, res, next) => {
    try {
      // var obj = {
      //   ...req.body,
      //   img: {
      //     data: fs.readFileSync(
      //       path.join(__dirname + "/uploads/" + req.files.fieldname)
      //     ),
      //     contentType: "image/png",
      //   },
      // };
      // Ads.create(obj, (err, item) => {
      //   if (err) {
      //     console.log(err);
      //   } else {
      //     // item.save();
      //     res.redirect("/");
      //   }
      // });

      console.log("Received Body:\n", req.body);

      // TODO: add multer to upload images
      // all images are received in req.files.images
      // console.log("📷 received: ", req.files.images);

      const ad = await Ads.create(req.body);
      console.log("Ad Created:", ad);
      res.redirect("http://localhost:3000/");
    } catch (err) {
      next(err);
      console.log("Error:\n", err);
    }
  }
);

module.exports = sell;
