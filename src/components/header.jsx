import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as WhiteAwayLogo } from "../assets/wa-logo.svg";
import HeaderCart from "./header-cart";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/">
          <WhiteAwayLogo className="header__logo-desktop" />
        </Link>
        <input
          type="search"
          name="search"
          disabled
          id=""
          placeholder="Search for products, brands ... "
          className="header__search"
        />
        <HeaderCart />
      </div>
    </header>
  );
};

export default Header;
