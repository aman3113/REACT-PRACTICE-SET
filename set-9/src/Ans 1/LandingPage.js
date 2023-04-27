import React from "react";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>My Mail Box</h1>
      <NavLink to={"inbox"}>Inbox</NavLink>
      <NavLink to={"sent"}>Sent</NavLink>
    </div>
  );
};

export default LandingPage;
