import React from "react";
import "./List.scss";
import Card from "../Card/Card";

const List = () => {
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
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
