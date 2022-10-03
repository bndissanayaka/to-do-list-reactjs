import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div className="header__container">
      <div className="header__container__logo">
        <img
          src="./images/logoEp.svg"
          alt="logo"
          className="container__logo__img"
        />
        <span className="container__logo__txt">TODO APP</span>
      </div>
      <div className="header_container_menu">
        <div className="header__todo__link">
          <div className="header__todo__txt">TO DO LIST</div>
        </div>
        <div className="header__logout__link">
          <Link to="/login">
            <div className="header__logout__txt">LOGOUT</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
