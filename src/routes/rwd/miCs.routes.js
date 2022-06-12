import { Router } from "express";
import { createmiC, deletemiC, getmiCs, updatemiC, getmiC } from "../../controllers/rwd/miCs.controller.js";

const router = Router();

router.get("/api/mics", getmiCs);
router.post("/api/mics", createmiC);
router.put("/api/mics/:id", updatemiC);
router.delete("/api/mics/:id", deletemiC);
router.get("/api/mics/:id", getmiC);

// router.get("/api/mics/:id/carts", getmiCUs);



export default router;