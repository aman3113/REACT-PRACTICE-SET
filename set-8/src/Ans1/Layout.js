import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Product from "./Product";
import { wishContext } from "./Ans1";

const Layout = ({ products, setCartItems }) => {
  const { setWishList } = useContext(wishContext);

  const handleClick = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const handleWishList = (product) => {
    setWishList((prev) => [...prev, product]);
  };

  return (
    <div>
      <h1>Product Listing Page</h1>
      <NavLink to={"cart"}> My Cart</NavLink>
      <NavLink to={"wishlist"}> My WishList</NavLink>

      {products?.map((product) => (
        <div>
          <Product
            name={product.name}
            price={product.price}
            description={product.description}
            key={product.id}
          />
          <NavLink to={`/item/${product.id}`}>Visit Item</NavLink>
          <button onClick={() => handleClick(product)}>Add Item</button>
          <button onClick={() => handleWishList(product)}>
            Add to WishList
          </button>
        </div>
      ))}
    </div>
  );
};

export default Layout;
