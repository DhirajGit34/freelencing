import React from "react";
import Slider from "../../Components/Slider/Slider";
import FeaturedProduct from "../../Components/FeaturedProduct/FeaturedProduct";
import Categories from "../../Components/Categories/Categories";
import Contact from "../../Components/Contact/Contact";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProduct type="Featured" />
      <Categories />
      <FeaturedProduct type="Trending" />
      <Contact />
    </div>
  );
};

export default Home;
