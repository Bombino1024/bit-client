import React from "react";
import { handleLogin } from "../../../../api/user_api";

function LoginPage(props) {
  const headingStyle = {
    textAlign: "center",
  };
  return (
    <div className="login-container">
      <h1 className="display-1" style={headingStyle}>
        Login
      </h1>
      <div className="input-group mb-3">
        <input
          id="username"
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          required
        />
      </div>
      <div className="input-group mb-3">
        <input
          id="password"
          type="text"
          className="form-control"
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
          required
        />
      </div>
      <button
        className="btn-block btn-primary"
        onClick={(evt) =>
          handleLogin(
            evt,
            document.getElementById("username").value,
            document.getElementById("password").value,
            props.parent
          )
        }
      >
        Submit
      </button>
    </div>
  );
}

export default LoginPage;
