import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { validEmail, passwordRegEx } from './Regex.jsx';
import {AuthService} from "./AuthService.jsx";
import logo from '../../logo.svg';

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");

  const handleValidation = (event) => {
    let formIsValid = true;

    if (!email.match(validEmail)) {
      formIsValid = false;
      setemailError("Please enter valid email address.");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password.match(passwordRegEx)) {
      formIsValid = false;
      setpasswordError(
        "Invalid password. Please enter correct password."
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const loginSubmit = (e) => {
    e.preventDefault();
      if (handleValidation()) {
        var res = AuthService.checkAuth(email, password);
        alert(res);
    };
  };

  return (
    <div className="App">
      <div className="container">
        <div className="justify-content-center col-md-4 offset-md-4">
        <img src={logo} className="App-logo" alt="logo" />
          {/* <div className="col-md-12"> */}
            <form id="loginform" onSubmit={loginSubmit}>
            <div className="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <small id="emailHelp" className="text-danger form-text">
                  {emailError}
                </small>
              </div>
              <div className="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <small id="passworderror" className="text-danger form-text">
                  {passwordError}
                </small>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form><br/>
            <div class="text-sm-left text-warning">
                Password should be 8 characters long which contain only characters, numeric digits,
                underscore and first character must be a letter.
            </div>
        </div>
      </div>
    </div>
  );
}
export default Login;