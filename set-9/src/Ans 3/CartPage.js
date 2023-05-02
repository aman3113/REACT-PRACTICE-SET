import React, { useContext, useEffect, useState } from "react";
import { FoodContext } from "./FoodContext";
import FoodItem from "./FoodItem";

const CartPage = () => {
  const { cartItems, setFoodData } = useContext(FoodContext);
  const [deliveryTime, setDeliveryTime] = useState(0);
  const [price, setPrice] = useState(0);
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  useEffect(() => {
    setDeliveryTime(
      cartItems.reduce((acc, curr) => (acc = acc + curr.delivery_time), 0)
    );
    setPrice(cartItems.reduce((acc, curr) => (acc = acc + curr.price), 0));
  }, [cartItems]);

  const handleRemoveFromCart = (id) => {
    setFoodData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isAddedToCart: false } : item
      )
    );
  };
  return (
    <div>
      <h1 className="text-lg font-bold m-4">Cart</h1>
      <p>
        <span className="font-bold">Total delivery Time:</span> {deliveryTime}{" "}
        min.
      </p>
      <p>
        <span className="font-bold">Total Price:</span> $ {price}
      </p>

      <button
        onClick={() => {
          setPrice((prev) => prev - 5);
          setIsCouponApplied(true);
        }}
        disabled={isCouponApplied}
        className="bg-gray-100 px-2 py-1 border rounded-md my-1 hover:bg-gray-200"
      >
        {isCouponApplied ? "Coupon Applied" : "Apply Coupon"}
      </button>
      <div className="flex gap-x-[40px] gap-y-8 flex-wrap my-3">
        {cartItems?.map((item) => (
          <FoodItem
            key={item.id}
            item={item}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
