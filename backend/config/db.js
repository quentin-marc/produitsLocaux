const mongoose = require("mongoose");

// connect MongoDB
const connectDB = async () => {
    console.log(`Connection to mongoDB...`);
    await mongoose.connect('mongodb://127.0.0.1/produitsLocaux');
    console.log(`MongoDB produitsLocaux Connected`);
  };
  
  module.exports = connectDB;