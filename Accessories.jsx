import React, { useEffect, useState } from "react";
import "./Accessories.scss";
import { Footer } from "../footer/Footer";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { Nav } from "../../nav/Nav";
import { FaChevronRight } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

import axios from "axios";
import { IoCartSharp } from "react-icons/io5";

export const Accessories = () => {
  const [Accessories, setAccessories] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    axios
      // .get("http://192.168.0.129:8080/accessories/all")
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log("res :>> ", res);
        setAccessories(res.data.slice(0, 8));
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, []);
  const params = useLocation();

  // console.log("params", params);
  return (
    <div className="Accessories_container">
      <Nav className="nav" />
      <div className="Accessories">
        <div className="Accessories_search">
          <div>
            <div className="bicycles_search_box">
              <p className="bicycles_search_box_p">Search</p>
              <div className="bicycles_search_input_box">
                <input
                  className="bicycles_search_box_input"
                  type="text"
                  placeholder="Search products..."
                />
                <button className="bicycles_icon_btn">
                  <FaChevronRight className="bicycles_icon" />
                </button>
              </div>
            </div>
          </div>
          <div className="Accessories_filter_box">
            <h2>Filter buy price</h2>
            <input type="range" />
            <div className="Accessories_filter_box_btn">
              <span>20$</span>
              <span>350$ </span>
            </div>
            <button className="Accessories_filter_btn">APPLY</button>
          </div>
          <div className="Accessories_filter_cotegory_box">
            <h2>filter by categories</h2>
            <p>
              Accessories <span>(0)</span>
            </p>
            <p>
              Accessories <span>(0)</span>
            </p>
          </div>
          <div></div>
        </div>
        <div className="">
          <div className="accessories_title_box">
            <p className="accessories_title_box_p">
              <NavLink className="accessories_title_box_a" to="/">
                <span>Home</span>
              </NavLink>
              <span>/ Accessories</span>
            </p>
            <h2 className="accessories_title">Accessories</h2>
            <div className="accessories__container ">
              {Accessories.map((bicycle) => (
                <div key={bicycle.id} className="accessories__mini_container">
                  <span className="">
                    <IoCartSharp className="accessories__icon_cart" />
                  </span>
                  {/* <img
                    className="Accessories_img"
                    src={bicycle.photoURL}
                    alt={bicycle.model}
                  /> */}
                  <img
                    className="Accessories_img"
                    src={bicycle.image}
                    alt={bicycle.model}
                  />
                  <p>Accessories</p>
                  {/* <h3>{bicycle.model}</h3> */}
                  <h3>{bicycle.category}</h3>
                  <div className="accessories__rating">
                    <FaRegStar className="accessories_start" />
                    <FaRegStar className="accessories_start" />
                    <FaRegStar className="accessories_start" />
                    <FaRegStar className="accessories_start" />
                    <FaRegStar className="accessories_start" />
                  </div>
                  <h4>{bicycle.price} $</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer className="footer" />
    </div>
  );
};
