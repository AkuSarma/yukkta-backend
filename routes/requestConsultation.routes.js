import { Router } from "express";
import { requestConsultation, getConsultationRequests } from "../controllers/requestConsultation.controller.js";

const router = Router();

// User route to request consultation
router.post("/user", requestConsultation);

// Admin route to get all consultation requests
router.get("/admin", getConsultationRequests);

export default router;
