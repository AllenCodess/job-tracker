import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { jobs } from "../data/data";

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
      <div className="job-section container">
        <ul>
          {jobs.map((job) => (
            <div className="single-job">
              <div className="left-side">
                <p className="job-position-title">{job.position}</p>
                <div className="job-position-details-container">
                  <li className="job-position-details">{job.company}</li>
                  <li className="job-position-details">{job.location}</li>
                  <li className="job-position-details">{job.workType}</li>
                </div>
              </div>
              <div className="right-side">
                <p className="job-position-details">{job.status}</p>
                <p className="job-position-details">{job.appliedOn}</p>
                <button>Details</button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default JobPage;
