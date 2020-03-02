import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as CartIcon } from "../assets/wa-cart.svg";

const HeaderCart = () => {
  const cart = useSelector(state => state.cart);
  const { cartContent } = cart;

  // Prices are for the individual products are found as entries in an array.
  // Array.reduce() summarizes these and  uses a default value of 0
  const totalPriceReduced = cartContent.reduce(
    (acc, item) => acc + item.price,
    0
  );

  // To neatly present the totals we use the built-in NumberFormat to format and present the total to the corresponding locals
  const formattedPrice = new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK"
  }).format(totalPriceReduced);

  // Only render if there is content in cart
  const cartSize = () => {
    if (cartContent.length > 0) {
      return (
        <span className="header-cart__icon-quantity">{cartContent.length}</span>
      );
    }
  };

  return (
    <div className="header-cart">
      <Link to="/cart" className="header-cart__link">
        <div className="header-cart__icon">
          <CartIcon className="header-cart__icon-svg" />
          {cartSize()}
        </div>

        <span className="header-cart__total">{`${formattedPrice}`}</span>
      </Link>
    </div>
  );
};

export default HeaderCart;
