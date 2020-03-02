import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { ADD_TO_CART, REMOVE_FROM_CART, store } from '../store';
import QuantityHandler from './quantity-handler';

const QuantityWrapper = ({ product }) => {
  const cart = useSelector((state) => state.cart);
  const { cartContent } = cart;
  // const qty = 1;

  return (
    <div className='product-item__quantity'>
      <QuantityHandler
        action='decrease'
        onClick={() => store.dispatch(REMOVE_FROM_CART(product.productId))}
      />
      <input
        // Reasoning for not using type="number"
        // https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/
        // defaultValue='0'
        type='text'
        inputMode='numeric'
        pattern='[0-9]*'
        className='product-item__quantity-value'
        value={
          cartContent.filter((e) => e.productId === product.productId).length
        }
        onChange={() => null}
      />
      <QuantityHandler
        action='increase'
        onClick={() => store.dispatch(ADD_TO_CART(product))}
      />
    </div>
  );
};

QuantityWrapper.propTypes = {
  product: PropTypes.any,
};

export default QuantityWrapper;
