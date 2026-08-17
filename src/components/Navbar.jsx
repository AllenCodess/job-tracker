import { useContext, useState } from "react";
import { Link } from "react-router";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(UserContext);

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
              <Link to="/jobs" className="link-text" onClick={() => setIsOpen(false)}>
                Jobs
              </Link>
            </li>
            {/* if user is true display logout else display login */}
            <li className="navbar-item">
              {user ? (
                <button
                  className="logout-btn"
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                >
                  Logout {user}
                </button>
              ) : (
                <Link to="/login" className="link-text" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
              )}
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
