import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    const storedMobileNumber = localStorage.getItem("mobile");
    const storedPassword = localStorage.getItem("password");

    if (mobileNumber === storedMobileNumber && password === storedPassword) {
      window.location.href = "/";
    } else {
      alert("Invalid mobile number or password");
    }
  }

  return (
    <>
      <div className="container">
        <form className="form">
          <h2 className="form-title">Telefon raqam orqali kirish</h2>
          <div className="mobile-wrapper">
            <input
              onChange={(e) => setMobileNumber(e.target.value)}
              value={mobileNumber}
              className="log-inputs tel-input"
              type="tel"
              placeholder="telefon raqam"
              id="mobile"
              required
            />
          </div>
          <div className="password-wrapper">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="log-inputs pass-input"
              type="password"
              id="password"
              placeholder="parol"
              required
            />
          </div>
          <Link
            onClick={handleLogin}
            className="log-btn btn btn-primary"
            type="submit"
            // to={"/"}
          >
            Kirish
          </Link>
          <a className="text-underlined" href="#">
            parolni unutdingizmi ?
          </a>
        </form>
      </div>
    </>
  );
}

export default Login;
