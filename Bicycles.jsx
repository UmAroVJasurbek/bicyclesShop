import React, { useEffect, useState } from "react";
import "./Bicycles.scss";
import { Footer } from "../footer/Footer";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { Nav } from "../../nav/Nav";
import { FaChevronRight } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

import axios from "axios";
import { IoCartSharp } from "react-icons/io5";

export const Bicycles = () => {
  const [bicycles, setBicycles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    axios
      // .get("http://192.168.0.129:8080/product/all")
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log("res :>> ", res);
        setBicycles(res.data.slice(0, 4));
      })
      .finally(() => setIsLoading(false))
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, []);
  const params = useLocation();

  // console.log("params", params);
  return (
    <div className="bicycles_container">
      <Nav className="nav" />
      {isLoading ? (
        // <div class="lds-spinner">
        //   <div></div>
        //   <div></div>
        //   <div></div>
        //   <div></div>
        //   <div></div>
        //   <div></div>
        //   <div></div>
        //   <div></div>
        //   <div></div>
        //   <div></div>
        //   <div></div>
        //   <div></div>
        // </div>
        <div className="loader"></div>
      ) : (
        <div className="bicycles">
          <div className="bicycles_search">
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
            <div className="bicycles_filter_box">
              <h2>Filter buy price</h2>
              <input type="range" />
              <div className="bicycles_filter_box_btn">
                <span>20$</span>
                <span>350$ </span>
              </div>
              <div className="bicycles_filter_btn_box">
                <button className="bicycles_filter_btn">APPLY</button>
              </div>{" "}
            </div>
            <div className="bicycles_filter_cotegory_box">
              <h2>filter by categories</h2>
              <p>
                Accessories <span>(0)</span>
              </p>
              <p>
                Bicycles <span>(0)</span>
              </p>
            </div>
            <div>2</div>
          </div>
          <div className="bicycles_home_title">
            <div className="bicycles_home_title_p">
              <p>
                <NavLink className="text-decoration-none" to="/">
                  <li>Home</li>
                </NavLink>
              </p>
              <p> / Bicycles</p>
            </div>
            <h2 className="bicycles_title">Bicycles</h2>
            <div className="bicycles_home_container ">
              {bicycles.map((bicycle) => (
                <div key={bicycle.id} className="bicycles_home_mini_container">
                  <span className="bicycles_home_icon_cart">
                    <IoCartSharp />
                  </span>
                  {/* <Link to={`/bicycles/${bicycle.id}`}>
                    <img
                      className="bicycles_img"
                      src={bicycle.photoURL}
                      alt={bicycle.model}
                    />
                  </Link> */}

                  <div className="bicycles_img_box">
                    {" "}
                    <Link to={`/bicycles/${bicycle.id}`}>
                      <img
                        className="bicycles_img"
                        src={bicycle.image}
                        alt={bicycle.model}
                      />
                    </Link>
                  </div>

                  <p>Bicycles</p>
                  <h3>{bicycle.model}</h3>
                  <h3>{bicycle.id}</h3>
                  <div className="bicycles_home_rating">
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
      )}
      <Footer className="footer" />
    </div>
  );
};
