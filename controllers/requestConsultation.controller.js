import pool from "../config/db.config.js";

export const requestConsultation = async (req, res) => {
  const { userId, difficulty } = req.body;
  try {
    const query = "INSERT INTO consultations (user_id, difficulty) VALUES ($1, $2) RETURNING *";
    const values = [userId, difficulty];
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error requesting consultation:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getConsultationRequests = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM consultations");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching consultation requests:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
