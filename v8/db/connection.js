const mongoose = require("mongoose");

const URL = process.env.MONGO_DB_URL;

const connectDB = async() => {
  await mongoose.connect(
    URL,
    { useUnifiedTopology: true, useNewUrlParser: true  }
    );
  console.log('db connected..');
}

module.exports = connectDB;