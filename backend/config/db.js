const mongoose = require("mongoose");

// connect MongoDB
const connectDB = async () => {
    console.log(`Connection to mongoDB... ` + (process.env.DB_URL || 'mongodb://127.0.0.1/produitsLocaux'));
    await mongoose.connect(process.env.DB_URL || 'mongodb://127.0.0.1/produitsLocaux');
    console.log(`MongoDB produitsLocaux Connected`);
  };
  
  module.exports = connectDB;