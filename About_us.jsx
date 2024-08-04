import React from "react";
import { Mountain } from "../../mountain_2/Mountain_2";
import "./About_us.scss";
import { Nav } from "../../nav/Nav";
import { GoEcoBiking } from "../../home/goEcoBiking/GoEcoBiking";
import { FooterHero } from "../../home/footerHero/FooterHero";
import { Nav_two } from "../../nav_two/Nav_two";
import { IoPlayCircleOutline } from "react-icons/io5";
// import { GoEcoBiking } from "../../goEcoBiking/GoEcoBiking";
const About_us = () => {
  return (
    <div className="about_us_container">
      {/* <Nav_two className="nav" /> */}
      <div className="hero-about">
        <Nav_two className="nav" />
        <div className="who-we-are">
          <div>
            <h2 className="who-we-are_h2">Who We Are</h2>
            <div class="who-we-are_video">
              <div>
                <IoPlayCircleOutline className="mountain_icon" />
                <h3>Watch Full Video</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <GoEcoBiking /> */}
      <div className="about_us">
        <div className="about">
          <div>
            <div className="about_wrapper">
              <div className="about_container">
                <div className="about_choose_1">
                  <h3>Get on & Go!</h3>
                  <h4 className="about_subtitle">2002</h4>
                </div>
              </div>
              <div className="about_container">
                <div className="about_choose_3">
                  <h3>First Garage & Shop</h3>
                  <h4 className="about_subtitle">2003</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="about_container_1">
            <div className="about_choose_2">
              <h3>First Cycle Launched</h3>
              <h4 className="about_subtitle">2005</h4>
            </div>
          </div>
        </div>
        <div className="about">
          <div></div>
          <div className="about_container_2">
            <div className="about_choose_4">
              <h3>First Cycle </h3>
              <h4 className="about_subtitle">2005</h4>
            </div>
          </div>
          <div className="about_wrapper_box">
            <div className="about_container about_wrapper_2 ">
              <div className="about_choose_5">
                <h3>Get on & Go! 5</h3>
                <h4 className="about_subtitle">2002</h4>
              </div>
            </div>
            <div className="about_container about_wrapper_2">
              <div className="about_choose_6">
                <h3>First Garage & Shop 6</h3>
                <h4 className="about_subtitle">2003</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="about_process_title">Our Process</h2>
        <div className="about_process">
          <div className="process_box">
            <h3>01.</h3>
            <h2>Research</h2>
            <p>
              Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus,
              luctus nec ullam corper.
            </p>
          </div>

          <div className="process_box">
            <h3>02.</h3>
            <h2>Research</h2>
            <p>
              Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus,
              luctus nec ullam corper.
            </p>
          </div>
          <div className="process_box">
            <h3>03.</h3>
            <h2>Research</h2>
            <p>
              Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus,
              luctus nec ullam corper.
            </p>
          </div>
          <div className="process_box">
            <h3>04.</h3>
            <h2>Research</h2>
            <p>
              Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus,
              luctus nec ullam corper.
            </p>
          </div>
        </div>
      </div>
      <GoEcoBiking />
      <FooterHero />
    </div>
  );
};

export default About_us;
