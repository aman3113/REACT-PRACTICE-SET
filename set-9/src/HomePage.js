import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>React Practice Set-9</h1>
      <NavLink to={"/"}>Back to Home</NavLink>
      <NavLink to={"/ans1"}>Ans-1</NavLink>
    </div>
  );
};

export default HomePage;
