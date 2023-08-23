import React from 'react';
import globals from './global.module.css';
import { Banner } from './components/banner/Banner';
import Products from './components/products/Products';
import { Services } from './components/services-section/Services';
import Testimonial from './components/testimonies/Testimonial';
import { SectionDivider } from './components/ui/section-divider/SectionDivider';

const Home = () => {
  return (
    <div className={globals['global__container--main']}>
      <Banner />
      <SectionDivider>
        <Products />
      </SectionDivider>
      <SectionDivider>
        <Services />
      </SectionDivider>
      <SectionDivider>
        <Testimonial />
      </SectionDivider>
    </div>
  );
};

export default Home;
