const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.URI);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Failed to connect to MongoDB', error);
      process.exit(1);
    }
};

module.exports = connectDB;