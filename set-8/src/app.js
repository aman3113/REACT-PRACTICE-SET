import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fakeFetch1 } from "./Data";
import { DoneToDo } from "./Ans6/DoneToDo";
import Ans1 from "./Ans1/Ans1";
import Layout from "./Ans1/Layout";
import Cart from "./Ans1/Cart";
import SingleItem from "./Ans1/SingleItem";
import WishList from "./Ans1/WishList";
import Ans6 from "./Ans6/Ans6";
import Home from "./Home";
import SummaryPage from "./Ans6/SummaryPage";
import OpenToDo from "./Ans6/OpenToDo";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fakeFetch1("https://example.com/api/products");
      setProducts(() => data.data.products);
    }
    getData();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/ans1" element={<Ans1 />}>
            <Route
              index={true}
              element={
                <Layout products={products} setCartItems={setCartItems} />
              }
            />
            <Route
              path="cart"
              element={
                <Cart cartItems={cartItems} setCartItems={setCartItems} />
              }
            />
            <Route path="wishlist" element={<WishList />} />
            <Route
              path="item/:itemId"
              element={<SingleItem products={products} />}
            />
          </Route>
          <Route path="/ans6" element={<Ans6 />}>
            <Route index={true} element={<SummaryPage />} />
            <Route path="open-todo" element={<OpenToDo />} />
            <Route path="done-todo" element={<DoneToDo />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
