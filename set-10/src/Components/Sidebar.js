import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to={"/"}>Inbox</NavLink>

      <NavLink to={"/spam"}> Spam</NavLink>

      <NavLink to={"/trash"}> Trash</NavLink>
    </div>
  );
};

export default Sidebar;
