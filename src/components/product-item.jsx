import React from "react";
import { useSelector } from "react-redux";
import QuantityWrapper from "./quantity-wrapper";

const ProductItem = () => {
  const products = useSelector(state => state.products);

  return (
    <div className="product-list">
      {products.map(product => {
        const { npkId, url, name, image, brand, price } = product;
        return (
          <div key={npkId} className="product-item">
            <a
              href={`https://${url}`}
              title={`Go to ${name} product page`}
              className="product-item__link"
            >
              <img src={image} alt="" className="product-item__image" />
            </a>

            <p className="product-item__brand">{brand}</p>
            <p className="product-item__name">{`${name}`}</p>
            <p className="product-item__price">
              {price}
              ,-
            </p>

            <QuantityWrapper product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductItem;
