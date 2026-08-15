import { useNavigate } from "react-router";

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
      </div>
    </>
  );
};

export default HomePage;
