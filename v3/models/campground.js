const mongoose = require("mongoose");

// SCHEMA SETUP
const campgroundSchema = mongoose.Schema({
  name:String,
  image:String,
  description: String
});

module.exports = mongoose.model("Camps", campgroundSchema);