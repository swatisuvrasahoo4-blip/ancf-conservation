import mongoose from "mongoose";

// Connect to MongoDB
const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;

    // Check MongoDB connection string
    if (!uri) {
      throw new Error(
        "MONGO_URI is missing from your .env file."
      );
    }

    // Connect to MongoDB
    await mongoose.connect(uri);

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