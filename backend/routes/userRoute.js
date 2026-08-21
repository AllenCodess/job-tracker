import express from "express";
import { createUser, findUsers, findUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", findUsers);
router.get("/:id", findUser);
router.post("/register", createUser);

export default router;
