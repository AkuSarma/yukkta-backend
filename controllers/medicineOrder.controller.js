import pool from "../config/db.config.js";

// Method to handle prescription upload by user
export function uploadPrescription(req, res) {
    const { userId } = req.body;
    const file = req.file; // Assuming you're using a middleware like multer to handle file uploads

    if (!file) {
        return res.status(400).send({ message: "No file uploaded" });
    }

    const query = `
        INSERT INTO prescriptions (user_id, file_name, file_path, upload_date)
        VALUES ($1, $2, $3, NOW()) RETURNING *`;
    const values = [userId, file.originalname, file.path];

    pool.query(query, values)
        .then(result => {
            res.status(200).send({ message: "Prescription uploaded successfully", prescription: result.rows[0] });
        })
        .catch(err => {
            res.status(500).send({ error: err.message });
        });
}

// Method to handle prescription checking by admin
export function checkPrescriptions(req, res) {
    const query = `SELECT * FROM prescriptions`;

    pool.query(query)
        .then(result => {
            res.status(200).send({ prescriptions: result.rows });
        })
        .catch(err => {
            res.status(500).send({ error: err.message });
        });
}

