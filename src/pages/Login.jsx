const LoginPage = () => {
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
            <input type="text" placeholder="Enter Email" className="email-input" />
            <label>Password</label>
            <input type="text" placeholder="Enter Password" className="password-input" />
            <button className="login-btn">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
