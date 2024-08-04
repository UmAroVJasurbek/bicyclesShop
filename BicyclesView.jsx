import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import "./BicyclesView.scss";
import { FaSearchPlus } from "react-icons/fa";
import Nav from "../../nav/Nav";
import { Tab, Tabs } from "react-bootstrap";
import { FooterHero } from "../../home/footerHero/FooterHero";
import { Footer } from "../footer/Footer";
import { IoCartSharp } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";

const BicyclesView = () => {
  const { id } = useParams();
  console.log("id", id);
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    // axios(`https://fakestoreapi.com/products/${id}`).then((res) => {
    axios(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  useEffect(() => {
    console.log("useEffect");
    axios
      // .get("http://192.168.0.129:8080/RelatedProducts/all")
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log("res :>> ", res);
        setRelatedProducts(res.data.slice(0, 4));
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, []);

  console.log(
    "relatedProducts",
    relatedProducts.filter((item) => {
      console.log("item", item.id);
      return item.id !== +id;
    })
  );
  return (
    <div className="product">
      <Nav />
      <div className="product_page_container">
        {" "}
        <div className="product_page">
          <div className="product_image_container">
            {product?.image ? (
              <img
                src={product?.image}
                alt={product?.title}
                className="product_image"
              />
            ) : (
              "Loading..."
            )}
            <div className="zoom_icon">
              <i className="fa fa-search">
                <FaSearchPlus className="icon" />
              </i>{" "}
            </div>
          </div>
          <div className="product_details">
            <div className="breadcrumb">
              <a to="/">Home</a> / <a href="/bicycles">Bicycles</a> /{" "}
              {product?.title}
            </div>
            <h1 className="product_title">{product?.title}</h1>

            <p className="product_category">
              Category: <strong>{product?.category}</strong>
            </p>

            <p className="product_price">${product?.price} </p>
            <p className="product_description">
              rating <strong>{product?.rating?.rate}</strong>
            </p>
            <div className="add_to_cart">
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="quantity_input"
              />
              <button className="add_to_cart_button">ADD TO CART</button>
            </div>
            <NavLink className="NavLink" to="/bicycles">
              <p className="product_category_p">
                Category: <span>{product?.category}</span>
              </p>
            </NavLink>
          </div>
        </div>
        <div className="BicyclesView_line"></div>
        <div className="BicyclesView_tabs">
          <Tabs
            defaultActiveKey="home"
            transition={false}
            // id="noanim-tab-example"
            className="mb-3  justify-content-start "
          >
            <Tab
              eventKey="description"
              title="Description"
              tabClassName="BicyclesView_tab1"
              style={{ color: "red" }}
            >
              <p className="tab_description"> {product?.description}</p>
            </Tab>

            <Tab
              eventKey="reviews"
              title="Reviews (0)"
              className="BicyclesView_tab2"
              tabClassName="BicyclesView_tab1"
            >
              <div className="tab-content">
                <p>There are no reviews yet.</p>
                <form>
                  <div className="form-group">
                    <p>Your rating</p>
                    <div className="rating-stars">
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <p>Your review *</p>
                    <textarea
                      className="form-control"
                      rows="3"
                      required
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <p>Name *</p>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <p>Email *</p>
                    <input type="email" className="form-control" required />
                  </div>
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="saveInfo"
                    />
                    <p className="form-check-p" htmlFor="saveInfo">
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </p>
                  </div>
                  <button type="submit" className="btn btn-danger">
                    Submit
                  </button>
                </form>
              </div>
            </Tab>
          </Tabs>
        </div>
        <div className="RelatedProducts">
          <h2>Related products</h2>
          <div className="RelatedProducts__container ">
            {relatedProducts
              .filter((item) => item.id !== +id)
              .map((bicycle) => (
                <div
                  key={bicycle.id}
                  className="RelatedProducts__mini_container"
                >
                  <span className="">
                    <IoCartSharp className="RelatedProducts__icon_cart" />
                  </span>
                  {/* <img
                    className="RelatedProducts_img"
                    src={bicycle.photoURL}
                    alt={bicycle.model}
                  /> */}
                  <div className="RelatedProducts_img_container">
                    <img
                      className="RelatedProducts_img"
                      src={bicycle.image}
                      alt={bicycle.model}
                    />
                  </div>
                  <p>RelatedProducts</p>
                  {/* <h3>{bicycle.model}</h3> */}
                  <h3>{bicycle.category}</h3>
                  <div className="RelatedProducts__rating">
                    <FaRegStar className="RelatedProducts_start" />
                    <FaRegStar className="RelatedProducts_start" />
                    <FaRegStar className="RelatedProducts_start" />
                    <FaRegStar className="RelatedProducts_start" />
                    <FaRegStar className="RelatedProducts_start" />
                  </div>
                  <h4>{bicycle.price} $</h4>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BicyclesView;
