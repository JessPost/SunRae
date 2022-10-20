//contains the navbar code

import React from "react";
import "./Header.css";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

var logo = require("../src/images/logo.jpg");

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} />

      <div className="header__search">
        <input className="header__searchInput" type="text"></input>
        <SearchTwoToneIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello,</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Profile</span>
        </div>

        <div className="header__optionBasket">
          <ShoppingCartTwoToneIcon />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
