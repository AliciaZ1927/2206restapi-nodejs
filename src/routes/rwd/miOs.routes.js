import { Router } from "express";
import {
  getmiOs,
  createmiO,
  updatemiO,
  deletemiO,
  getmiO,
} from "../../controllers/rwd/miOs.controller.js";
const router = Router();

router.get("/api/mios", getmiOs);
router.post("/api/mios", createmiO);
router.put("/api/mios/:id", updatemiO);
router.delete("/api/mios/:id", deletemiO);
router.get("/api/mios/:id", getmiO);

export default router;