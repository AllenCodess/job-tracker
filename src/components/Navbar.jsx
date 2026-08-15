import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="container">
        <div className="navbar-container">
          <div className="navbar-logo-container">
            <h1>Job Tracker</h1>
          </div>
          <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
          <div className={`navbar-items-container ${isOpen ? "active" : ""} `}>
            <li className="navbar-item">
              <Link to="/" className="link-text" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/login" className="link-text" onClick={() => setIsOpen(false)}>
                Login
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/jobs" className="link-text" onClick={() => setIsOpen(false)}>
                Jobs
              </Link>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
