import { useState } from "react";

const CreateJob = () => {
  const [selected, setSelected] = useState("");
  return (
    <>
      <div className="create-job-details container">
        <div className="create-job-header">
          <h1>Add a New Job</h1>
          <p>Enter the details of the job application.</p>
        </div>
        <form className="create-new-job">
          <div className="create-left">
            <label className="create-job-label">Company Name</label>
            <input className="details-label" type="text" placeholder="e.g Netflix" />
            <label className="create-job-label">Job Title / Position</label>
            <input
              className="details-label"
              type="text"
              placeholder="e.g Junior Frontend Devloper"
            />
            <label className="create-job-label">Status</label>
            <select
              className="dropdown"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              <option>Select</option>
              <option value="Applied">Applied</option>
              <option value="Rejected">Rejected</option>
              <option value="Pending">Pending</option>
              <option value="Interview">Interview</option>
            </select>
          </div>
          <div className="create-right">
            <label className="create-job-label">Location</label>
            <input className="details-label" type="text" placeholder="e.g New York" />
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateJob;
