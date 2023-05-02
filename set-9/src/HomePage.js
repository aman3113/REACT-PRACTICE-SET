import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold text-center">React Practice Set-9</h1>
      <div>
        <NavLink
          className={(isActive) =>
            isActive ? "text-purple-500" : "text-blue-300"
          }
          to={"/ans1"}
        >
          Ans-1
        </NavLink>
      </div>

      <div>
        <NavLink
          className={(isActive) =>
            isActive ? "text-purple-500 " : "text-blue-300"
          }
          to={"/ans2"}
        >
          Ans-2
        </NavLink>
      </div>

      <div>
        <NavLink
          className={(isActive) =>
            isActive ? "text-purple-500" : "text-blue-300"
          }
          to={"/ans3"}
        >
          Ans-3
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
