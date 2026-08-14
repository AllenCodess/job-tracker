import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <h1>Job Tracker</h1>
        </div>
        <div className="navbar-items-container">
          <li className="navbar-item">Home</li>
          <li className="navbar-item">Login</li>
          <li className="navbar-item">Create New Job</li>
        </div>
      </div>
    </>
  );
};

export default Navbar;
