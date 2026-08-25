import express from "express";
import { protect } from "../controllers/authController.js";
import { createJob, findJobs, findMyJobs } from "../controllers/jobController.js";

const router = express.Router();

router.get("/", findJobs);
router.post("/createjob", protect, createJob);
router.get("/myjobs", protect, findMyJobs);

export default router;
