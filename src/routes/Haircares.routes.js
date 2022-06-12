import { Router } from "express";
import { createHaircare, deleteHaircare, getHaircares, updateHaircare, getHaircare } from "../controllers/Haircares.controller.js";

const router = Router();

router.get("/api/haircares", getHaircares);
router.post("/api/haircares", createHaircare);
router.put("/api/haircares/:id", updateHaircare);
router.delete("/api/haircares/:id", deleteHaircare);
router.get("/api/haircares/:id", getHaircare);




export default router;