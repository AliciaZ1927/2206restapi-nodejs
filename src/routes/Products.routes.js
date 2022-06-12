import { Router } from "express";
import { createProduct, deleteProduct, getProducts, updateProduct, getProduct } from "../controllers/Products.controller.js";

const router = Router();

router.get("/api/products", getProducts);
router.post("/api/products", createProduct);
router.put("/api/products/:id", updateProduct);
router.delete("/api/products/:id", deleteProduct);
router.get("/api/products/:id", getProduct);




export default router;