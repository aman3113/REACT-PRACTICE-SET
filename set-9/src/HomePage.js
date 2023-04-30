import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">React Practice Set-9</h1>
      <NavLink
        className={(isActive) =>
          isActive ? "text-purple-500" : "text-blue-300"
        }
        to={"/ans1"}
      >
        Ans-1
      </NavLink>
    </div>
  );
};

export default HomePage;
