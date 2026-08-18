import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const JobPage = () => {
  return (
    <>
      <div className="jobs-header container">
        <div className="job-header-text">
          <h1>My Jobs</h1>
          <p>Track and manage all your job applications in one place.</p>
        </div>
        <div className="job-header-btn">
          <button className="job-header-button">
            <FontAwesomeIcon icon={faPlus} className="add-job-icon" />
            Add Job
          </button>
        </div>
      </div>
    </>
  );
};

export default JobPage;
