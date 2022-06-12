import express from 'express';
import { postLogin, postSignUp } from '../../controllers/rwd/auth.controller.js';

const router = express.Router();

router.post("/login", postLogin);

router.post("/singup", postSignUp);

export default router;