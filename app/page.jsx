import React from "react";
import globals from "./global.module.css";
import { Banner } from "./components/banner/Banner";
import Products from "./components/products/Products";
import { Services } from "./components/services-section/Services";
import Testimonial from "./components/testimonies/Testimonial";

const Home = () => {
  return (
  <div className={globals['global--container__main']}>
    <Banner />
    <Products />
    <Services />
    <Testimonial />
  </div>
  );
};

export default Home;
