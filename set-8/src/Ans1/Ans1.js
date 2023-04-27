import React, { useState } from "react";

import { createContext } from "react";
import { Outlet } from "react-router-dom";

export const wishContext = createContext();

const Ans1 = () => {
  const [wishList, setWishList] = useState([]);

  return (
    <div>
      <h1>Ans - 1</h1>
      <wishContext.Provider value={{ wishList, setWishList }}>
        <Outlet />
      </wishContext.Provider>
    </div>
  );
};

export default Ans1;
