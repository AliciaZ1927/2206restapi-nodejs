import { Router } from "express";
import {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
  getOrder,
} from "../controllers/Orders.controller.js";
const router = Router();

router.get("/api/orders", getOrders);
router.post("/api/orders", createOrder);
router.put("/api/orders/:id", updateOrder);
router.delete("/api/orders/:id", deleteOrder);
router.get("/api/orders/:id", getOrder);

export default router;