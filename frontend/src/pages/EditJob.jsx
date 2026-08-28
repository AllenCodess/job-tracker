import { useContext, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

const EditJob = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [status, setStatus] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [jobLink, setJobLink] = useState("");
  const [workType, setWorkType] = useState("");
  const [date, setDate] = useState(null);
  const [notes, setNotes] = useState("");
  const [description, setDescription] = useState("");

  const { editJob } = useContext(UserContext);

  useEffect(() => {
    const getJob = async () => {
      try {
        const res = await fetch(`/api/v1/jobs/${id}`, { credentials: "include" });
        const json = await res.json();
        const job = json.data;
        console.log(job);

        setCompany(job.company);
        setPosition(job.position);
        setLocation(job.location);
        setStatus(job.status);
        setWorkType(job.workType || "");
        setJobLink(job.jobLink || "");
        setNotes(job.notes || "");
        setDate(job.date ? new Date(job.date) : null);
      } catch (error) {
        console.error(error.message);
      }
    };
    getJob();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editJob(id, {
      status,
      company,
      position,
      location,
      jobLink,
      workType,
      date,
      notes,
      description,
    });

    navigate(`/job-details/${id}`);
  };

  return (
    <>
      <div className="create-job-details container">
        <div className="create-job-header">
          <h1>Add a New Job</h1>
          <p>Enter the details of the job application.</p>
        </div>
        <form className="create-new-job" onSubmit={handleSubmit}>
          <div className="create-left">
            <label className="create-job-label">Company Name</label>
            <input
              className="details-label"
              type="text"
              placeholder="e.g Netflix"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <label className="create-job-label">Job Title / Position</label>
            <input
              className="details-label"
              type="text"
              placeholder="e.g Junior Frontend Devloper"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
            <label className="create-job-label">Job Link</label>
            <input
              className="details-label"
              type="text"
              placeholder="e.g https://www.linkedin.com/developers"
              value={jobLink}
              onChange={(e) => setJobLink(e.target.value)}
            />
            <label className="create-job-label">Status</label>
            <select className="dropdown" value={status} onChange={(e) => setStatus(e.target.value)}>
              <option>Select</option>
              <option value="Applied">Applied</option>
              <option value="Rejected">Rejected</option>
              <option value="Pending">Pending</option>
              <option value="Interview">Interview</option>
            </select>
            <label className=" create-job-label worktype-label">Work-Type</label>
            <select
              className="dropdown"
              value={workType}
              onChange={(e) => setWorkType(e.target.value)}
            >
              <option>Select</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
            </select>
            <label className="create-job-label jd-label">Job Description</label>
            <textarea
              placeholder="Optional Job Descirption"
              className="create-job-notes"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
          </div>
          <div className="create-right">
            <label className="create-job-label">Location</label>
            <input
              className="details-label"
              type="text"
              placeholder="e.g New York"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <div className="calendar">
              <p className="create-job-label">Select a date:</p>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                className="details-label"
              />
            </div>
            <label className="create-job-label">Notes</label>
            <textarea
              placeholder="Additional Notes here"
              className="create-job-notes"
              onChange={(e) => setNotes(e.target.value)}
              value={notes}
            ></textarea>
            <button className="create-job-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditJob;
