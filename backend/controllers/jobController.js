// create, view, edit, delete jobs

import Job from "../models/jobModel.js";

export const createJob = async (req, res) => {
  try {
    const { position, company, location, status, date, notes } = req.body;

    const newJob = await Job.create({
      position,
      location,
      status,
      company,
      date,
      notes,
    });

    res.status(201).json({ status: "success", data: { job: newJob } });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};
