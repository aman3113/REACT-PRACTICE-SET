import React from "react";
import { NavLink } from "react-router-dom";
import Product from "./Product";

const Cart = ({ cartItems, setCartItems }) => {
  const removeItem = (item) => {
    setCartItems(cartItems.filter((product) => product.id !== item.id));
  };
  return (
    <div>
      <h1>My Cart</h1>
      <NavLink to={"/ans1"}>Back to Home</NavLink>
      <p>Items : {cartItems.length}</p>
      {[...new Set(cartItems)]?.map((item) => (
        <div>
          <Product
            name={item.name}
            price={item.price}
            description={item.description}
            key={item.id}
          />
          <button onClick={() => removeItem(item)}>Remove Item</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
