import express from "express";

import { createJob } from "../controllers/jobController.js";

const router = express.router();

router.post("/createjob", createJob);

export default router;
