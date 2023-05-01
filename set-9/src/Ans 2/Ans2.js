import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { BooksContext } from "./BooksContext";

const Ans2 = () => {
  const { favoriteBooks } = useContext(BooksContext);
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl text-center font-bold">Books App</h1>
      <NavLink className="text-blue-400 text-center" to={"/"}>
        Back to Home
      </NavLink>
      <div className="flex gap-2 underline">
        <NavLink
          className={(isActive) => (isActive ? " text-purple-400" : "")}
          to={"/ans2"}
        >
          All Books
        </NavLink>
        <NavLink
          className={(isActive) => (isActive ? " text-purple-400" : "")}
          to={"favourite"}
        >
          Favourite({favoriteBooks.length})
        </NavLink>
        <NavLink
          className={(isActive) => (isActive ? " text-purple-400" : "")}
          to={"read"}
        >
          Read
        </NavLink>
        <NavLink
          className={(isActive) => (isActive ? " text-purple-400" : "")}
          to={"profile"}
        >
          Profile
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Ans2;
