import express from "express";
import {
  createUser,
  findUsers,
  findUser,
  updateUser,
  deleteUser,
  authUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", findUsers);
router.get("/:id", findUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/register", createUser);
router.post("/login", authUser);

export default router;
