const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/auth");
const fs = require("fs");
require("dotenv").config();
const config = require("./config");

//app

const app = express();

const connect = mongoose.connect(config.mongoUri, {
  useFindAndModify: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
connect.then(
  (db) => {
    console.log("database is connected 🏢");
  },
  (err) => {
    console.log(err);
  }
);

// middleware

app.use(morgan("dev"));
app.use(express.json({ limit: "2mb" }));
app.use(cors());

// route middlerware update all route line by line
// app.use('/api', router)
fs.readdirSync("./routes").map((r) =>
  app.use("/api", require("./routes/" + r))
);

//port

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("server is running on port 8000");
});
