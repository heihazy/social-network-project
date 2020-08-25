import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        SOCIAL NETWORK
      </Link>
      <div className="options">
        <Link className="option" to="/signIn">
          SIGN IN
        </Link>
      </div>
    </div>
  );
};

export default Header;
