//   font-family: "Lugrasimo", cursive;
import React from "react";
import "./Nav_two.scss";

import { BiMenu } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
export const Nav_two = () => {
  const pathname = useLocation();
  return (
    <div>
      <div className="nav_two_container">
        <img src="images/logo.webp" alt="" />
        <ul className=" nav_two_link nav_two_ul">
          <NavLink
            className={`text-decoration-none Accessories_filter_btn`}
            to="/"
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            className={`text-decoration-none Accessories_filter_btn`}
            to="/bicycles"
          >
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
          <button className="nav_two_btn">
            $0.00
            <NavLink className="nav_two_cart" to={"/cart"}>
              <FaShoppingCart className="icon" />
            </NavLink>
            <span className="count_span">0</span>
          </button>
          <BiMenu className="icon-menu" />
        </div>
      </div>
    </div>
  );
};
// export default Nav_two;
