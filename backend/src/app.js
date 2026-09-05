import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// Parse JSON request bodies
app.use(express.json());

// Authentication routes
app.use("/api/auth", userRoutes);

export default app;