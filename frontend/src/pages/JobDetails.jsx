const JobDetailsPage = () => {
  return (
    <>
      <div className="container jd-container">
        <div className="jd-left-container">
          <div className="jd-header">
            <h2>Junior Software Engineer</h2>
            <ul>
              <li>Google</li>
              <li>Virginia</li>
              <li>Full-Time</li>
            </ul>
          </div>
          <div className="jd-description">
            <h4>Job Description</h4>
            <p>
              As a junior Software Engineer, you will work with a talented team to design, build and
              maintain scalable software solutions. You will collaborate with cross-fiunctional
              teams and contribute to products used by millions of users around the world.
            </p>
          </div>
          <div className="jd-btns">
            <button>View Job Posting</button>
            <button>Edit Job</button>
            <button>Delete Job</button>
          </div>
        </div>
        <div className="jd-right-container">
          <div className="jd-app">
            <h4>Application Overview</h4>
            <div className="app-overview-jd">
              <div className="app-overview-jd-left">
                <ul>
                  <li>Status</li>
                  <li>Date Applied</li>
                  <li>Job type</li>
                  <li>Location</li>
                  <li>Company</li>
                </ul>
              </div>
              <div className="app-overview-jd-right">
                <ul>
                  <li>Applied</li>
                  <li>June 3, 2026</li>
                  <li>Full-Time</li>
                  <li>Virginia</li>
                  <li>Google</li>
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
