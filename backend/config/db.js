const mongoose = require("mongoose");

// connect MongoDB
const connectDB = async () => {
    await mongoose.connect('mongodb://localhost/produitsLocaux');
    console.log(`MongoDB produitsLocaux Connected`);
  };
  
  module.exports = connectDB;