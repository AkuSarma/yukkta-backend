import pkg from "pg";
const { Pool } = pkg;
import { config } from "dotenv";

config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const createUsersTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      age INT NOT NULL,
      gender VARCHAR(50) NOT NULL,
      phone_number VARCHAR(50) NOT NULL,
      university_enrollment_id VARCHAR(255) NOT NULL,
      pg_address TEXT NOT NULL
    );
  `;
  try {
    await pool.query(query);
    console.log("Users table created or already exists.");
  } catch (err) {
    console.error("Error creating users table:", err);
  }
};

const createPrescriptionsTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS prescriptions (
      id SERIAL PRIMARY KEY,
      user_id INT REFERENCES users(id),
      file_name VARCHAR(255) NOT NULL,
      file_path TEXT NOT NULL,
      upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  try {
    await pool.query(query);
    console.log("Prescriptions table created or already exists.");
  } catch (err) {
    console.error("Error creating prescriptions table:", err);
  }
};

createUsersTable();
createPrescriptionsTable();

export default pool;
