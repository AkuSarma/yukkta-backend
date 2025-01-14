import { Router } from 'express';
const router = Router();
import { uploadPrescription, checkPrescriptions } from '../controllers/medicineOrder.controller.js';


// Route for user to upload prescription
router.post('/upload-prescription', uploadPrescription);

// Route for admin to check uploaded prescriptions
router.get('/check-prescriptions', checkPrescriptions);

export default router;
