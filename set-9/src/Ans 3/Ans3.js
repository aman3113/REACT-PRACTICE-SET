import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FoodContext } from "./FoodContext";

const Ans3 = () => {
  const { cartItems } = useContext(FoodContext);
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl text-center font-bold">Restaurant App</h1>
      <NavLink className="text-blue-400 text-center" to={"/"}>
        Back to Home
      </NavLink>
      <div className="flex gap-2 underline text-purple-400">
        <NavLink to={"/ans3"}>Home</NavLink>
        <NavLink to={"menu"}>Menu</NavLink>
        <NavLink to={"cart"}>Cart({cartItems.length})</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Ans3;
