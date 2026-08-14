import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <h1>Job Tracker</h1>
        </div>
        <div className="navbar-items-container">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/login">Login</Link>
          </li>
          <li className="navbar-item">
            <Link to="/jobs">Jobs</Link>
          </li>
        </div>
      </div>
    </>
  );
};

export default Navbar;
