import dns from "node:dns/promises";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import connectDB from "./src/db/db.js";
import authRoutes from "./src/routes/userRoutes.js";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Connect to MongoDB
connectDB();

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});