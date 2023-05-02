import React, { useContext, useEffect, useState } from "react";
import { FoodContext } from "./FoodContext";
import FoodItem from "./FoodItem";

const MenuPage = () => {
  const { foodData, setFoodData } = useContext(FoodContext);
  const [menuList, setMenuList] = useState([]);

  const [input, setInput] = useState("");
  const [vegChecked, setVegChecked] = useState(false);
  const [spicyChecked, setSpicyChecked] = useState(false);

  useEffect(() => {
    setMenuList(
      foodData.filter((item) => {
        if (vegChecked && spicyChecked) {
          return item.is_vegetarian && item.is_spicy;
        } else if (spicyChecked) {
          return item.is_spicy;
        } else if (vegChecked) {
          return item.is_vegetarian;
        } else {
          return true;
        }
      })
    );
  }, [foodData, vegChecked, spicyChecked]);

  const handleAddToCart = (id) => {
    setFoodData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isAddedToCart: true } : item
      )
    );
  };

  const handleChange = (e) => {
    if (e.key === "Enter") {
      setMenuList(
        foodData.filter((item) =>
          item.name.toLowerCase().includes(input.toLowerCase())
        )
      );
      setInput("");
    }
  };

  return (
    <div>
      <h1 className="text-lg font-bold m-4">Menu</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleChange}
          placeholder="search food here"
        />

        <input
          type="checkbox"
          id="isSpicy"
          name="Spicy"
          checked={spicyChecked}
          onChange={() => setSpicyChecked(!spicyChecked)}
        />
        <label for="isSpicy">Spicy</label>

        <input
          type="checkbox"
          id="isVeg"
          name="Veg"
          checked={vegChecked}
          onChange={() => setVegChecked(!vegChecked)}
        />
        <label for="isVeg">Veg</label>
      </div>
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
