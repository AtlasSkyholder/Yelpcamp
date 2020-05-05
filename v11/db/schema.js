const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Schema
const CampsSchema = new Schema({
  name: String,
  image: String,
  description: String
});

// Model
const Camps = mongoose.model('Camps', CampsSchema);

module.exports = Camps;