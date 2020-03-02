/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from "./components/cart";
import Header from "./components/header";
import ProductItem from "./components/product-item";
import { store } from "./store";
import "./styles/app.scss"; // global style file

render(
  <Provider store={store}>
    <Router>
      <Header />
      <main className="main">
        <Route exact path="/" component={ProductItem} />
        <Route exact path="/cart" component={Cart} />
      </main>
    </Router>
  </Provider>,
  document.getElementById("root")
);
