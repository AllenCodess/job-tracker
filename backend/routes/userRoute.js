import express from "express";
import {
  createUser,
  findUsers,
  findUser,
  updateUser,
  deleteUser,
  authUser,
  logoutUser,
} from "../controllers/userController.js";
import { protect } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", authUser);
router.post("/logout", logoutUser);
// protected routes
// I didnt create an admin dashboard to manage users but I wanted to test the api
// router.get("/", protect, findUsers);
// router.get("/:id", protect, findUser);
// router.patch("/:id", protect, updateUser);
// router.delete("/:id", protect, deleteUser);

export default router;
