import express, { json } from "express";
import { config } from "dotenv";
import userRoutes from "./routes/user.routes";
import pool from "./config/db.config";

config();

const app = express();

// Middleware
app.use(json());

// Test DB connection
pool.connect((err) => {
  if (err) {
    console.error('Database connection error', err.stack);
  } else {
    console.log('Database connected');
  }
});

// Routes
app.use("/api/auth", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
