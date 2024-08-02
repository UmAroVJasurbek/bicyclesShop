import "./App.scss";
import React, { useEffect } from "react";
import { Home } from "./home/Home";
import { Route, Routes } from "react-router-dom";
import { Accessories } from "./components/accessories/Accessories";
import { Bicycles } from "./components/bicycles/Bicycles";
import About_us from "./components/about_us/About_us";
import Contact from "./components/contact/Contact";
import Cart from "./licartke/Cart";
import BicyclesView from "./components/bicycles/BicyclesView";

function App() {
  return (
    <>
      <Routes>
        <Route className="home_link" path="/" element={<Home />} />

        <Route
          className="bicycles_link"
          path="bicycles"
          element={<Bicycles />}
        />
        <Route path="bicycles/:id" element={<BicyclesView />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/about_us" element={<About_us />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
