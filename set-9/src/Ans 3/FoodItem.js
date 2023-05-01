import React from "react";
import { useLocation } from "react-router-dom";

const FoodItem = ({ item, handleAddToCart, handleRemoveFromCart }) => {
  const { id, name, description, image, price, delivery_time, isAddedToCart } =
    item;
  const { pathname } = useLocation();
  return (
    <div className="w-[22%] min-w-[200px] border-2 p-2 flex flex-col justify-between">
      <img src={image} className="w-full h-[200px]" alt="food item" />
      <p>{id}.</p>
      <p className="text-lg font-semibold"> {name}</p>
      <p>
        {" "}
        <span className="font-bold">Description: </span> {description}
      </p>
      <p>
        <span className="font-bold">Price: </span>${price}
      </p>
      <p>
        <span className="font-bold">Delivery: </span>
        {delivery_time} min.
      </p>
      {pathname.includes("menu") && (
        <button
          onClick={() => handleAddToCart(id)}
          className="bg-gray-100 px-2 py-1 border rounded-md my-1 hover:bg-gray-200"
        >
          {isAddedToCart ? "Go to Cart" : "Add to Cart"}
        </button>
      )}

      {pathname.includes("cart") && (
        <button
          onClick={() => handleRemoveFromCart(id)}
          className="bg-gray-100 px-2 py-1 border rounded-md my-1 hover:bg-gray-200"
        >
          Remove From Cart
        </button>
      )}
    </div>
  );
};

export default FoodItem;
