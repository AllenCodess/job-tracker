import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "If youre seeing this message then that means you set up the api correctly",
  });
});

export default router;
