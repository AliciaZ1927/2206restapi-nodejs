import { Router } from "express";
import { createmiU, deletemiU, getmiUs, updatemiU, getmiU } from "../../controllers/rwd/miUs.controller.js";

const router = Router();

router.get("/api/mius", getmiUs);
router.post("/api/mius", createmiU);
router.put("/api/mius/:id", updatemiU);
router.delete("/api/mius/:id", deletemiU);
router.get("/api/mius/:id", getmiU);

// router.get("/api/mius/:id/orders", getmiUOs);



export default router;