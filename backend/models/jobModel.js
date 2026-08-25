import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  position: {
    type: String,
    required: [true, "You need to add the position you're applying for."],
    trim: true,
  },
  company: {
    type: String,
    required: [true, "You need to add the company name."],
  },
  location: {
    type: String,
    required: [true, "You need to enter the location for the role."],
  },
  status: {
    type: String,
    required: [true, "You must select a status."],
  },
  date: {
    type: String,
    required: [true, "You must select a date."],
  },
  notes: {
    type: String,
  },
});

const Job = mongoose.model("Job", jobSchema);
export default Job;
