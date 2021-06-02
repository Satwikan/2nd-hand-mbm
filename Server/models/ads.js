const mongoose = require("mongoose");

const {ObjectId} = mongoose.Schema;


const Ad = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      // required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      // required: true,
    },
    user:{
      type: ObjectId,
      ref: "User",
      require: true
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);



module.exports = mongoose.model("AdS", Ad);