import express from "express";
import {
  createUser,
  findUsers,
  findUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", findUsers);
router.get("/:id", findUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/register", createUser);

export default router;
