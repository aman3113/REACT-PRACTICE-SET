import React, { useContext, useEffect, useState } from "react";
import { FoodContext } from "./FoodContext";
import FoodItem from "./FoodItem";

const MenuPage = () => {
  const { foodData, setFoodData } = useContext(FoodContext);
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    setMenuList(foodData);
  }, [foodData]);

  const handleAddToCart = (id) => {
    setFoodData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isAddedToCart: true } : item
      )
    );
  };

  return (
    <div>
      <h1 className="text-lg font-bold m-4">Menu</h1>
      <div className="flex gap-x-[40px] gap-y-8 flex-wrap my-3">
        {menuList?.map((item) => (
          <FoodItem
            item={item}
            key={item.id}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
