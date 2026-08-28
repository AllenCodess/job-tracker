import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router";

const Signup = () => {
  let navigate = useNavigate();
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    passwordConfirm,
    setPasswordConfirm,
    signup,
  } = useContext(UserContext);

  const handleLoginClick = () => {
    setName("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
    navigate("/jobs");
  };
  return (
    <>
      <div className="container">
        <div className="login-form">
          <div className="login-header">
            <h1>Create Account</h1>
            <p className="login-description">Welcome! Please enter your details to continue.</p>
          </div>
          <form className="login-inputs">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="name-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email address</label>
            <input
              type="text"
              placeholder="Enter Email"
              className="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="text"
              placeholder="Enter Password"
              className="password-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Confirm Password</label>
            <input
              type="text"
              placeholder="Confirm Password"
              className="password-input"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <button
              type="button"
              className="login-btn"
              onClick={async () => {
                await signup();
                handleLoginClick();
              }}
            >
              Create Account
            </button>
            <p className="create-account-text">
              Already have an account?
              <Link className="signuplink" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
