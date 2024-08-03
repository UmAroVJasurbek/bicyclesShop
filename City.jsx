import React from "react";
import { FiTarget } from "react-icons/fi";
import "./City.scss";
export const City = () => {
  return (
    <div className="City">
      <div className="City_wrapper">
        <h3>Discover The Collection</h3>
        <h2>City Bikes</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est esse,
          sint praesentium culpa vero pariatur sapiente?
        </p>
        <div className="City_container">
          <span className="City_span">
            <FiTarget className="City_icon" /> Officia deserunt mollit
          </span>
          <span className="City_span">
            <FiTarget className="City_icon" /> Officia deserunt mollit
          </span>
          <span className="City_span">
            <FiTarget className="City_icon" /> Excepteur sint occaecat
          </span>
          <span className="City_span">
            <FiTarget className="City_icon" />
            Excepteur sint occaecat
          </span>
          <span className="City_span">
            <FiTarget className="City_icon" />
            Sunt in culpa qui
          </span>
          <span className="City_span">
            <FiTarget className="City_icon" /> Sunt in culpa qui
          </span>
          <button className="City_btn" type="submit">
            EXPLORE NOW
          </button>
        </div>
      </div>
    </div>
  );
};
