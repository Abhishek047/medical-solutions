import React from "react";
import globals from "./global.module.css";
import { Banner } from "./components/banner/Banner";
import Products from "./components/products/Products";

const Home = () => {
  return (
  <div className={globals.container}>
    <Banner />
    <Products />
  </div>
  );
};

export default Home;
