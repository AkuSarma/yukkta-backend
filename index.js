import express, { json } from "express";
import { config } from "dotenv";
import userRoutes from "./routes/user.routes.js";
import medicineOrderRoutes from "./routes/medicineOrder.routes.js";
import requestConsultationRoutes from "./routes/requestConsultation.routes.js";
import pool from "./config/db.config.js";

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
// user
app.use("/api/auth", userRoutes);
// medicine order
app.use("/api/medicine-order", medicineOrderRoutes);
// consultation requests
app.use("/api/consultation", requestConsultationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
