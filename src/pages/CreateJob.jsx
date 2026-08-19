import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateJob = () => {
  const [selected, setSelected] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ company, position, location, selectedDate, selected, notes });
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
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
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

export default CreateJob;
