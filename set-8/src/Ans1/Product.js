import React from "react";

const Product = ({ name, description, price }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: {price}</p>
    </div>
  );
};

export default Product;
