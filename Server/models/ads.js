const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;


const Ad = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Currency,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);



module.exports = mongoose.model("Ad", Ad);