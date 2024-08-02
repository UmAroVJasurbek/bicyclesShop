//   font-family: "Lugrasimo", cursive;
import React from "react";
import "./Nav.scss";

import { BiMenu } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
export const Nav = () => {
  const pathname = useLocation();
  return (
    <div>
      <div
        className={`nav_container ${
          pathname === "/bicycles" ? "transparent" : ""
        }`}
      >
        <img src="images/logo.webp" alt="" />
        <ul className=" nav_link nav_ul">
          <NavLink className={`text-decoration-none`} to="/">
            <li>Home</li>
          </NavLink>
          <NavLink className="text-decoration-none" to="/bicycles">
            <li>Bicycles</li>
          </NavLink>
          <NavLink className="text-decoration-none" to="/Accessories">
            <li>Accessories</li>
          </NavLink>
          <NavLink to="/about_us" className="text-decoration-none">
            <li>About Us</li>
          </NavLink>
          <NavLink to="/contact" className="text-decoration-none">
            <li>Contact</li>
          </NavLink>
        </ul>
        <div className="btn_box">
          <button className="nav_btn">
            $0.00
            <FaShoppingCart className="icon" />
            <span className="count_span">0</span>
          </button>
          <BiMenu className="icon-menu" />
        </div>
      </div>
    </div>
  );
};
export default Nav;
