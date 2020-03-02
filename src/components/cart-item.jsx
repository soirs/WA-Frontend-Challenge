import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

const CartItem = ({ formatCurrency }) => {
  const cart = useSelector((state) => state.cart);
  const { cartContent } = cart;

  // Removes duplicates from the cart
  // This way we only display a product once
  // Would be refactored in a extended Redux setup
  const cartItems = Array.from(new Set(cartContent));

  return (
    <div className='cart__content-wrapper'>
      <h3 className='cart__header'>Content of your cart:</h3>
      <hr />
      <table className='cart__table'>
        <thead className='cart__table-head'>
          <tr>
            <th />
            <th>Product</th>
            <th />
            <th className='cart__item-price'>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            const { npkId, name, price, url, brand, image, productId } = item;
            const quantity = cartContent.filter(
              (e) => e.productId === productId
            ).length;

            return (
              <tr className='cart__item' key={npkId}>
                {/* IMAGE & BRAND */}
                <td className='cart__item-image'>
                  <a
                    href={`https://${url}`}
                    title={`Go to ${name} product page`}
                    className='product-item__link'
                  >
                    <img src={image} alt='' className='cart__item-images' />
                  </a>
                </td>
                {/* PRODUCT */}
                <td className='cart__item-npk'>
                  <p className='cart__item-brand'>{brand}</p>
                  <p className='cart__item-name'>{name}</p>
                  <small>{npkId}</small>
                </td>
                {/* QUANTITY */}
                <td className='cart__item-quantity'>{quantity}x</td>
                {/* PRICE */}
                <td className='cart__item-price'>
                  <p>
                    {formatCurrency(price)}
                  </p>
                </td>
                {/* TOTALPRICE */}
                <td className='cart__item-totalprice'>
                  <p>
                    {formatCurrency(price * quantity)}
                    ,-
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

CartItem.propTypes = {
  formatCurrency: PropTypes.any,
};

export default CartItem;
