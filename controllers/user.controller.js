import pool from "../config/db.config.js";
import { hash, compare } from "bcrypt";
import pkg from "jsonwebtoken";
const { sign } = pkg;

export const register = async (req, res) => {
  const { email, password, name, age, gender, phoneNumber, universityEnrollmentId, pgAddress } = req.body;
  try {
    const hashedPassword = await hash(password, 10);
    const query = `
      INSERT INTO users (email, password, name, age, gender, phone_number, university_enrollment_id, pg_address)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`;
    const values = [email, hashedPassword, name, age, gender, phoneNumber, universityEnrollmentId, pgAddress];
    const result = await pool.query(query, values);
    res.status(201).json({ user: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const query = `SELECT * FROM users WHERE email = $1`;
    const result = await pool.query(query, [email]);
    const user = result.rows[0];
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const isMatch = await compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    const token = sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
