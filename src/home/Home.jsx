import React, { useEffect, useState } from "react";
import "./Home.scss";
import { FaRegStar } from "react-icons/fa6";
import { IoCartSharp } from "react-icons/io5";
import { FiTarget } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Nav_two } from "../nav_two/Nav_two";
import { Footer } from "../components/footer/Footer";
import { Mountain } from "../mountain/Mountain";
import { City } from "./city/City";
import { Speciality } from "../speciality/Speciality";
import { Colletion } from "./colletion/Colletion";
import { Accessories_home } from "../accessories_home/Accessories_home";
import { GoEcoBiking } from "./goEcoBiking/GoEcoBiking";
import { FooterHero } from "./footerHero/FooterHero";
import axios from "axios";

export const Home = () => {
  const [bicycles, setBicycles] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    axios
      // .get("http://192.168.0.129:8080/bicycle/all")
      .get("https://fakestoreapi.com/products")

      .then((res) => {
        console.log("res :>> ", res);
        setBicycles(res.data);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, []);

  // useEffect(() => {
  //   console.log("useEffect");
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((res) => {
  //       console.log("res :>> ", res);
  //       setBicycles(res.data);
  //     })
  //     .catch((err) => {
  //       console.log("Error: ", err);
  //     });
  // }, []);

  const bicyclesSlice = bicycles?.slice(0, 4);
  console.log("bicyclesSlice", bicyclesSlice);

  return (
    <div className="">
      <div className="hero">
        <Nav_two className="nav_two" />
        <div className="hero_container">
          <h2 className="hero_title_h2">Newly Launched</h2>
          <h1 className="hero_title_h1">Kryo X26 MTB</h1>

          <h3 className="hero_title_h3">Specifications:</h3>
          <p>
            <FiTarget className="target_icon" />
            Lightweight 18" Frame
          </p>
          <p>
            <FiTarget className="target_icon" /> Steel Suspension Fork
          </p>
          <p>
            <FiTarget className="target_icon" />
            Steel Hardtail Frame
          </p>
          <button className="hero_btn">By Now</button>
        </div>
      </div>
      <div>
        <div className="container">
          <h3 className="home_title_h3">New Arrivales</h3>
          <div className="home_container">
            {bicyclesSlice.map((bicycle) => (
              <div key={bicycle.id} className="home_mini_container">
                <span className="home_icon_box_cart">
                  <IoCartSharp className="home_icon_cart" />
                </span>
                {/* <img className="home_img" src={bicycle.photoURL} alt="???" /> */}
                <img className="home_img" src={bicycle.image} alt="???" />

                <p>Bicycles</p>
                {/* <h3>{bicycle.model}</h3> */}
                <h3>{bicycle.category}</h3>
                <div className="home_rating">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <h4>{bicycle.price} $</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="home_container">
        {bicyclesSlice.map((bicycle) => (
          <div key={bicycle.id} className="home_mini_container">
            <span className="home_icon_box_cart">
              <IoCartSharp className="home_icon_cart" />
            </span>
            <img className="home_img" src={bicycle.image} alt="???" />
            <p>Bicycles</p>
            <h3>{bicycle.category}</h3>
            <div className="home_rating">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </div>
            <h4>{bicycle.price} $ </h4>
            {/* <p>{bicycle.description}</p>
          </div>
        ))}
      </div> */}

      <Mountain />
      <City />
      <Speciality />
      <Colletion />
      <Accessories_home />
      <GoEcoBiking />
      <FooterHero />
      <Footer />
    </div>
  );

  // return (
  //   <div>
  //     <h1>Bicycle List</h1>
  //     <div>
  //       {bicycles.map((bicycle) => (
  //         <div>
  //           <p key={bicycle.id}>
  //             {bicycle.model} - {bicycle.type}
  //           </p>
  //           <img src={bicycle.photoURL} alt="" />
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default Home;
