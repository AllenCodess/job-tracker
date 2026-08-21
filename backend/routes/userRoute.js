import express from "express";
import { createUser, findUsers, findUser, updateUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", findUsers);
router.get("/:id", findUser);
router.patch("/:id", updateUser);
router.post("/register", createUser);

export default router;
