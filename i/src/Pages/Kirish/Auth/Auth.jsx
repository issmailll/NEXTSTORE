import React from "react";
import "./auth.scss";

function Auth() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const mobile = document.getElementById("mobile").value;
    const storedMobile = localStorage.getItem("mobile");

    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;
    if (mobile === storedMobile) {
      window.location.href = "/auth"
      alert("mobile number is already taken");
    } else {
      localStorage.setItem("mobile", mobile);
      localStorage.setItem("password", password);
      localStorage.setItem("name", name);
      window.location.href = "/login";
    }

  };

  return (
    <>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="form-title">Ro'yhatdan o'tish</h2>
          <div className="mobile-wrapper">
            <input
              className="log-inputs tel-input"
              type="tel"
              placeholder="telefon raqam"
              id="mobile"
              required
            />
          </div>
          <div className="password-wrapper">
            <input
              className="log-inputs pass-input"
              type="password"
              id="password"
              placeholder="parol"
              required
            />
          </div>
          <div className="name-wrapper">
            <input
              className="log-inputs name-input"
              type="text"
              id="name"
              placeholder="ismingizni kiriting"
              required
            />
          </div>
          <button className="log-btn btn btn-primary" type="submit">
            Kirish
          </button>
          <a className="text-underlined" href="#">
            parolni unutdingizmi ?
          </a>
        </form>
      </div>
    </>
  );
}

export default Auth;
