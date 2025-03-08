const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log("MongoDB URI:","mongodb://localhost:27017/blog_platform"); // Debugging

    const conn = await mongoose.connect("mongodb://localhost:27017/blog_platform", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
