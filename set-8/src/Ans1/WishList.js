import React, { useContext } from "react";
import { wishContext } from "./Ans1";
import Product from "./Product";

const WishList = () => {
  const { wishList, setWishList } = useContext(wishContext);

  const removeItem = (item) => {
    setWishList(wishList.filter((product) => product.id !== item.id));
  };
  return (
    <div>
      <h2>Items : {wishList.length}</h2>
      {[...new Set(wishList)]?.map((item) => (
        <div>
          <Product
            name={item.name}
            price={item.price}
            description={item.description}
            key={item.id}
          />
          <button onClick={() => removeItem(item)}>Remove From WishList</button>
        </div>
      ))}
    </div>
  );
};

export default WishList;
