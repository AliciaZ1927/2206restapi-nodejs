import { Router } from "express";
import { createVacuumcleaner, deleteVacuumcleaner, getVacuumcleaners, updateVacuumcleaner, getVacuumcleaner } from "../controllers/Vacuumcleaners.controller.js";

const router = Router();

router.get("/api/vacuumcleaners", getVacuumcleaners);
router.post("/api/vacuumcleaners", createVacuumcleaner);
router.put("/api/vacuumcleaners/:id", updateVacuumcleaner);
router.delete("/api/vacuumcleaners/:id", deleteVacuumcleaner);
router.get("/api/vacuumcleaners/:id", getVacuumcleaner);




export default router;