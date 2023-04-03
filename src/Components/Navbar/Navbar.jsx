import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link logo" to="/">
              Shopee
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonIcon />
            <FavoriteBorderIcon />
            <div className="cardIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartIcon />
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
