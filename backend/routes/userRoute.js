import express from "express";
import {
  createUser,
  findUsers,
  findUser,
  updateUser,
  deleteUser,
  authUser,
} from "../controllers/userController.js";
import { protect } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", authUser);
// protected routes
router.get("/", protect, findUsers);
router.get("/:id", protect, findUser);
router.patch("/:id", protect, updateUser);
router.delete("/:id", protect, deleteUser);

export default router;
