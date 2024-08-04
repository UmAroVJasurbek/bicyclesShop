import React from "react";
import "./Contact.scss";
import { Nav } from "../../nav/Nav";
// src/components/Contact.js

import { FaTruck, FaToolbox, FaStore } from "react-icons/fa";
import { Nav_two } from "../../nav_two/Nav_two";
import { Footer } from "../footer/Footer";

const Contact = () => {
  return (
    <div>
      <Nav_two className="nav" />
      {/* about-movie-bg-1.jpg */}
      <div className="contact_us_container"></div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1139.2916462964179!2d69.28658685928751!3d41.31988979642091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE5JzExLjYiTiA2OcKwMTcnMTUuMCJF!5e1!3m2!1suz!2s!4v1720483719729!5m2!1suz!2s"
        className="contact_map"
        width={"100%"}
        height={"1450px"}
      ></iframe>
      <div className="contact-container">
        <div className="contact-item">
          <FaTruck className="contact-icon" />
          <h2>1 800 755 60 21</h2>
          <p>Sales Related Enquiries</p>
        </div>
        <div className="contact-item">
          <FaToolbox className="contact-icon" />
          <h2>1 800 755 60 22</h2>
          <p>Service Related Enquiries</p>
        </div>
        <div className="contact-item">
          <FaStore className="contact-icon" />
          <h2>1 800 755 60 23</h2>
          <p>Dealership Related Enquiries</p>
        </div>
      </div>

      <div className="contact_container">
        <div className="contact_form">
          <h2 className="contact_title">Let's Get in Touch</h2>
          <form>
            <div className="name_fields">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>
            <input type="email" placeholder="Enter email address" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
        <div className="contact_details">
          <h2>Contact Details</h2>
          <p>
            <strong>Our Hours</strong>
            <br />
            10:00 AM – 22.00 PM
            <br />
            Monday – Friday
          </p>
          <p>
            <strong>Location</strong>
            <br />
            212 7th St SE, Washington, DC 20003, USA
          </p>
          <p>
            <strong>Contact Us</strong>
            <br />
            Phone: 1 800 755 60 20
            <br />
            Email: contact@company.com
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
