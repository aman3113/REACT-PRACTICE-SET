import React, { createContext, useEffect, useState } from "react";
import { fakeFetch3 } from "../Data";

export const FoodContext = createContext();
const FoodContextProvider = ({ children }) => {
  const [foodData, setFoodData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getFoodData = async () => {
      const resp = await fakeFetch3("https://example.com/api/menu");
      setFoodData(
        resp.data.menu.map((item) => ({ ...item, isAddedToCart: false }))
      );
    };
    getFoodData();
  }, []);

  useEffect(() => {
    setCartItems(foodData.filter((item) => item.isAddedToCart));
  }, [foodData]);

  return (
    <FoodContext.Provider value={{ foodData, setFoodData, cartItems }}>
      {children}
    </FoodContext.Provider>
  );
};

export default FoodContextProvider;
