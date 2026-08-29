import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faBriefcase, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";

const JobDetailsPage = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getJobDetail = async () => {
      try {
        const detail = await fetch(`/api/v1/jobs/${id}`, {
          method: "GET",
          credentials: "include",
        });
        const data = await detail.json();
        setData(data.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    getJobDetail();
  }, []);
  if (!data) return <p>Loading...</p>;

  return (
    <>
      <div className="container jd-container">
        <div className="jd-left-container">
          <div className="jd-header">
            <h2>{data.position}</h2>
            <ul className="jd-header-list">
              <li className="jd-header-list-item">
                <FontAwesomeIcon icon={faBuilding} className="gray" /> {data.company}
              </li>
              <li className="jd-header-list-item">
                <FontAwesomeIcon icon={faLocationDot} className="gray" />
                {data.location}
              </li>
              <li className="jd-header-list-item">
                <FontAwesomeIcon icon={faBriefcase} className="gray" />
                {data.workType}
              </li>
            </ul>
          </div>
          <div className="jd-description">
            <h4>Job Description</h4>
            <p className="jd-description-text">
              {data.description || " No description added yet."}
            </p>
          </div>
          <div className="jd-btns">
            <button className="jd-btn vjp">
              <a className="jd-btn-link" href={data.jobLink} target="_blank">
                View Job Posting
              </a>
            </button>
            <button className="jd-btn ej">
              <Link to={`/editjob/${data._id}`} className="jd-btn-ej">
                Edit Job
              </Link>
            </button>
            <button className="jd-btn dj">Delete Job</button>
          </div>
        </div>
        <div className="jd-right-container">
          <div className="jd-app">
            <h4 className="jd-app-overview-header">Application Overview</h4>
            <div className="app-overview-jd">
              <div className="app-overview-jd-left">
                <ul>
                  <li className="app-overview-jd-item">Status:</li>
                  <li className="app-overview-jd-item">Date Applied:</li>
                  <li className="app-overview-jd-item">Job type:</li>
                  <li className="app-overview-jd-item">Location:</li>
                  <li className="app-overview-jd-item">Company:</li>
                </ul>
              </div>
              <div className="app-overview-jd-right">
                <ul>
                  <li className="app-overview-jd-item">{data.status}</li>
                  <li className="app-overview-jd-item">
                    {new Date(data.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </li>
                  <li className="app-overview-jd-item">{data.workType}</li>
                  <li className="app-overview-jd-item">{data.location}</li>
                  <li className="app-overview-jd-item">{data.company}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="jd-notes">
            <h4>Notes</h4>
            <p> {data.notes || "No notes added yet."} </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetailsPage;
