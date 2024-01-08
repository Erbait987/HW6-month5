import React from "react";
import { useSelector } from "react-redux";
import "./navbar.scss";

const Navbar = () => {
  const cartItemCount = useSelector((state) => state.cart.items.length);

  return (
    <header className="header">
      <h2>Navbar</h2>
      <p>Счетчик: {cartItemCount}</p>
    </header>
  );
};

export default Navbar;
