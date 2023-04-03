import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [selectImg, setSelectImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/769732/pexels-photo-769732.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h2>Title</h2>
        <span className="price">$199</span>
        <p>
          Our T-shirts are made with durable and comfortable materials, to be
          worn in your favorite colors. With high quality prints, featuring
          popular characters and designs, they make great gifts.
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO CARD
        </button>
        <div className="links">
          <div className="items">
            <FavoriteBorderIcon />
            ADD TO WISH LIST
          </div>
          <div className="items">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <p>Vendor: Polo</p>
          <p>Product Type: T-shirt</p>
          <p>Tag: T-shirt, Man </p>
        </div>
        <div className="info">
          <p>Dsecription</p>
          <p>Additional Information</p>
          <p>FAQ</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
