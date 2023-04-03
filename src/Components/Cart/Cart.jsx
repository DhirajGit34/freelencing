import React from "react";
import "./Cart.scss";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/14649875/pexels-photo-14649875.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      img2: "https://images.pexels.com/photos/14270579/pexels-photo-14270579.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Sweeter",
      desc: "lomrem kjfu vhffuf kjfchen fjhufguyf",
      isNew: true,
      oldPrice: 20,
      price: 17,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/428311/pexels-photo-428311.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/14661921/pexels-photo-14661921.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "T-shirt",
      desc: "lomrem kjfu vhffuf kjfchen fjhufguyf",
      isNew: true,
      oldPrice: 20,
      price: 17,
    },
  ];

  return (
    <div className="cart">
      <h1>Product in your card</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            {/* word limitation */}
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>Process to checkout</button>
      <span className="reset"> Reset cart</span>
    </div>
  );
};

export default Cart;
