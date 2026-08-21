import express from "express";
import { createUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "If youre seeing this message then that means you set up the api correctly",
  });
});

router.post("/register", createUser);

export default router;
