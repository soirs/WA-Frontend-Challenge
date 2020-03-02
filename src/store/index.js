import { configureStore, createSlice } from "@reduxjs/toolkit";
import PRODUCTS from "../data";

// https://redux-toolkit.js.org/api/createslice/
//
// Automatically creates action creators and action types that corresponds to the reducers and state
const productsSlice = createSlice({
  name: "fetchAllProducts", // action type prefix
  initialState: PRODUCTS, 
  reducers: {
    FETCH_PRODUCTS: (state, action) => {}
  }
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartContent: []
  },
  reducers: {
    ADD_TO_CART: (state, action) => {
      // Redux Toolkit/Immerjs allows me to mutate data with Array.prototype.push() or concat()
      state.cartContent.push(action.payload);
    },
    REMOVE_FROM_CART: (state, action) => {
      // Array.prototype.filter returns a new array with all elements that does _not_ match the productId
      // This is not ideal and we would a functional version adjust for quantity
      // This is why all instances of the product is removed from the cart
      const cartContentWithoutRemovedProduct = state.cartContent.filter(
        item => action.payload !== item.productId
      );
      // Object spreading
      // https://redux.js.org/recipes/using-object-spread-operator/#using-object-spread-operator
      //
      // Essentially copies the state and replaces the entries with new cartContentWithoutRemovedProduct
      return {
        ...state,
        cartContent: cartContentWithoutRemovedProduct
      };
    }
  }
});

const reducer = {
  products: productsSlice.reducer,
  cart: cartSlice.reducer
};

const store = configureStore({ reducer });

export const { FETCH_PRODUCTS } = productsSlice.actions;
export const { ADD_TO_CART, REMOVE_FROM_CART } = cartSlice.actions;

export { productsSlice, store };

