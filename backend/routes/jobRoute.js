import express from "express";

import { createJob } from "../controllers/jobController.js";

const router = express.Router();

router.post("/createjob", createJob);

export default router;
