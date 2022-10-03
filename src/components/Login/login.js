import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Todo from "../Todo/todo";
import "./login.css";

function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const userCredentials = [
    {
      username: "admin",
      password: "admin",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = userCredentials.find(
      (user) => user.username === uname.value
    );

    if (userData) {
      if (userData.password !== pass.value) {
        // invalid password message
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // username not found message
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="login__error">{errorMessages.message}</div>
    );

  const renderLoginForm = (
    <div className="login__details__form">
      <form onSubmit={handleSubmit}>
        <div className="input__container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input__container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button__container">
          <input type="submit" className="button__container__btn" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="login__app">
      <div className="login__form">
        <div className="login__form__title">Sign In</div>
        {isSubmitted ? (
           <Navigate to="/todo" replace />
        ) : (
          renderLoginForm
        )}
      </div>
    </div>
  );
}

export default Login;
