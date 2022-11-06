import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={logo} alt="logo-img" />
      </div>
      <div>
        <a href="/shop">Shop</a>
        <a href="/order">Order</a>
        <a href="/inventory">Inventory</a>
        <a href="/about">About</a>
      </div>
    </div>
  );
};

export default Header;
