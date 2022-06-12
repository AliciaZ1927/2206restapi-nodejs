import { Router } from "express";
import { createAirtreatment, deleteAirtreatment, getAirtreatments, updateAirtreatment, getAirtreatment } from "../controllers/Airtreatments.controller.js";

const router = Router();

router.get("/api/airtreatments", getAirtreatments);
router.post("/api/airtreatments", createAirtreatment);
router.put("/api/airtreatments/:id", updateAirtreatment);
router.delete("/api/airtreatments/:id", deleteAirtreatment);
router.get("/api/airtreatments/:id", getAirtreatment);




export default router;