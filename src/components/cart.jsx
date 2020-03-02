import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './cart-item';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const { cartContent } = cart;

  // If cart is empty we want to give feedback
  const cartEmpty = () => {
    return <h3 className='cart__header'>Your cart appears to be empty.</h3>;
  };

  // Totalprice shown in the end
  const totalPrice = () => {
    return cartContent.reduce((acc, item) => acc + item.price, 0);
  };

  const formattedPrice = (value) =>
    new Intl.NumberFormat('da-DK', {
      style: 'currency',
      currency: 'DKK',
    }).format(value);

  return (
    <div className='cart'>
      <h1>Shopping cart</h1>
      {/* If no items in cart - we display a custom message instead */}
      {cartContent.length < 1 ? cartEmpty() : <CartItem formatCurrency={formattedPrice} />}
      <hr />
      <p className='cart__total'>
        Total:{" "}
        {formattedPrice(totalPrice())}
      </p>
    </div>
  );
};
export default Cart;
