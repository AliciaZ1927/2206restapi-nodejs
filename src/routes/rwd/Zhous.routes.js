import { Router } from "express";
import { createZhou, deleteZhou, getZhous, updateZhou, getZhou } from "../../controllers/rwd/Zhous.controller.js";

const router = Router();

router.get("/api/zhous", getZhous);
router.post("/api/zhous", createZhou);
router.put("/api/zhous/:id", updateZhou);
router.delete("/api/zhous/:id", deleteZhou);
router.get("/api/zhous/:id", getZhou);




export default router;