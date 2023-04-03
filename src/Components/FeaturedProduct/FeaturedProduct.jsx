import React from "react";
import "./FeaturedProduct.scss";
import Card from "../Card/Card.jsx";

const FeaturedProduct = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/1770723/pexels-photo-1770723.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Tshirt",
      oldPrice: 15,
      price: 20,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "shirt",
      oldPrice: 15,
      price: 20,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "hat",
      oldPrice: 15,
      price: 20,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "hat",
      oldPrice: 15,
      price: 20,
    },
  ];
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {data?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
