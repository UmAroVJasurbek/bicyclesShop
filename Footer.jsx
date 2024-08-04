import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import "./Footer.scss";
export const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <img className="footer_img" src="images/logo.webp" alt="#" />
        <ul className="footer_ul">
          <li className=" footer_li_title">Usefull Links</li>
          <li className="footer_li">Home</li>
          <li className="footer_li">Shop</li>
          <li className="footer_li">About Us</li>
          <li className="footer_li">Contact Us</li>
        </ul>
        <ul className="footer_ul">
          <li className=" footer_li_title">Our Collection</li>
          <li className="footer_li">Mountain Bikes</li>
          <li className="footer_li"> City Bikes</li>
          <li className="footer_li">Electric Bikes</li>
          <li className="footer_li">Electric Bikes</li>
        </ul>
        <ul className="footer_ul">
          <li className="  footer_li_title">Account</li>
          <li className="footer_li">Customer Login </li>
          <li className="footer_li"> Dealer Login</li>
          <li className="footer_li"> Address</li>
          <li className="footer_li">Payment Methods</li>
        </ul>
      </div>
      <div className="footer_line"></div>
      <div className="footer_copy">
        <h4> Copyright © 2024 Cycle Shop</h4>
        <div className="footer_icon_box">
          <FaFacebook className="footer_icon" />
          <FaInstagram className="footer_icon" />
          <RiTelegramLine className="footer_icon" />
          <FaYoutube className="footer_icon" />
        </div>
      </div>
    </footer>
  );
};
