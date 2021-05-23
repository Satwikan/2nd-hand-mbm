const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-currency").loadType(mongoose);
const Currency = mongoose.Types.Currency;

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
    category:{
      type:String,
      required:true,
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

var Ads = mongoose.model("Ad", Ad);

module.exports = Ads;