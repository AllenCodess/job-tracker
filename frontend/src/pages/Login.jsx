import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { UserContext } from "../context/UserContext";

const LoginPage = () => {
  let navigate = useNavigate();
  const { email, setEmail, password, setPassword, login } = useContext(UserContext);

  const handleLoginClick = () => {
    setEmail("");
    setPassword("");
    navigate("/jobs");
  };
  return (
    <>
      <div className="container">
        <div className="login-form">
          <div className="login-header">
            <h1>Log into your account</h1>
            <p className="login-description">
              Welcome back! Please enter your details to continue.
            </p>
          </div>
          <form className="login-inputs">
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
            <button
              type="button"
              className="login-btn"
              onClick={() => {
                login();
                handleLoginClick();
              }}
            >
              Login
            </button>
            <p className="create-account-text">
              Dont have an account?
              <Link className="signuplink" to="/signup">
                Create One
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
