const mongoose = require("mongoose");

const URL = "mongodb+srv://mongoFred:sephiroth@yelp0-ygxqr.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async() => {
  await mongoose.connect(
    URL,
    { useUnifiedTopology: true, useNewUrlParser: true  }
    );
  console.log('db connected..');
}

module.exports = connectDB;