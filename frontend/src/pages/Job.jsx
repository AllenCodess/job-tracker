import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { useState, useEffect } from "react";

const JobPage = () => {
  const [data, setData] = useState([]);
  let navigate = useNavigate();
  const addJobBtn = () => {
    navigate("/createjob");
  };

  useEffect(() => {
    const getJobDetails = async () => {
      try {
        const details = await fetch("/api/v1/jobs/myjobs", {
          method: "GET",
          credentials: "include",
        });
        const data = await details.json();
        setData(data.data);
        console.log(data.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    getJobDetails();
  }, []);

  return (
    <>
      <div className="jobs-header container">
        <div className="job-header-text">
          <h1>My Jobs</h1>
          <p>Track and manage all your job applications in one place.</p>
        </div>
        <div className="job-header-btn">
          <button className="job-header-button" onClick={addJobBtn}>
            <FontAwesomeIcon icon={faPlus} className="add-job-icon" />
            Add Job
          </button>
        </div>
      </div>
      <div className="job-section container">
        <div>
          {data.map((job) => (
            <div className="single-job" key={job._id}>
              <div className="left-side">
                <p className="job-position-title">{job.position}</p>
                <div className="job-position-details-container">
                  <p className="job-position-details">{job.company}</p>
                  <p className="job-position-details">{job.location}</p>
                  <p className="job-position-details">{job.workType}</p>
                </div>
              </div>
              <div className="right-side">
                <p className="job-position-details">{job.status}</p>
                <p className="job-position-details">{job.date}</p>
                <button className="job-details-btn">
                  <Link className="job-details-btn-link" to={`/job-details/${job._id}`}>
                    Details
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobPage;
