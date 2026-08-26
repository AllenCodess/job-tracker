import { useContext } from "react";
import { Link } from "react-router";
import { UserContext, UserProvider } from "../context/UserContext";

const Signup = () => {
  const { email, setEmail, password, setPassword, login } = useContext(UserContext);
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
            <input type="text" placeholder="Enter Name" />
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
            <button type="button" className="login-btn" onClick={login}>
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

export default Signup;
