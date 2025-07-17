const mongoose = require('mongoose');

const MONGO_URL = 'mongodb://localhost:27017/sweetshop'; 

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('MongoDB connected !!');
  } catch (error) {
    console.error('MongoDB connection error :', error);
    process.exit(1);
  }
};

module.exports = connectDB;