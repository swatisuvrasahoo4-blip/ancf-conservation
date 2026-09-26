import mongoose from "mongoose";

// Connect to MongoDB
const connectDB = async () => {
  try {
    const url = process.env.MONGO_URL;

    // Check MongoDB connection string
    if (!url) {
      throw new Error(
        "MONGO_URL is missing from your .env file."
      );
    }

    // Connect to MongoDB
    await mongoose.connect(url);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error(
      "MongoDB connection failed:",
      error.message
    );

    process.exit(1);
  }
};

export default connectDB;