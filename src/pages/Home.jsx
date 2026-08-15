import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  let navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="container">
        <div className="hero-section-container">
          <div className="hero-left">
            <h1 className="hero-text-header">Track you applications. Land your dream job.</h1>

            <p className="hero-text-description">
              Job Tracker helps users organize job applications, monitor prgress and stay consistent
              on the path to get hired.
            </p>
            <button className="hero-btn" onClick={handleButtonClick}>
              Login to get started.
            </button>
          </div>
          <div className="hero-right">
            <img
              className="hero-img"
              src="./../src/assets/jobtracker-hero.png"
              alt="preview image of the site"
            />
          </div>
        </div>
        <div className="second-section">
          <h2>Everything you need to stay organized</h2>
          <div className="benefits-container">
            <div className="benefit-item">
              <FontAwesomeIcon icon={faTable} className="benefit-icon blue" />
              <div className="benefit-item-text">
                <h4 className="benefit-item-header"> Track Applications</h4>
                <p className="benefit-description">Keep all your job applications in one place.</p>
              </div>
            </div>
            <div className="benefit-item">
              <FontAwesomeIcon icon={faTable} className="benefit-icon" />
              <div className="benefit-item-text">
                <h4 className="benefit-item-header"> Track Applications</h4>
                <p className="benefit-description">Keep all your job applications in one place.</p>
              </div>
            </div>
            <div className="benefit-item">
              <FontAwesomeIcon icon={faTable} className="benefit-icon" />
              <div className="benefit-item-text">
                <h4 className="benefit-item-header"> Track Applications</h4>
                <p className="benefit-description">Keep all your job applications in one place.</p>
              </div>
            </div>
            <div className="benefit-item">
              <FontAwesomeIcon icon={faTable} className="benefit-icon" />
              <div className="benefit-item-text">
                <h4 className="benefit-item-header"> Track Applications</h4>
                <p className="benefit-description">Keep all your job applications in one place.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
