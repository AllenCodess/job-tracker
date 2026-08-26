// create, view, edit, delete jobs

import Job from "../models/jobModel.js";
import User from "../models/userModel.js";

export const createJob = async (req, res) => {
  try {
    const { position, company, location, status, date, notes } = req.body;
    const userId = req.user.id; // from your auth middleware (this checks the id via the cookie/jwt payload)

    const newJob = await Job.create({
      position,
      location,
      status,
      company,
      date,
      notes,
      user: userId,
    });

    // Add job to user's jobs array
    await User.findByIdAndUpdate(req.user.id, { $push: { jobs: newJob._id } });

    res.status(201).json({ status: "success", data: { job: newJob } });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};

export const findJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json({ status: "success", result: jobs.length, data: jobs });
  } catch (error) {
    res.status(400).json({ status: "failed", message: error.message });
  }
};

export const findMyJobs = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("jobs");

    res.json({
      status: "success",
      user: req.user.name,
      results: user.jobs.length,
      data: user.jobs,
    });
  } catch (error) {
    res.json(error.message);
  }
};

export const findMyJob = async (req, res) => {
  try {
    const job = await Job.findOne({ _id: req.params.id, user: req.user.id }).populate(
      "user",
      "name",
    );

    if (!job) {
      return res.status(403).json({ status: "fail", message: "Not authorized" });
    }

    res.status(200).json({
      status: "success",
      data: job,
    });
  } catch (error) {
    res.status(400).json({ status: "failed", message: error.message });
  }
};

export const updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(201).json({ status: "success", data: job });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};
