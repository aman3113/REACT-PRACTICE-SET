import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Product from "./Product";

const SingleItem = ({ products }) => {
  const [item, setItem] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    setItem(products.find((product) => product.id === Number(itemId)));
  }, [products, itemId]);

  return (
    <div>
      <NavLink to={"/ans1"}>Back to Home</NavLink>
      <Product
        name={item?.name}
        price={item?.price}
        description={item?.description}
        key={item?.id}
      />
    </div>
  );
};

export default SingleItem;
