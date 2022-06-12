import { Router } from "express";
import { createUser, deleteUser, getUsers, updateUser, getUser, getUserOrders } from "../controllers/Users.controller.js";

const router = Router();

router.get("/api/users", getUsers);
router.post("/api/users", createUser);
router.put("/api/users/:id", updateUser);
router.delete("/api/users/:id", deleteUser);
router.get("/api/users/:id", getUser);

router.get("/api/users/:id/orders", getUserOrders);



export default router;