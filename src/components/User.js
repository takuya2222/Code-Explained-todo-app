import React from "react";
import logo from "../images/logo.jpg";

export const User = () => {
  return (
    <div className="User">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="info">
        <p>Code explained</p>
        <a href="#">Logout!</a>
      </div>
    </div>
  );
};

export default User;
