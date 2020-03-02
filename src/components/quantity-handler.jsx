import PropTypes from "prop-types";
import React from "react";

const QuantityHandler = ({ action, onClick }) => {
  return (
    <button
      type="button"
      name="button"
      onClick={onClick}
      className={`product-item__quantity-${action}`}
    >
      {action === "increase" ? "+" : "-"}
    </button>
  );
};

QuantityHandler.propTypes = {
  action: PropTypes.any,
  onClick: PropTypes.any
}

export default QuantityHandler;
