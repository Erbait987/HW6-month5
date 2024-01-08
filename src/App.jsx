import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <ProductList />
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
