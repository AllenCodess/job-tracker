import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faBriefcase, faBuilding } from "@fortawesome/free-solid-svg-icons";

const JobDetailsPage = () => {
  return (
    <>
      <div className="container jd-container">
        <div className="jd-left-container">
          <div className="jd-header">
            <h2>Junior Software Engineer</h2>
            <ul className="jd-header-list">
              <li className="jd-header-list-item">
                <FontAwesomeIcon icon={faBuilding} className="gray" /> Google
              </li>
              <li className="jd-header-list-item">
                <FontAwesomeIcon icon={faLocationDot} className="gray" />
                Virginia
              </li>
              <li className="jd-header-list-item">
                <FontAwesomeIcon icon={faBriefcase} className="gray" />
                Full-Time
              </li>
            </ul>
          </div>
          <div className="jd-description">
            <h4>Job Description</h4>
            <p className="jd-description-text">
              As a junior Software Engineer, you will work with a talented team to design, build and
              maintain scalable software solutions. You will collaborate with cross-functional teams
              and contribute to products used by millions of users around the world.
            </p>
          </div>
          <div className="jd-btns">
            <button className="jd-btn vjp">View Job Posting</button>
            <button className="jd-btn ej">Edit Job</button>
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
                  <li className="app-overview-jd-item">Applied</li>
                  <li className="app-overview-jd-item">June 3, 2026</li>
                  <li className="app-overview-jd-item">Full-Time</li>
                  <li className="app-overview-jd-item">Virginia</li>
                  <li className="app-overview-jd-item">Google</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="jd-notes">
            <h4>Notes</h4>
            <p>No notes added yet.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetailsPage;
