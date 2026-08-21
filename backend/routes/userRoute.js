import express from "express";
import { createUser, findUsers } from "../controllers/userController.js";

const router = express.Router();

router.get("/", findUsers);

router.post("/register", createUser);

export default router;
