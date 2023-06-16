import React from "react";
import globals from "./global.module.css";
import { Banner } from "./components/banner/Banner";
import Products from "./components/products/Products";
import { Services } from "./components/services-section/Services";

const Home = () => {
  return (
  <div className={globals.container}>
    <Banner />
    <Products />
    <Services />
  </div>
  );
};

export default Home;
