import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1> React Practice Set 8</h1>
      <div>
        <NavLink to={"/ans1"}> Ans-1</NavLink>
      </div>
      <NavLink to={"/ans6"}> Ans-6</NavLink>
      <Outlet />
    </div>
  );
};

export default Home;
