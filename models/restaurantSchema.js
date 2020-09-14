const mongoose = require("mongoose");
const { string } = require("joi");
const Schema = mongoose.Schema;

//Create Schema
const ResaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = Restaurant = mongoose.model("restaurant", ResaurantSchema);
