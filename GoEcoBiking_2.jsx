import React from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import "./GoEcoBiking_2.scss";
export const GoEcoBiking = () => {
  return (
    <div className="goEcoBiking">
      <h1 className="goEcoBiking_title">Join #GoEcoBiking Programme</h1>
      <div className="goEcoBiking_videos">
        <div className="goEcoBiking_video_box">
          <IoPlayCircleOutline className="goEcoBiking_icon" />
          <h3>Watch Full Video</h3>
        </div>
      </div>
      <div className="goEcoBiking_box2">
        <div className="goEcoBiking_box2_text">
          <h3>Duis aute irure dolor in reprehenderit velit.</h3>
          <p className="goEcoBiking_box2_text_p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
        </div>
        <button className="goEcoBiking_btn">JOIN THE PROGRAMME</button>
      </div>
    </div>
  );
};
